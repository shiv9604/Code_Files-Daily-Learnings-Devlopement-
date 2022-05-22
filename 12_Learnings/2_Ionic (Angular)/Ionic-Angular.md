# Ionic-Angular



### Ionic Fab Button

  Ionic fab button is a floating button which we see in the applications like animated button which contains other buttons in it.

  **Steps For creating Basic the ion fab button**  - 
  
  we need to use the `<ion-fab></ion-fab>` and `<ion-list></ion-list>` for that in between that we need to use the `<ion-fab-button></ion-fab-button>` in that.
  
  1. The button inside the `<ion-fab></ion-fab>` will be act as a primary button which will be visible.
  
  2. The buttoons inside the `<ion-list></ion-list>` will be act as a animated buttons containing in it.

  3. We can put the icons as well inside that by using `<ion-icon></ion-icon>` inside the `<ion-fab-button></ion-fab-button>` as like mentioned below.

  Code Strucuture of ion-fab-button : 
  ```
   <ion-fab vertical="top" horizontal="center" slot="fixed">
      <ion-fab-button><ion-icon name="code"></ion-icon></ion-fab-button>
      <ion-fab-list side="start">
        <ion-fab-button>
          <ion-icon name="logo-ionic"></ion-icon>
        </ion-fab-button>

        <ion-fab-button>
          <ion-icon name="logo-angular"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  ```

  **Alignment on Screen** - 

  - Vertical Alignment values
    1. `top`
    2. `center`
    3. `bottom`

  - Horizontal Alignment values
    1. `start`
    2. `center`
    3. `end`

  **Behaviour on Screen** - 

  - `slot` 
    1. Fixed - Button will be fixed even on the scroll.

**Button Animation direction**

  - Horizontal :  
    1. `start`  - Opens to the left side.
    2. `end` - Opens to the right side.
  
  - Verical : 
    1. `top` -  Opens to the top side.
    2. `bottom` - Opens to the bottom side.

### Ionic Tabs (Bottom navigation tab)
Ionic tabs are bottom navigation menu which is used in most of the applications for navigating form one page to other.

**Ionic Tabs (Group of) :-**

  - 
  - 
  -  








































  
<!-- 
### Take photos from camera and gallery in ionic Angular

1. First we need to install camera from cordova and npm as like mentioned below.
    ```
    ionic cordova plugin add cordova-plugin-camera 

    npm install @awesome-cordova-plugins/camera 
    ```
2. Then we need to import the camera in **module.ts** and **app.component.ts** files.
    ```
    import { Camera} from '@awesome-cordova-plugins/camera/ngx';
    ```
3. Then we need to initialize in constructor and use the functionalities inside it as mentioned in the below points.
    ```
    constructor(private camera:Camera){

    // Rest of your code goes here// 

    }
    ```
4. Then we need to use the functionality **camera.getpicture()** for taking picture from the gallery or either with the camera with then and catch block as like mentioned below.

```
  getCamera(){
    this.camera.getPicture().then((res)=>{
      this.imageUrl = res
    }).catch((e) =>{
      console.log(e)
    })
  }
  getGallery(){
    this.camera.getPicture().then((res)=>{
      this.imageUrl = res
    }).catch((e) =>{
      console.log(e)
    })
  }
```


5. Then we need to pass the options which are different for the gallery and the camera as like mentioned below.

**The most important options are sourceType and destinationType which will be different for camera and gallery as well.**

- **Options for Camera** - 
    ```
    {
        sourceType : camera.PictureSourceType.CAMERA,
        destinationType: camera.DestinationType.FILE_URL
    }
    ```
    **The file url means final path of image.**

- **Options for Camera** - 
    ```
    {
        sourceType : camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: camera.DestinationType.DATA_URL
    }
    ```
    **The data url means image will be converted into string.**

    But if we are using the data_url we cannot directly show it on the screen as the image soo we need to convert back it to image while using it by adding this line before the string data like mention below.
    ```
    // Image data is in the string format.
    imageurl = 'data:image/jpeg;base64,' + imageData;
    ```


**For IOS** - As ios need some more extra permissions we need to add the below code in under ios in config.xml.
```
 <config-file parent="NSCameraUsageDescription" platform="ios" target="*-Info.plist">
            <string>You can take photos</string>
 </config-file>
``` 
**Plugin's Documentation Link** - https://github.com/apache/cordova-plugin-camera




 -->
