# Job Ads Checkout system

Frontend application for the new job ads checkout system.

## Setup

```sh
yarn
yarn start
```

Open [localhost:3000](http://localhost:3000) for local development.  


## Folder Structure

After download, your project should look like this:

```
frontend/               # if you don't change the local project name
├── .gitignore
├── package.json
├── README.md
├── node_modules/
├── public/
└── src/
    └── actions/               # All actions must be add here
    └── components/            # All reusable components must be add here
    └── constants/             # All constants must be set here
    └── containers/            # All container components must be add here
    └── reducers/              # All reducers must be set here
    └── service/               # All services must be add here
    └── types/                 # All types must be set here
```

## Available Scripts

#### `yarn start`

Runs the app in development mode.

#### `yarn flow`

Runs the flow to static type checker.

#### `yarn run build`

Builds the app for production to the build folder.
