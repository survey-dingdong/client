import { Stack } from "@mui/material";
import SurveyListEmpty from "src/widgets/SurveyListEmpty/SurveyListEmpty";
import SurveyListPageHeader from "src/widgets/WorkspacePageHeader/WorkspacePageHeader";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <Stack height="100%">
      <SurveyListPageHeader />
      <SurveyListEmpty />
    </Stack>
  );
}
