# Project Setup

### Clone Repository

Clone the project with `https://gitlab.devpayever.com/frontend/commerceos` & It will ask for git lab credentials.

UserName : `Shivprasad.Kounsalye`
Password : `gnroKEwBXnRMkPLFJg6c`

Navigate to repository & open terminal.

### Verdaccio Setup

Run `npm login --registry=https://verdaccio.staging.devpayever.com/`

It will ask UserName, Password & Email and enter the details as mentioned below.

UserName : `shivprasad.kounsalye`
Password : `gnroKEwBXnRMkPLFJg6c`
Email : `shivprasad.kounsalye@payever.org`

### NPMRC setup

**For Windows :-**

- Run `echo "registry=https://verdaccio.staging.devpayever.com/" > .npmrc`
- Run `Add-Content .npmrc "@pe:registry=https://verdaccio.staging.devpayever.com/"`
- Run `echo "//verdaccio.staging.devpayever.com/:_authToken=gnroKEwBXnRMkPLFJg6c" >> .npmrc`
- Verify Npmrc with `type .npmrc`

    ```
    // It should display npmrc config as mentioned below.
    registry=https://verdaccio.staging.devpayever.com/
    @pe:registry=https://verdaccio.staging.devpayever.com/
    //verdaccio.staging.devpayever.com/:_authToken=gnroKEwBXnRMkPLFJg6
    ```
- Add .npmrc to .gitignore with `Add-Content .gitignore ".npmrc"` & verify its added to `.gitignore`.

### Dependencies Setup

- Install Node version `18.16.0` 
- Install Angular CLI version `12` with `npm install  @angular/cli@12`
- Install typescript version `4.0.5` with `npm install -g typescript@4.0.5`
- Clean the Cache with `npm cache clean --force`

### NPM INSTALL & RUNNING PROJECT

- Npm install with `npm install --legacy-peer-deps`
- Run the Project with `npm start`

`