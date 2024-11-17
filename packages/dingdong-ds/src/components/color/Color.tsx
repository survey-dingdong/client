import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

const Color: React.FC = () => {
  const theme = useTheme();

  const paletteKey = Object.keys(theme.palette) as Array<
    keyof typeof theme.palette
  >;

  return (
    <Stack gap="2rem" padding="2rem">
      <Typography variant="display1" fontWeight="bold">
        Semantic Colors
      </Typography>

      <Divider />
      <Stack display="grid" gridTemplateColumns="1fr 2fr">
        <Typography variant="title1">light theme</Typography>
        <Stack>
          <Stack>
            <Typography variant="title2">Color</Typography>
          </Stack>

          {paletteKey.map((key) => {
            const colorKeys = Object.keys(theme.palette[key]) as Array<
              keyof (typeof theme.palette)[keyof typeof theme.palette]
            >;

            if (!colorKeys.length) {
              return null;
            }

            return (
              <Stack key={key} gap="1rem">
                <Typography variant="title1">{key}</Typography>
                <Stack flexDirection="row" flexWrap="wrap" gap="1rem">
                  {colorKeys.map((colorKey) => {
                    const color = theme.palette[key][colorKey];

                    if (!color || typeof color !== "string") {
                      return null;
                    }

                    const lowerCaseColor = (color as string).toLowerCase();

                    return (
                      <Stack key={colorKey} gap="0.5rem">
                        <Box
                          sx={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "10px",
                            backgroundColor: color,
                            border: (theme) =>
                              lowerCaseColor === "#fff" ||
                              lowerCaseColor === "#ffffff"
                                ? `1px solid ${theme.palette.grey[300]}`
                                : undefined,
                          }}
                        />
                        <Typography variant="title2">{colorKey}</Typography>
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Color;
