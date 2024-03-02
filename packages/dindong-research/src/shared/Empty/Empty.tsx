import { Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

import emptyImage from "src/assets/empty.png";

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
        <Typography variant="h5" fontWeight={800}>
          {title}
        </Typography>
        {description ? (
          <Typography color="text.secondary" variant="body1">
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
