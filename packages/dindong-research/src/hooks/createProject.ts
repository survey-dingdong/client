import axios from "axios";
import { useState } from "react";

type ProjectData = {
  name: string;
};

// POST 요청을 처리하는 함수
export async function createProject(data: ProjectData) {
  const response = await axios.post("/project/create", data);
}
