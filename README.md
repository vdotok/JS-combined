# Vdotok QuickStart Source for chat messaging Demo

This is a demo project to demonstrate “Chat” using Angular 9+.

## Live Demo

Click <a href="https://combined.vdotok.com" target="_blank" title="Chat Demo">here</a> to visit the live demo of VdoTok JS WebApp.

## Prerequisites

- Node v4.x.x or later
- npm v3.x.x or later
- git version any

To verify the version of Node and npm, open **Terminal/Console** window and run `node -v` and `npm –v`. Older versions produce errors.
Click <a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank">here</a> to download and install the latest versions of Node and npm  
We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

<br/>

## Sign up to get credentials i.e Project ID, Authentication Token.

## Setting up the Local Environment:

To install Angular on your local system, you need the following:

### Node

Angular requires an active LTS or maintenance LTS version of Node. For more information on installing Node, see <a href="https://nodejs.org/en/" target="_blank">nodejs.org</a>. If you are unsure what version of Node runs on your system, run `node -v` in a **Terminal** window.

### npm Package Manager

Angular, the Angular CLI, and Angular applications depend npm packages on <a href="https://docs.npmjs.com/about-npm" target="_blank">npm packages</a> for many features and functions. To download and install npm packages, you need an npm Package Manager. This guide uses the npm client command line interface, which is installed with Node by default. To check that you have the npm client installed, run `npm -v` in a terminal window.

<br/>

## Install the Angular CLI

You can use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

> To install the Angular CLI, open a terminal window (ctrl + shift + c) and run the following command:

```shell
   npm install –g @angular/cli
```

Visit <a href="https://angular.io/guide/setup-local" target="_blank">Angular Setup</a> for more information.

<br/>

## Clone Repo

- Clone this **Repository URL** into new project folder (e.g., my-proj).

```shell
    git clone https://github.com/vdotok/JS-combined.git
    cd my-proj
```

Register at <a href="https://userpanel.vdotok.com/overview" target="_blank">VdoTok</a> to get **Authentication Token** and **Project ID**.

1. Click on this link -> https://vdotok.com/ in Chrome.

![My Remote Image](https://user-images.githubusercontent.com/87179594/184070841-f9b91f46-93df-4047-acfb-4739fd207aaa.jpg)

2. This will navigate to Sign Up page, where the User is required to enter the following information: First Name > Last Name > Email > Country > Password. Select Sign Up For Free button

![My Remote Image](https://user-images.githubusercontent.com/87179594/184070989-e8b26d85-6e64-4ef3-b6d7-56449738236c.jpg)

3. After successfully sign up User navigates to the main dashboad of VDOTOK. Where user can find the ProjectID and Api Key.

![My Remote Image](https://user-images.githubusercontent.com/87179594/184071060-9909513b-f880-4de8-9481-6ab91ae2be95.jpg)

#### After successful registration, you can update the existing projectID with your own projectID.

<br/>

## Add PROJECT ID and AUTHENTICATION Token.

- For messaging in combined application, You can update the projectID following these steps. ( JS-COMBINED -> src -> app -> shared -> services -> pubsub.service.ts ).
- For Many to Many call in combined application, you can update the ProjectID by following these steps. ( JS-COMBINED -> src -> app -> shared -> services -> vdk.m2m-call.service.ts ).
- For One to One call in combined application, you can update the ProjectID by following these steps. ( JS-COMBINED -> src -> app -> shared -> services -> vdk.one2one-call.service.ts ).

You have to Update Project_id at the Login and Signup request by following these steps.

- At Login request. ( JS-COMBINED -> src -> app -> components -> login -> login.component.ts )
- At Signup request. ( JS-COMBINED -> src -> app -> components -> sign-up -> sign-up.component.ts )
  After replacing the projectID at all the above places, compile and run the project.

### Base URL

You have to update BaseUrl with your own apiBaseUrl. You can update **apiBaseUrl** by following these steps.

- In environment.prod.ts File, (JS-COMBINED -> src -> environments -> environment.prod.ts)
- In environment.ts File, (JS-COMBINED -> src -> environments -> environment.ts)

## Install npm Packages:

Please refer to the above-stated npm and nvm version notes.

- Install the npm packages described in the `package.json` and verify that it works:

```shell
    npm install
    ng serve
```

- Open browser, the application is running at: **http://localhost:4200**
- Create **New Account** using Sign-up Form, and use the application

### How to Generate and Install Build:

Follow the commands below to generate a “build”

```shell
    ng build
    ng build --aot --configuration production --build-optimizer --outputHashing=all
```

### How to Configure SDK:

Add SDK into your index.html file. Declare a variable for your component or service:
`declare const MVDOTOK: any;`

User provides config to initiate the SDK

```shell
    const Client = new MVDOTOK.Client({
      projectID: "****",
      secret: "********************",
    });
    Client.on("authenticated", (res) => {
      let user = StorageService.getUserData();
      this.Client.Register(user.ref_id.toString(), user.authorization_token.toString());
    });
```

After Successful configuation, you can run the projcet locally by using this command.

```shell
    npm start or
    ng serve
```

Now open the browser and you can see the application at http://localhost:4200
