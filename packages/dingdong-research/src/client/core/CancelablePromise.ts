export class CancelError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'CancelError';
	}

	public get isCancelled(): boolean {
		return true;
	}
}

export interface OnCancel {
	readonly isResolved: boolean;
	readonly isRejected: boolean;
	readonly isCancelled: boolean;

	(cancelHandler: () => void): void;
}

export class CancelablePromise<T> implements Promise<T> {
	private IsResolved: boolean;
	private IsRejected: boolean;
	private IsCancelled: boolean;
	readonly cancelHandlers: (() => void)[];
	readonly promise: Promise<T>;
	private Resolve?: (value: T | PromiseLike<T>) => void;
	private Reject?: (reason?: unknown) => void;

	constructor(
		executor: (
			resolve: (value: T | PromiseLike<T>) => void,
			reject: (reason?: unknown) => void,
			onCancel: OnCancel
		) => void
	) {
		this.IsResolved = false;
		this.IsRejected = false;
		this.IsCancelled = false;
		this.cancelHandlers = [];
		this.promise = new Promise<T>((resolve, reject) => {
			this.Resolve = resolve;
			this.Reject = reject;

			const onResolve = (value: T | PromiseLike<T>): void => {
				if (this.IsResolved || this.IsRejected || this.IsCancelled) {
					return;
				}
				this.IsResolved = true;
				if (this.Resolve) this.Resolve(value);
			};

			const onReject = (reason?: unknown): void => {
				if (this.IsResolved || this.IsRejected || this.IsCancelled) {
					return;
				}
				this.IsRejected = true;
				if (this.Reject) this.Reject(reason);
			};

			const onCancel = (cancelHandler: () => void): void => {
				if (this.IsResolved || this.IsRejected || this.IsCancelled) {
					return;
				}
				this.cancelHandlers.push(cancelHandler);
			};

			Object.defineProperty(onCancel, 'isResolved', {
				get: (): boolean => this.IsResolved,
			});

			Object.defineProperty(onCancel, 'isRejected', {
				get: (): boolean => this.IsRejected,
			});

			Object.defineProperty(onCancel, 'isCancelled', {
				get: (): boolean => this.IsCancelled,
			});

			return executor(onResolve, onReject, onCancel as OnCancel);
		});
	}

	get [Symbol.toStringTag]() {
		return "Cancellable Promise";
	}

	public then<TResult1 = T, TResult2 = never>(
		onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
		onRejected?: ((reason: unknown) => TResult2 | PromiseLike<TResult2>) | null
	): Promise<TResult1 | TResult2> {
		return this.promise.then(onFulfilled, onRejected);
	}

	public catch<TResult = never>(
		onRejected?: ((reason: unknown) => TResult | PromiseLike<TResult>) | null
	): Promise<T | TResult> {
		return this.promise.catch(onRejected);
	}

	public finally(onFinally?: (() => void) | null): Promise<T> {
		return this.promise.finally(onFinally);
	}

	public cancel(): void {
		if (this.IsResolved || this.IsRejected || this.IsCancelled) {
			return;
		}
		this.IsCancelled = true;
		if (this.cancelHandlers.length) {
			try {
				for (const cancelHandler of this.cancelHandlers) {
					cancelHandler();
				}
			} catch (error) {
				console.warn('Cancellation threw an error', error);
				return;
			}
		}
		this.cancelHandlers.length = 0;
		if (this.Reject) this.Reject(new CancelError('Request aborted'));
	}

	public get isCancelled(): boolean {
		return this.IsCancelled;
	}
}