"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { TOKEN_KEY } from "src/constants/token";
import { useWorkspaceCreate } from "src/hooks/useWorkspaceCreate";
import { useWorkspaces } from "src/hooks/useWorkspaces";

export default function Page() {
  const router = useRouter();
  const params = useSearchParams();
  const tokenParam = params.get(TOKEN_KEY);

  const { workspaces, isLoading } = useWorkspaces();
  const mutation = useWorkspaceCreate();

  useEffect(() => {
    if (tokenParam) {
      sessionStorage.setItem(TOKEN_KEY, tokenParam);
      router.replace("/workspaces");
      return;
    }

    if (isLoading) {
      return;
    }

    let workspaceId;

    if (workspaces) {
      workspaceId = workspaces[0].id;
    } else {
      mutation
        .mutateAsync({ title: "내 워크스페이스" })
        .then((res) => (workspaceId = res.data.id));
    }

    router.replace(`/workspaces/${workspaceId}`);
  }, [isLoading, mutation, router, tokenParam, workspaces]);

  return <></>;
}
