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
  const tokenParam = params.get(TOKEN_KEY);

  const { workspaces = [], isLoading } = useWorkspaces();
  const mutation = useWorkspaceCreate();

  useEffect(() => {
    if (tokenParam) {
      token.set(TOKEN_KEY, tokenParam);
      router.replace("/workspaces");
      return;
    }

    if (isLoading) {
      return;
    }

    let workspaceId;

    if (workspaces.length > 0) {
      workspaceId = workspaces[0]?.id;
    } else {
      mutation
        .mutateAsync({ title: "내 워크스페이스" })
        .then((res) => (workspaceId = res.data.id));
    }

    router.replace(`/workspaces/${workspaceId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, mutation, router, tokenParam]);

  return <></>;
};

export default function Page() {
  return (
    <Suspense>
      <Redirect />
    </Suspense>
  );
}
