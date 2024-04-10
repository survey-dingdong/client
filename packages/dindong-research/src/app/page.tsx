import { Button, Stack } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Stack gap={1}>
        처음 입장했을 때 보여지는 화면입니다.
        <span>
          <Button LinkComponent={Link} href="/workspaces">
            워크 스페이스로 이동
          </Button>
        </span>
      </Stack>
    </main>
  );
}
