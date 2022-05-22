# Fire Base

What is Firebase? :- 
- Firebase is non relational NOSQL database and ready made backend for the project.

-  Its a realtime database in the cloud which provides authentication, cloud massaging, Storage, Analytics.

- Its provides librabry's for ios,android,c++ and javascript.

- In the side menu we will find the database section in which our data will be there.

### No SQL 
- It doesn't have schema and tables and columns.

- It's a tree of nodes (key:value) pairs

- Ex : MongoDB,Firebase

- Each node can be key value pair or complex object.

**For using firebase with angular you we need to install firebase and angular fire with npm install as mentioned below :**

### System Configuration -  
1. `npm install -g firebase-tools` :- it will install the firebase globally on your system.

2. `firebase login` : - it will open google login page soo we can login to our firebase acc over there.

3. `firebase projects:list` - It will give us the list of project in which firebase is used.

### project configuration - 
1. `npm install firebase @angular/fire` - It will install angular and angular fire to your project.

    **As we installed the @angular/fire we dont need to add the scripts mentioned over there.**

2. **Add your firebase object** to your **enviornment.ts** file which you will get from your firebase project.

3. Then at last we need to import enviornment.ts and in the module.ts file and we need to initialize the app as like mentioned below.
```
import {enviornment} from '../../enviornments/enviornment'

import {AngularFireModule} from '@angular/fire/compat'

import {AngularFireAuthModule} from '@angular/fire/compat/auth'

// Its initialization as like mentioned below.

imports:[
AngularFireModule.initializeApp(enviornment.firebase)
],AngularFireAuthModule
```

Hence we added firebase to our angular project and we can give ng serve to our project and please check the any compilation errors or config errors in th console.



<!-- ### How to get the data from the firebase.

- First we need to import `import {AngularFireDatabase} from 'angularfire2/database'`

- Then we need to initialize it in the constructor.

- We have method **db.list** `db.list('/node').subscribe((res)=>{console.log(res)})`

- then we need to set the permissions in the rules in the firebase.

- Hence we had the data readed.

### Realtime Database

The data in the firebase is realtime updates in the application without even reloading which is called as realtime database. -->

### How to create entry in firebase.









