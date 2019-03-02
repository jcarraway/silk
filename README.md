# Silk

An experiment to see how much code sharing can be achieved across a Yarn workspace using React Native Web, SSR via NextJS for web, mobile apps using React Native, and Electron for desktop

---

## To setup

- `yarn` in root to install dependencies
- `cd packages/web && yarn dev`
- `cd packages/mobile && yarn ios && yarn android`

---

## Current Issues

- unable to share components from `common` in `web` due to transpilation errors (cannot find internal `react-native` modules)
- works fine if you develop components in web package for now
