import { createUserUsersPost } from "src/client";

export function fetchUserProfile(accessToken: string) {
  fetch(
    "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" +
      accessToken
  )
    .then((response) => response.json())
    .then((data) => {
      createUserUsersPost({
        requestBody: {
          email: data.email,
          username: data.name,
          password: "",
        },
      });
    })
    .catch((error) =>
      console.error("Error fetching user profile data:", error)
    );
}

export function handleCallback() {
  var fragmentString = location.hash.substring(1);
  var params: { access_token?: string } = {};
  var regex = /([^&=]+)=([^&]*)/g,
    m;
  while ((m = regex.exec(fragmentString))) {
    (params as any)[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }

  if (params.access_token) {
    fetchUserProfile(params.access_token);
  }
}
