import { http, HttpResponse } from "msw";

const allProjects: any[] = [];

export const handlers = [
  http.get("/projects", () => {
    return HttpResponse.json(allProjects);
  }),

  http.post("/project/create", async ({ request }) => {
    const newProject = await request.json();
    const newProjectId = allProjects.length + 1;

    if (typeof newProject !== "object" || newProject === null) {
      // Handle the error here.
      return;
    }

    allProjects.push({ id: newProjectId, ...newProject });
    return HttpResponse.json(newProject, { status: 200 });
  }),
];
