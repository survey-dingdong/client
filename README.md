# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### 새로 도입해 본 기술 스킬

1. **msw (Mock Service Worker)**

   - 설명: msw는 서비스 워커를 이용하여 API 요청을 가로채고 모의 응답을 반환하는 도구입니다. 이를 통해 백엔드 없이도 프론트엔드 코드를 테스트하거나 개발할 수 있습니다.
   - 도입 이유: 백엔드 서비스가 개발되지 않은 상태에서 API 통신을 테스트하고 싶었기 때문에 도입하였습니다. 이를 통해 개발 속도를 높일 수 있었습니다.

2. **jest**

   - 설명: jest는 자바스크립트 테스팅 프레임워크입니다. 유닛 테스트, 통합 테스트 등 다양한 종류의 테스트를 지원합니다.
   - 도입 이유: 코드의 품질을 높이고 유지보수를 용이하게 하기 위해 테스팅 도구가 필요했습니다. jest는 활발한 커뮤니티와 광범위한 지원을 제공하기 때문에 선택하였습니다.

3. **yarn berry**

   - 설명: yarn berry는 yarn의 2.x 버전입니다. Plug’n’Play(PnP)를 통해 노드 모듈을 설치하지 않고도 패키지를 사용할 수 있습니다.
   - 도입 이유: 노드 모듈의 설치 시간을 줄이고 프로젝트의 전체적인 성능을 향상시키기 위해 도입하였습니다.

4. **vite**

   - 설명: vite는 프론트엔드발 환경을 구축하기 위한 도구입니다. ES 모듈을 이용 빠른 개발 서버 시작과 HMR(Hot Module Replacement)을 제공합니다
   - 도입 이유: 웹팩보다 더 빠른 개발 서버 시작 시간과 HMR 기능을 제공하기 때문에 도입하였습니다.

5. **Next.js 14**

   - 설명: Next.js는 리액트 기반의 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG)을 지원하는 프레임워크입니다.
   - 도입 이유: SEO 최적화와 초기 로딩 성능 향상을 위해 SSR 및 SSG를 지원하는 Next.js를 도입하였습니다.

6. **mono-repo**

   - 설명: mono-repo는 여러 패키지를 하나의 저장소에서 관리하는 방식입니다.
   - 도입 이유: 프로젝트의 크기와 복잡성이 증가함에 따라 패키지 관리를 더 효율적으로 하기 위해 도입하였습니다. 이를 통해 중복 코드를 줄이고 코드의 재사용성을 높일 수 있었습니다.

7. **zustand**
   - 설명: Zustand는 React 애플리케이션에서 전역 상태를 간편하게 관리하기 위한 도구입니다.
   - 도입 이유: 상태관리가 간편하고 컴포넌트가 필요로 하는 상태만을 업데이트하여 성능향상에 도움이 되며 React Hooks와 함께 사용하기 이상적입니다.
