import { http, HttpResponse } from "msw";

const allProjects: any[] = [
  {
    id: 1,
    title: "project1",
    description: "description",
    is_public: false,
    start_date: "2024-05-01",
    end_date: "2024-05-31",
    excluded_dates: ["2024-05-08", "2024-05-15"],
    time_slots: [
      {
        id: 1,
        start_time: "10:00",
        end_time: "11:00",
        max_participants: 3,
      },
      {
        id: 2,
        start_time: "13:00",
        end_time: "14:00",
        max_participants: 3,
      },
    ],
    max_participants: 30,
    experiment_type: "online",
    location: "https://zoom.us/j/1234567890..",
    participant_code: "ABCD",
    created_at: "2024-03-03 23:51:23.046428",
    updated_at: "2024-03-03 23:51:23.046428",
  },
];

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

  http.get("/project", () => {
    return HttpResponse.json(allProjects[0]);
  }),
];
