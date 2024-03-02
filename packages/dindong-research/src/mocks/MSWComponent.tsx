"use client";
/**
 * Initialize MSW (Mock Service Worker) for API mocking in development and client-side only.
 */
async function initMSW() {
  if (
    process.env.NEXT_PUBLIC_API_MOCKING === "enabled" &&
    typeof window !== "undefined"
  ) {
    const { worker } = await import("../mocks/browser");
    worker.start();
  }
}

//
//
//

interface MSWComponentProps {
  children?: React.ReactNode;
}

const MSWComponent = ({ children }: MSWComponentProps) => {
  initMSW();
  return children;
};

export default MSWComponent;
