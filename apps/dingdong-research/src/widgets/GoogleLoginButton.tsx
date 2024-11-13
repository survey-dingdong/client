import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import googleImage from "public/icons/google.png";

/*
 * Create form to request access token from Google's OAuth 2.0 server.
 */
function oauthSignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement("form");
  form.setAttribute("method", "GET"); // Send as a GET request.
  form.setAttribute("action", oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URI,
    response_type: "token",
    scope: "email profile",
    include_granted_scopes: "true",
    state: "pass-through value",
  };

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", p);
    input.setAttribute("value", (params as any)[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}

const GoogleLoginButton = () => {
  return (
    <Button
      variant="outlined"
      sx={{ textTransform: "none" }}
      onClick={oauthSignIn}
    >
      <Image
        src={googleImage.src}
        alt=""
        width={18}
        height={18}
        style={{ marginRight: 8 }}
      />
      Google 계정으로 로그인
    </Button>
  );
};

export default GoogleLoginButton;
