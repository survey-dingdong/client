import fs from "fs";
import path from "path";

// 대상 디렉토리
const targetDir = path.resolve(__dirname, "./src/client");

// 대상 파일 확장자
const fileExtensions = [".ts", ".js"];

// snake_case를 camelCase로 변환하는 함수
function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}

// 디렉토리를 순회하며 파일 내용을 변환하는 함수
function convertToCamelCase(dir: string) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      convertToCamelCase(fullPath);
    } else if (fileExtensions.includes(path.extname(file))) {
      let content = fs.readFileSync(fullPath, "utf8");

      // 문자열 리터럴을 제외한 모든 snake_case를 camelCase로 변환
      content = content.replace(/[_][a-z]/g, (match) => snakeToCamel(match));

      fs.writeFileSync(fullPath, content, "utf8");
    }
  });
}

convertToCamelCase(targetDir);
