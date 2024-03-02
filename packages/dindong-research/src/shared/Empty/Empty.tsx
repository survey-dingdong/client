import { Stack, Typography } from "@mui/material";
import React from "react";
import emptyImage from "src/assets/empty.png";
import Image from "next/image";

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
        src={imageSrc ?? emptyImage.src}
        width={imageSize}
        height={imageSize}
      />

      {/* title and description */}
      <Stack gap={0.5}>
        <Typography variant="h5" fontWeight={800} color="text.secondary">
          {title}
        </Typography>
        {description ? (
          <Typography color="text.tertiary">{description}</Typography>
        ) : null}
      </Stack>

      {/* action button */}
      {action ?? null}
    </Stack>
  );
};

export default Empty;
