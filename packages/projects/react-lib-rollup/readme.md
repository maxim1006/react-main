1) Add storybook 
npx -p @storybook/cli sb init --type react
2) Add ts support 
npm install -D @storybook/preset-typescript ts-loader fork-ts-checker-webpack-plugin typescript
3) Stupid settings for storybook
4) Add rollup 
npm install @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-peer-deps-external rollup-plugin-typescript2 -D
5) Add linting
npm install eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
6) npm install prettier -D
7) We want Prettier to be in charge of our code format. Therefore we need to disable any existing formatting rules in our ESLint configuration that might conflict.
npm install eslint-config-prettier eslint-plugin-prettier -D
8) add jest
npm install @types/jest @types/node jest ts-jest eslint-plugin-jest -D
9) https://kentcdodds.com/blog/introducing-the-react-testing-library
npm install @testing-library/react @testing-library/jest-dom @types/testing-library__react -D
