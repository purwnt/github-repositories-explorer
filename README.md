# Github repositories explorer

## 💻 Application Overview

The application is pretty simple. Users can search github username up to 5 users and explore their repositories.

Its using Github API v3

Demo [https://purwnt.github.io/github-repositories-explorer](https://purwnt.github.io/github-repositories-explorer)

Tech Stack:

- React
- Typescript
- React Query
- Tailwind
- Heroicons
- Axios
- Vite
- Vitest
- Playwright

## Data model

The application contains the following models:

- Users: represents searched github users.

- Repositories: represents all the repositories owned by selected github users.

## Get Started

Prerequisites:

- Node 16.9+
- Yarn 1.22+

To set up the app execute the following commands.

```bash
git clone https://github.com/purwnt/github-repositories-explorer.git
cd github-repositories-explorer
cp .env.example .env
yarn install
```

```
yarn dev
```

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

```
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Testing

#### Unit Testing

Run unit testing using Vitest

```
yarn test:unit
```

#### End-to-End Testing

Run end to end testing using playwright and chromium browser

```
yarn test:e2e
```
