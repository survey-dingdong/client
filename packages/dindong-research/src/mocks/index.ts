const isBrowser = typeof window !== "undefined";

export async function initMSW() {
  if (!isBrowser) {
    const { server } = await import("./server");
    await server.listen();
  }

  if (isBrowser) {
    const { worker } = await import("./browser");
    await worker.start();
  }
}
