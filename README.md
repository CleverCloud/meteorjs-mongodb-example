# Meteor.js + MongoDB Example Application on Clever Cloud
[![Clever Cloud - PaaS](https://img.shields.io/badge/Clever%20Cloud-PaaS-orange)](https://clever-cloud.com)

This is a simple Meteor.js application that demonstrates how to build a reactive click counter backed by MongoDB, and deploy it to Clever Cloud.

## About the Application

This application is a simple click counter that persists to MongoDB with real-time reactivity. It uses:

- **MongoDB** for data persistence
- **Blaze** for reactive templating
- **DDP** (Distributed Data Protocol) for real-time client-server synchronization

### Features

- Click a button to increment a counter
- Counter state persists in MongoDB
- Real-time updates across all connected clients

## Technology Stack

- [Meteor 3](https://www.meteor.com/) - Full-stack JavaScript framework
- [MongoDB](https://www.mongodb.com/) - NoSQL document database
- [Blaze](https://www.blazejs.org/) - Reactive template engine
- Node.js 22+

## Prerequisites

- Node.js 22+
- npm

## Running the Application Locally

```bash
npm install
meteor
```

The application will be accessible at http://localhost:3000.

> The application requires a running MongoDB instance. Meteor starts one automatically in development mode.

## Deploying on Clever Cloud

You have two options to deploy your application on Clever Cloud: using the Web Console or using the Clever Tools CLI.

> Meteor.js uses a lot of memory during the build. You most likely will need to activate the dedicated build feature and set your vertical scaling size at least to M.

### Option 1: Deploy using the Web Console

#### 1. Create an account on Clever Cloud

If you don't already have an account, go to the [Clever Cloud console](https://console.clever-cloud.com/) and follow the registration instructions.

#### 2. Set up your application on Clever Cloud

1. Log in to the [Clever Cloud console](https://console.clever-cloud.com/)
2. Click on "Create" and select "An application"
3. Choose "Meteor.js" as the runtime environment
4. Configure your application settings (name, region, etc.)

#### 3. Add a MongoDB Add-on

1. In your application's dashboard, go to "Service dependencies"
2. Click "Link add-ons" and select "MongoDB"
3. Choose the plan that fits your needs
4. Link the add-on to your application

#### 4. Activate the Dedicated Build

Meteor.js uses a lot of memory during the build. In your application's "Information" panel, enable the "Dedicated build instance" option and set your vertical scaling size to at least M.

#### 5. Set Environment Variables

In your application's "Environment variables" panel, add the following variables:

- `MONGO_URL`: Copy the value of `MONGODB_ADDON_URI` from the add-on's "Environment variables" tab. For MongoDB 5.n+, append `?directConnection=true`.
- `ROOT_URL`: Your application's URL (e.g., `https://<your-app-id>.cleverapps.io`)

The `PORT` environment variable is automatically set to `8080`.

#### 6. Deploy Your Application

You can deploy your application using Git:

```bash
# Add Clever Cloud as a remote repository
git remote add clever git+ssh://git@push-par-clevercloud-customers.services.clever-cloud.com/app_<your-app-id>.git

# Push your code to deploy
git push clever master
```

### Option 2: Deploy using Clever Tools CLI

#### 1. Install Clever Tools

Install the Clever Tools CLI following the [official documentation](https://www.clever-cloud.com/doc/clever-tools/getting_started/):

```bash
# Using npm
npm install -g clever-tools

# Or using Homebrew (macOS)
brew install clever-tools
```

#### 2. Log in to your Clever Cloud account

```bash
clever login
```

#### 3. Create a new application

```bash
# Initialize the current directory as a Clever Cloud application
clever create --type meteor <YOUR_APP_NAME>

# Add a MongoDB add-on
clever addon create mongodb-addon <YOUR_ADDON_NAME> --link <YOUR_APP_NAME>
```

#### 4. Activate the dedicated build

Meteor.js uses a lot of memory during the build. Enable a dedicated build instance with at least an M flavor:

```bash
clever scale --build-flavor M
```

#### 5. Set environment variables

```bash
# Export the MONGODB_ADDON_URI from the add-on environment variables
export $(clever env | grep MONGODB_ADDON_URI | tr -d '"')

# Set MONGO_URL using the exported value
clever env set MONGO_URL "${MONGODB_ADDON_URI}?directConnection=true"

# Set the root URL for your application
clever env set ROOT_URL "https://$(clever domain | tr -d ' ')"
```

#### 6. Deploy your application

```bash
clever deploy
```

#### 7. Open your application in a browser

Once deployed, you can access your application at the URL provided by Clever Cloud.

```bash
clever open
```

### Monitoring Your Application

Once deployed, you can monitor your application through:

- **Web Console**: The Clever Cloud console provides logs, metrics, and other tools to help you manage your application.
- **CLI**: Use `clever logs` to view application logs and `clever status` to check the status of your application.

## Additional Resources

- [Meteor Documentation](https://docs.meteor.com/)
- [Clever Cloud Meteor.js Documentation](https://www.clever-cloud.com/developers/doc/applications/meteor/)
- [Clever Cloud Documentation](https://www.clever-cloud.com/doc/)
