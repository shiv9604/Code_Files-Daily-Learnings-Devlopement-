# Custom Libraries

Custom libraries are the npm libraries that are built by us within or out of the project & can be published on npm.

We are discussing the custom libraries in terms of angular custom libraries & we will be discussing in the same context.

### Creating Custom Libraries

For creating custom libraries we need to create a angular project first with `ng new project-name` which will create a angular project.

In the angular project we can setup different directory for custom libraries and in that we can open terminal with `cd foldername`.

For creating custom libraries we run `ng g library library-name` with which it creates a custom angular library project within the mentioned directory.

### Folder structure

In this section we will look into custom library folder structure, what are the meanings & purpose of each files.

**Folder structure :-**

- `src/ :-` In this directory we will have all our library code about its logic, services, modules, styles as same as src folder in project.

  - `public-api.ts :-` This is the most important file where every module, service, component, stylings, directives, pipes and everything to be used in another application should be exported here.


    ```
    // Example export
    export * from './lib/library-name.service';
    export * from './lib/library-name.component';
    export * from './lib/library-name.module';

    // We need to export other aspects of our application in this file.
    ```

  - `lib/ :-` In this directory we will have main code for the library such as module, services, component and other fundamental and required blocks of the application.
  
    - `library-name.component.ts :-` This will be inline-template intline-styling angular component where we will write our styles, html & class code within same file.
  
    - `library-name.component.spec.ts :-` This will be testing file for `library-name.component.ts` as it states.
  
    - `library-name.service.ts :-` This will be normal angular service file in which we will be writing shared methods.
    
    - `library-name.service.spec.ts :-` This will be testing file for `library-name.service.ts` as usual.
  
    - `library-name.module.ts :-` This will be module file as like `app.module.ts` in angular app as usuals where we need to configure the exports from the library such as components, directives, services or any other modules.
  

`Note :- In public.api.ts only export used service, component or module, lets consider if you not used component or module and only used service then remove default exports for component and module from it which will be helpfull for reducing bundle size.`

### Building Library

For building library we need to use `ng build library-name` as same as angular build.

### Publishing Library

For using this ui library in other projects we need to publish this librart to npm & we can download the library directly in another angular project and the directive, components, services pipes etc in another project.

**Steps to publish library :-**
- `ng build library-name :-` Before publishing library we need to build the library as we saw earlier.
  
- `npm login :-` We need to login to npm registery first for publishing our npm library.

- `cd dist/library-name :-` We need to be in build directory of the library before publishing library to npm.

- `npm publish :-` We need to run `npm publish` command for publishing the library to npm, it will checkout if there are any other librares with the same name, if yes it will throw error and if not then it will publish the library to npm.

### Renaming the library (If we recieve error while publishing)

For renaming the library we need to rename every directory name, file names including the `previous-library-name`.

For quickly renaming the library only for preventing duplicacy in npm we need to change the name in `package.json` to `new-library-name`.

`Note :- For building the library after rename, we need to use stil the previous name if we have not renamed the directory & file names to new names. If we have renamed old name at everywhere we can use new name while build.`

### Using published angular custom library in another project

For using the library in another app we need to install it form npm with `npm i library-name`.

Then we need to import the exported module in `app.module.ts` imports as `ExampleLibrayModule` and then we are able to use everything containing in that module within our application such as components, pipes, services etc.

