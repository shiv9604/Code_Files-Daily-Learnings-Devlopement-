### Network (Internet) Connection Check in Ionic project

This plugin used for checking the network and internet connection in your ionic application.

- **We can build the functionaliy mentioned below :-**
    - First we need to install some dependecies in our project.
        1. `ionic cordova plugin add cordova-plugin-network-information `
        2. `npm install @ionic-native/network`
        3. `npm install @ionic-native/core`
    
    - Then we need to import in our **module.ts** file 
        `import {Network} form '@ionic-native/network/ngx';` ***in module.ts and app.component.ts*** and we need to add it in providers.

    - Then we need to initialize it in constuctor `constuctor(public network:Network){}`

    - Methods we have for networks.
        
        - `network.onDisconnect().subscribe(()=>{//code})` we need to write our code and further functionlity in our subcriber.

        - `network.onConnect().subscribe(()=>{//code})` We need to check this on connection on settimeout or interval.

        - `connectSubscription.unsubscribe();` To stop watching the network.

### File System

File system is a cordova plugin by which we can acess the phones storage and we can read and write files.

**Directories For Android :-**
- `externalDataDirectory :-` `files/android/data/app/files`
- `externalApplicationStorageDirectory :-` `files/android/data/app/`
- `externalRootDirectory :-`  `files/`
- `externalCacheDirectory :-`  `files/android/data/app/cache`

