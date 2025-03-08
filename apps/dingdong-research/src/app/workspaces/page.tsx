"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { TOKEN_KEY } from "src/constants/token";
import { useWorkspaceCreate } from "src/hooks/useWorkspaceCreate";
import { useWorkspaces } from "src/hooks/useWorkspaces";
import { token } from "src/utils/token";

const Redirect = () => {
  const router = useRouter();
  const params = useSearchParams();
  const tokenParam = params?.get(TOKEN_KEY);

  const { workspaces = [], isLoading } = useWorkspaces();
  const mutation = useWorkspaceCreate({ hideSnackbar: true });

  useEffect(() => {
    const handleRedirection = async () => {
      try {
        if (tokenParam) {
          token.set(TOKEN_KEY, tokenParam);
          router.replace("/workspaces");
          return;
        }

        if (isLoading) {
          return;
        }

        if (workspaces[0]?.id) {
          router.replace(`/workspaces/${workspaces[0].id}`);
        } else {
          const res = await mutation.mutateAsync({ title: "내 워크스페이스" });
          if (!res.data.id) {
            throw new Error("Failed to create workspace");
          }
          router.replace(`/workspaces/${res.data.id}`);
        }
      } catch (error) {
        console.error("Error during redirection:", error);
        throw error; // This will be caught by the ErrorBoundary
      }
    };

    handleRedirection();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return <></>;
};

export default function Page() {
  const router = useRouter();
  return (
    <Suspense>
      <Redirect />
    </Suspense>
  );
}
