# CBT

### ERRORS

- styles string to be an array - degrade raw-loader to 1.0.0

- Video.js Error - Remove Error Causing function

### Folder Structure

- **CBT-MODULES :-**

    All Application modules and Functionalities like video-lessons, sop and all basically tabs which are in web app.

- **COMMON :-**

    All the common components which we used in the app.

- **DIALOGS :-**

    All Dialogs boxes of the app.

- **IRO-LIBS :-**

    Designed utilities like button input and all as common component.

- **Models :-**

    All the interfaces used in the app are here.

- **Modules :-**

    All the `module.ts` files kept here.

- **Services :-**

    All the services used in the app.

- **Models/urls.model.ts :-**

    All the Api Call url Constants are here. And all the urls are kept in enviornment.ts

- **Models/popup-massages.model.ts :-**

    All the pop Massages used in the app are declared here.

- **Models/payload.model.ts :-**

    Payload Class declare in which data, params, and auth are there and which we are using in every api call.

- **Models/Constants.model.ts :-**  

    All the tabs icons, names and tabs appearing from here.








### Video Lessons ['app/cbt-modules/video-lessons']

Video lessons module starts from video-dashboard component.

- **video-dashboard :-** 
    
    `path : 'video-lessons/video-dashboard'`

    **sectionlist :-**

    1. In this variable we are having the list of the mat tabs adn their names.
    
    2. There is Dynamic mat-tab component getting tabs dynamically calling api `category-list` from `sectionBS` service with `getAllSectionData()` in which we are getting the tabs names.

    2. api response we binding to sectionList from which we are looping through in mat-tab.


    **videoData :-**

    1. In this variable we are having the details of perticular tab like details of `Essentials` tab in which we are having its data and the subtopics list as well.

    2. We are calling `category-date` api from `sectionBS` service with `getAllVideoData()` in which we are gettign details abut topics and subtopics list.

- **<app-video-lesson-preview :-**

    **Data Array :-** 

    This data array we are taking as as input in which we have the topic and topicList which we are populatin under the topic.    
    
    **dataArray.topicList :-** 

    Throught subtopics data we take from this array.

    when we click on topic list it will prepare an object and redirect to `/lessons` which which is `video-preview` component.


- **Video Preview :-**

    `path : 'cbt-modules/sections/lessons/video preview'`

    In this component we take data object from query params in ngOnInit.

    **previewData :-**

    we are calling api in `sectionBS` service with `getTranscriptData()` in which we are getting `transcript link` and `video url` which we are storing in `previewData` variable and sending it to `<app-video player [videoData]="previewData"`.

- **<app-video-player :-**

    In this component we have video player with `<video></video>` and we have transcript here itself.

    






