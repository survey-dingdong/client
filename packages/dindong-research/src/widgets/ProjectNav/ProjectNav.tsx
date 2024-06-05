"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Nav } from "src/shared";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { usePath } from "src/hooks/usePath";
import { useWorkspaces } from "src/hooks/useWorkspaces";
import axios from "axios";
import { ProjectTypeEnum } from "generated-client";
import { useSnackbar } from "notistack";
import { useQueryClient } from "@tanstack/react-query";
import { getProjectsQueryKey } from "src/hooks/useProjects";
import { useProject } from "src/hooks/useProject";
//
//
//

export const drawerWidth = 256;

//
//
//

const ProjectNav = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const { projectId, workspaceId } = useParams();
  const _workspaceId = Number(workspaceId);

  const { workspaces } = useWorkspaces();
  const { project } = useProject({
    workspaceId: Number(workspaceId),
    projectId: Number(projectId),
  });

  const informationPath = usePath({ type: "project", slug: "/information" });
  const participantsPath = usePath({ type: "project", slug: "/participants" });
  const chatPath = usePath({ type: "project", slug: "/chat" });

  const workspacesPath = usePath({
    type: "workspace",
    slug: "/",
    workspaceId: _workspaceId,
  });

  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);

  /**
   *
   */
  const handleDeleteProject = async () => {
    try {
      await axios.delete(`/workspaces/${workspaceId}/projects/${projectId}`, {
        params: { project_type: ProjectTypeEnum.Experiment },
      });

      queryClient.invalidateQueries({ queryKey: getProjectsQueryKey });

      router.push(workspacesPath);

      enqueueSnackbar("프로젝트가 삭제되었습니다.", { variant: "success" });
    } catch (_) {
      enqueueSnackbar("프로젝트 삭제에 실패했습니다.", { variant: "error" });
    }
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const renderDialog = () => {
    return (
      <Dialog open={open} maxWidth="xs" fullWidth onClose={handleDialogClose}>
        <DialogTitle>프로젝트 삭제</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <b>{project?.title}</b> 프로젝트가 삭제됩니다. 계속하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleDialogClose}>
            취소
          </Button>
          <Button color="error" onClick={handleDeleteProject}>
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  //
  //
  //

  return (
    <Nav>
      <Button
        component={Link}
        href={workspaces ? `/workspaces/${workspaces[0].id}` : "/"}
        variant="text"
        color="inherit"
        startIcon={<ArrowBackRoundedIcon fontSize="small" />}
        sx={{ justifyContent: "flex-start" }}
        fullWidth
      >
        프로젝트 홈
      </Button>
      <List
        subheader={
          <ListSubheader
            component="div"
            sx={{ position: "static" }}
            style={{ fontWeight: 700 }}
          >
            프로젝트 메뉴
          </ListSubheader>
        }
        sx={{ flexGrow: 1 }}
      >
        <ListItem disablePadding>
          <ListItemButton
            LinkComponent={Link}
            href={informationPath}
            selected={pathname.includes("/information")}
          >
            <ListItemIcon>
              <i className="fa-regular fa-clone"></i>
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ variant: "body2", fontWeight: 500 }}
            >
              프로젝트 정보
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            LinkComponent={Link}
            href={participantsPath}
            selected={pathname.includes("/participants")}
          >
            <ListItemIcon>
              <i className="fa-regular fa-user"></i>
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ variant: "body2", fontWeight: 500 }}
            >
              참여자
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            LinkComponent={Link}
            href={chatPath}
            selected={pathname.includes("/chat")}
          >
            <ListItemIcon>
              <i className="fa-regular fa-comment-dots" />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ variant: "body2", fontWeight: 500 }}
            >
              채팅
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

      {/* add workspace button */}
      <Button color="inherit" onClick={() => setOpen(true)}>
        프로젝트 삭제
      </Button>
      {renderDialog()}
    </Nav>
  );
};

export default ProjectNav;
