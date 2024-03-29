![](https://img.shields.io/badge/Incomplete-FFB481?style=for-the-badge)&nbsp;
![](https://img.shields.io/badge/Inactive-DBC51B?style=for-the-badge)

# OthersPe

A cross-platform app built with an idea to share UPI requests with others as a payment link. How to use?

- Use the app to scan any UPI QR code
- Enter the amount and note (optional)
- Hit the share button to share on any social media

### Design

See on [Figma](https://www.figma.com/file/r6tQdHNKlRcLAZfNfZNmOH/OthersPe?type=design&node-id=70%3A1092&mode=design&t=x8NJVBwJENHJfUyF-1)

![](./sample/design.jpg)

### Technologies

[![](https://img.shields.io/badge/Ionic-v7-176bff?style=for-the-badge&logo=ionic)](https://ionicframework.com/)
[![](https://img.shields.io/badge/Capacitor-v5-119eff?style=for-the-badge&logo=capacitor)](https://capacitorjs.com/)
[![](https://img.shields.io/badge/React-v18-149eca?style=for-the-badge&logo=react)](https://react.dev/)
[![](https://img.shields.io/badge/Tailwind-v3-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![](https://img.shields.io/badge/TypeScript-v4-3178c6?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![](https://img.shields.io/badge/Vite-v4-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)

---

## Getting started

Prepare development environment
```bash
yarn install
yarn sync # sync the assets with native projects
```

### Working with Web

````bash
yarn start # start the development server
yarn build # generate the production build
````

### Working with iOS
```bash
yarn ios # start the project in simulator
yarn build:ios # generate the production build & open in Xcode
```

### Working with Android
```bash
yarn android # start the project in emulator
yarn build:android # generate the production build & open in Android Studio
```

## Project Structure
```
|-- android                   ℹ️ generated android project
|-- ios                       ℹ️ generated ios project
|-- public                    ℹ️ keep your static resource files
|-- src
|   |-- common
|   |   |-- components
|   |   |   |-- elements      ℹ️ keep your state-less components
|   |   |   |                 ℹ️ keep your state-full components
|   |   |-- hoc
|   |   |-- hooks
|   |   |-- layouts
|   |   |-- sections          ℹ️ keep your common sections
|   |-- core
|   |   |-- config            ℹ️ keep your configuration files
|   |   |-- constants
|   |   |-- types
|   |   |-- utils
|   |-- lib
|   |-- modules
|   |-- pages
|   |-- theme
```

## How to's

### Update App Logo

> https://github.com/ionic-team/capacitor-assets#usage

- Create following three variants of the logo in the `resources/`
  - icon-foreground.png
  - icon-background.png
  - icon-only.png - actual logo with background
- Run the following command:
  ```bash
  npx @capacitor/assets generate
  ```
