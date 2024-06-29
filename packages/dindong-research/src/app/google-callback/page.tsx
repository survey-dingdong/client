"use client";

import { handleCallback } from "src/utils/googleLogin";

export default function Page() {
  console.log("q");
  handleCallback();
  return <div>hi</div>;
}
