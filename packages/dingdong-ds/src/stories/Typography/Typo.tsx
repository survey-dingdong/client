// Typography.stories.tsx
import { Typography, TypographyProps } from "@mui/material";
import React from "react";

type TypographyStyle = {
  name: string;
  size: string;
  lineHeight: string;
  letterSpacing: string;
  exampleText: string;
  variant: TypographyProps["variant"];
};

const typographyStyles: TypographyStyle[] = [
  {
    name: "Display 1",
    size: "56px",
    lineHeight: "72px (1.286)",
    letterSpacing: "-0.0319em",
    exampleText: "역시 마찬가지로,\nLorem ipsum\n역시 lorem 마찬가지로",
    variant: "display1",
  },
  {
    name: "Display 2",
    size: "40px",
    lineHeight: "52px (1.3)",
    letterSpacing: "-0.0282em",
    exampleText: "단순히 고통이 라는 이유\nLorem ipsum\ndolor sit amet",
    variant: "display2",
  },
  // ... Add all other styles from the image
];

const TypographyPage: React.FC = () => (
  <div style={{ padding: "20px", fontFamily: "Pretendard, sans-serif" }}>
    <h1 style={{ marginBottom: "10px" }}>Typography</h1>
    <p style={{ marginBottom: "40px" }}>Pretendard를 사용합니다.</p>
    <h2
      style={{
        borderBottom: "1px solid black",
        paddingBottom: "5px",
        marginBottom: "20px",
      }}
    >
      스타일
    </h2>
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th
            style={{
              textAlign: "left",
              padding: "10px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            명칭
          </th>
          <th
            style={{
              textAlign: "left",
              padding: "10px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            크기
          </th>
          <th
            style={{
              textAlign: "left",
              padding: "10px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            행간
          </th>
          <th
            style={{
              textAlign: "left",
              padding: "10px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            자간
          </th>
          <th
            style={{
              textAlign: "left",
              padding: "10px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            미리보기
          </th>
        </tr>
      </thead>
      <tbody>
        {typographyStyles.map((style) => (
          <tr key={style.name}>
            <td
              style={{
                verticalAlign: "top",
                padding: "10px 0",
                borderBottom: "1px solid #ddd",
              }}
            >
              {style.name}
            </td>
            <td
              style={{
                verticalAlign: "top",
                padding: "10px 0",
                borderBottom: "1px solid #ddd",
              }}
            >
              {style.size}
            </td>
            <td
              style={{
                verticalAlign: "top",
                padding: "10px 0",
                borderBottom: "1px solid #ddd",
              }}
            >
              {style.lineHeight}
            </td>
            <td
              style={{
                verticalAlign: "top",
                padding: "10px 0",
                borderBottom: "1px solid #ddd",
              }}
            >
              {style.letterSpacing}
            </td>
            <td
              style={{
                width: "400px",
                padding: "10px 0",
                borderBottom: "1px solid #ddd",
              }}
            >
              <Typography variant={style.variant}>
                {style.exampleText}
              </Typography>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TypographyPage;
