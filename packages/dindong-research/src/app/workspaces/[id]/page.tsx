import SurveyListEmpty from "@/widgets/SurveyListEmpty/SurveyListEmpty";
import SurveyListPageHeader from "@/widgets/WorkspacePageHeader/WorkspacePageHeader";
import { Stack } from "@mui/material";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <Stack height="100%">
      <SurveyListPageHeader />
      <SurveyListEmpty />
    </Stack>
  );
}
