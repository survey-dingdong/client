import { Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

import emptyImage from "./assets/empty.png";

//
//
//

interface EmptyProps {
  imageSrc?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

//
//
//

const imageSize = 150;

//
//
//

const Empty: React.FC<EmptyProps> = ({
  imageSrc,
  title,
  description,
  action,
}) => {
  return (
    <Stack gap={2} alignItems="center" height="100%" justifyContent="center">
      {/* image */}
      <Image
        alt="empty"
        src={typeof imageSrc === "string" ? imageSrc : emptyImage}
        width={imageSize}
        height={imageSize}
      />

      {/* title and description */}
      <Stack gap={0.5} alignItems="center">
        <Typography variant="headline1" fontWeight={800}>
          {title}
        </Typography>
        {description ? (
          <Typography
            color="text.secondary"
            variant="body1Normal"
            whiteSpace="pre-wrap"
            textAlign="center"
          >
            {description}
          </Typography>
        ) : null}
      </Stack>

      {/* action button */}
      {action ?? null}
    </Stack>
  );
};

export default Empty;
