### Monorepos

Monorepos is the type of angular application architecture where we create application in smaller chunks, such as micro-front ends, Custom libraries, design system etc.

we use `Nwrl NX` for monorepo setup with angular which provides its own CLI for configuration the application from its creation till its build.

**Types of monorepos :-**

- `Organizational monorepos :-` Single repo is used thorughout the orgranization including different projects, products managed within the same repository for preventing 100's of different repos.

- `Project level monorepos :-` In organizations there are project level monorepos in which every part of the application such as front-end, backend, databases, scripts, etc within single repositories.

### Benifits of NX

- **Automatic build :-** When we are dealing with custom libraries in enterprise angular app, we need to build the library for even for smallest change & again we need to build the consumption application, the tidious process of identifying the changes in module or libraries and building the necessary apps taken cared by nx.
  
- **e2e testing (Cypress) :-** Nx already has integration with cypress so whenever we are configuring project it configures e2e with cypress for our project.

- **Testing Framework :-** After angular dropped the support for karma, we need to figure out our unit testing framework from open source and we need to configure and use it. Nx comes with jest unit-testing framework with some other available options which we can decide according to our convinience.

- **Storybook Integration :-** We have built-in ui components library integration with nx which is storybook library widely used for angular apps.

- **Upgrades & Migrations :-** Ngx have feature for angular, cypress, storybook, jest & other built-in things from nx automatically without making any code level chages.

### Workspaces

Nx considers application considering everything at single place such as Custom Libraries, Front-end, Back-end, Pipelines etc, the place where this all rests is called as `nx workspace`.

we can create the workspace with `npx nx-create-workspace` and it will ask some configurations like routing, standalone or multiple app config, css etc.

**Standalone nx project :-**

Standalone nx project is the project which have simpler architecture without multiple projects nested in it, but we can customize it according to our requirements.

- `tsconfig.editor.json :-` we have `tsconfig.editor.json` file in which we can configure the strict type checking error should be shown within editor itself rahter than while compiling.

- `project.json :-` Normally in angular project we have `angular.json` file but with nx we have `project.json` file instead of `angular.json` and its quite similar to angular.json file, if we have multiple project inside our monorepo we will be having multiple `project.json` in our repo.

- `nx.json :-` In this file we have our configurations related to nx.
 
- `prettierrc :-` In this file we have prettier configuration.
  
- `prettierignore :-` In this file we have prettierIngore config.

- `eslintrc.json :-` In this file we will be having linting rules for our application.s

- `eslintignore.json :-` In this file we will be having lint ignore configurations.

- `test-setup.ts :-` Configures jest setup which is used by nx by default.

- `app.routes.ts :-` This file contains routes for application when we are using standalone apis from angualr 15+.

- `app.config.ts :-` This file contains the routing config for the appication, majorly the provider for routes with new standalone apis. 

In the `standalone app we dont have modules`, we have standalone components where we do all the necessary configuration in `@Component({})` decorator itself & it uses standadlone apis in thhis app so there will be some differentiation you might see in main.ts file.

**Integrated Nx Project :-**

Integrated Nx Project is full fleged nx monorepo where every feature of monorepo will be available and we can extend the features of nx according to our requirements.

- `apps/ :-` In this our project will be present & there will be another project as well created for its end to end testing inside it. Apps will have their own prettier, eslint, jest, tsconfig files extended with base `tsconfig.base.json` config.

- `tools/ :-`  

- `libs/ :-` When we had standalone nx project our libs used to get created in root directory but with integrated repo it will be created inside libs.

- `tsconfig.base.json :-` This is base tsConfig which will be extended by all the libraries & apps.

- `nx.json :-` In this file we have our configurations related to nx.
  
- `jest.config.ts :-` Base file for jest config which will be extended by all libs & apps.
  
- `jest.preset.ts :-` Base file for jest preset which will be extended by all libs & apps.
  


### Nx Console

We have serval commands with nx cli similar to framework commans related to angular, react or else with which we can create components, directives, services etc.

Rahter than initially going through all the commands and remembering those we can install the extension called as `Nx Console` thorugh which we can UI for the commands and their usecases.

We can use `Nx Console` for creating such parts of application.

### Int
