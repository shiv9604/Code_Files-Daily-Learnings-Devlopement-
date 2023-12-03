# CBT

CBT is learning platform of dilip oak's acadmy where we can perform video learning, tests, and assesments.

### DashBoard

In Dashboard the users information is given and on calender on which user can select its GRE date.


### Video Lessons

In Video lessons there are 4 tabs in which there are different section for variours Subjects as mentioned below.

- **Essentials :-**

    In the essentials There is collapseable for **General Instructions** in which there are videos in their sections regarding introduction, Video Module Guideline and GRE intro Video.

    When students clicks on the section it will redirect to video and below the video there is paragraph in which running CC will highlight and there is notes section in side for taking personal notes.

- **AWM :-**

    In this tab there is collapsable for the different topics in which user can see the video and live cc heighlight in the paragraph and notes in the side.


- **Verbal Reasoning :-**

    In this tab there is collapsable for the different topics in which user can see the video and live cc heighlight in the paragraph and notes in the side.    

- **Quantitative Reasoning :-**

    In this tab there is collapsable for the different topics in which user can see the video and live cc heighlight in the paragraph and notes in the side.

- **Quick Refrence :-**

    In this tab user can get the exact resource for the given filters in which he can choose the student can select Section, Category, Topic, Subtopic.


### Focused Practice

In this student can practice on the questions regarding **Quantitive, Verbal** as per prefrence.

**Practice Sections :-**

- **Quantitive, Verbal :-**

    When user clicks on this buttons user wil get topics, and sub-topics and and user can select the test which he wants to give.

**Bookmarked Questions, My Notes :-**

    We have 2 Cards below as mentioned follwing :-

- **Bookmarked Questions :-**

    On this card student can see the bookmarked questions of both `Verbal Reasoning`, `Quantitive Questions` sections.

    And When student clicks on view buttons which opens a table of your bookmarked questions and on which when student clicks on it it will be redirected to that perticular questions.

- **My Notes :-**

    On this card student can see the counts for notes of `Verbal Reasoning`, `Quantitive Questions` and when clicked on view a table appers on which student can see the questions on which he tooks the notes.

    When clicking on row it will be redirected to the questions and that notes regarding it.

**Set Attempted :-**

In this section user can see a table on card which shows Attempted practice sessions list.

When clicked on that list It will redirect to review-score in which student can see the details of that perticular practice and a table which represents the data of questions.


### Mixed Practice

In this student can practice mixed questions of `Verbal` & `Quantitive`.

- **Start Test :-**

    In this section student can start his `Timed` and `Untimed` test.

- **Reports :-**

    In this section user can see specific reports of timed t


### Sop(Statement of Purpose)

### USA/CA

Path : `cbt_frontend\src\app\cbt-modules\sop\sop-usa`

Tab USA/CA Is a module in which user can be prepare for the GRE masters for USA/CA.


- **Structure :-**

    - **Mat Tabs :-**

        - `Getting Started :-` 

            In this tab Some videos are provided to getting started the user and user can get idea of it.


        - `Profile :-`

            In this tab Users can create his profile and fill out the information about him regarding its test as well as his background.

        
        - `Recommenders :-`

            In this tab we can add the recommendation letters from the teachers or mentors or employer and the supervisor/Manager.

        - `SOP :-`

            In this tab we can save our drafts related to SOP'S .

        - `Appointment :-`

            In this appointment tab we can set out the online appointments as well as offline appointments for the guidance.



<!-- - **Getting Started :-**

    1. In the Getting started in the header tab we have only 1 button `Update Profile` which redirects to `profile` with `this.sopTabsIndex = 1;`.

    2. In the videos card we have used the mat card and in which we ran `*ngFor` on `tableDataInfo`.

    3. In the Mat-Card on the thumbnail div we have binded an method which is `openPopup(item)` in which it opens an dialog from `dialogservice` in services folder named as `show_intro_video_dialog` , in the method we are opening dialog with the component `IntroVideoDialogComponent`.

    4. In `IntroVideoDialogComponent` we are having only title, video player and the description which is passed through `show_intro_video_dialog` method in the `dialog-service`.

    5. In `IntroVideoDialogComponent` video is coming from injected `data.video` which we are playing with the help of `video.js` and `player:videojs.Player` like `this.player.src(this.data.video);`.

    6. **API CALL :-** 
    
        We are calling api `getIntroVideList()` method through `sectionservice` and after getting sucess of this api call we are assigning the `res.result.list` to `tableDataInfo`.

    7. **API CALL IN DETAIL :-** 
        
        the api we are calling throught api service first we need to take url from model `URLs` model in which `url's` are coming from `enviornment.ts` file in which all url's are already defined and in models url we assigned that urls to variables and we are using that variables in `api call service` which we are using most of the api calls.
        
        Before calling api in api service we are preparing `params` and `headers` like 
        `const param = this.apiCall.prepareRequestParams(payload.params);` 
        and  
        `const headers = this.apiCall.prepareRequestHeaders(payload.headers);` 

        and we need to pass the headers and params in the api `makeGetRequest()` as like mentioned below.
        ```
          getIntroVideList(payload: Payload, callback) {
            const url = (`${Urls.MS_BASE_URL_TEST_PREP}/${Urls.INTRO_VIDEO_LIST}`);

            const param = this.apiCall.prepareRequestParams(payload.params);

            const headers = this.apiCall.prepareRequestHeaders(payload.headers);

            this.apiCall.makeGetRequest(url, param, headers).subscribe((response) => {
            callback('success', response);
            }, (error) => {
            callback('error', error);
            });
        }
        
        ```

- **Profile :-**

    In the profile tab we used the ng circle progress component in which we provided the values as we need and as per our requirements.

    In the sidemenu of profile the values we are getting in it from the `profileInfoHeader` array of object




- **Recommenders :-**

    1. In the Recommenders tab we can add the recommenders who can recommned the student for the foreign universities specially for USA/CA in the USA/CA tab.

    2. We have one `<mat-card></mat-card>` in which Recommenders headers div with `class="tab-header-text"` and subheading div with `class="recommender-sub-title"` and `class="recommenders-text"` for further text in the card.

    3. We have nested mat-card in the main card for table-header for the recommenders which appers on the followed condition `*ngIf="recommenderListDeatils.length > 0 "` and the headings and all are given static inside the table header.

    4. We have table-content in div in which we are running the for loop on recommenderListDetails(Array) like `*ngFor="let data of recommenderListDeatils;` and we have binded the data to table-body.

    5. In the last column of table-body we have actions column in which 2 buttons are there `view` and `remove` buttons in which `view` sets data in the localStorage and navigates to `app/sop/recommender` where you can view the single entry of recommendation in detail and on `remove` button it opens dialog in which it asks to user weather he wants to delete the recommender or not.

    6. We have dynamic basic component which are defined in the `app/iro-libs/` from which we can use the most of the already designed common components.

    7. We have `iro-button` below named as `+ Add Recommenders` which callas a function `addRecommender()` in which it creates an object with empty values and raise flag `this.addRecommenderFlag = true;` on which below two cards populates in which there will be a form `Add Recommender` and `Add the Letter provided by Recommender :` and with the help of it we can create Recommender and its recommendation letter.


    8. We have Add recommender form and a card for adding the letter on it with a mini `tiny-editor` which is toolbar which can edit the typography, align-ment,and soo much small things regarding to the letter.

    9. At the End of the recommendation letter we have 2 CTA buttons named as `Cancel` and `Save` whereas `Cancel` opens a confirmation dilolog weather to cancel recommendor or to save the recommender.

    10. `Save` button calls a function `addRecommenderToList()` in which it opens a dialog to confirm the add the recommender and when you click `Yes` there api call is getting called where we are preparing the payload and giving the `PUT` call directly in which we are calling `getStudentInfo()` and `getPercentage()` as well soo our profile complete percentage and profile details getting updated.

    11. At the end of the tab we have 1 floating div in which we have one `iro-button` with the title  `Go to SoP Questions` which navigated to the `SOP` in mat-tabs with ` this.sopTabsIndex = 3;`.

- **SOP :-**

    In the sop tab we have drafts for the recommendation letters provided by the faculty soo form it use student can use one of them.

    1. In the SOP Draft we have created common common component named as `<app-vertical-timeline></app-vertical-timeline>` in which our most of the sop drafts are visible in the vertical grid and roadmap as well.

    2. In the app-timeline we have `getDraft()` in which we are preparing the payload with the values grabbing form the localStorage and the userType and after preparing payload we are calling `getDraft()` api from sopService like ` this.sopService.getDraft(payload, (status, response)=>{}) ` after getting its `response.result` we are pushing the single single draft in the `draftsArray[]` with the help of `for Loop`.

    3. In the `<app-vertical-timeline></app-vertical-timeline>` we have left roadmap section in the mat-card we have divided div's for different sections.

    4. On the parent div we have run an for loop on draftDataArray like `*ngFor="let draft of draftDataArray, let i = index"` and we are taking the value from its single itration object.

    5. For date and time we have a div named as `class="date-time"` in which we are able to show the updated date time in the roadmap with the help of function `getDateTime()`.

    6. We have bg-image container in which we are selecting the background container of roadmap by checking the userType.

    7. We have the role and id which we are taking form the draft which is the object of single itration of `draftDataArray[]`.

    8. In the timeline content container named as `class="timeline-content"` we have header in which we are showing draft name and number and the edit icon on its click `makeeditable()` function we are calling in which we are making draft editable and after making the draft editable we are inserting the `<app-tiny-edior></app-tiny-edior>` in the card and at the bottom of the content we have 3 CTA Buttons `Cancel` & `Save New Draft` & `Save Current Draft` on.

    9. In the buttons `cancel` buttons make the `editable=false` which removes the mini-editor and makes it defualt like before.

    10. Onclick of `Save New Draft` we are calling api from `sopService` with `putSopUseQuestionDraft()` function like `this.sopService.putSopUseQuestionDraft(payload, (status, response)=>{})` so we are making a new entry of this draft and after that we are making the draft non editable and and we are calling the `getDraft()` as well soo new draft will be also visible.

    11. Onclick of `Save Current Draft` we are calling api's on checking the userType and draft created by,  `saveDraft()` in which we are calling api from `sopService` with `putSopUseQuestionDraft()` like `this.sopService.putSopUseQuestionDraft(payload, (status, response) => {})` and in `updateDraft()` which getting called on the basis of userType and draftCreatedby in which we are calling api from sop service `sopService` with `sopUSAUpdateCurrentDraft()` like `this.sopService.sopUSAUpdateCurrentDraft(payload, (status, response) => {})`.

    12. In the card content we are binding the draft in the div with directive `[innerHtml]` like `<div [innerHtml]="getSanitizerText(draft.sopDraft)"></div>`. -->

- **Getting Started :-**
    
    In the Getting Started tab there are detailed videos available for the process which is uploaded form the admin panel and all are the dynamic videos we are getting from the api and we are playing the videos with the help of video.js

    And in the header there is button to update profile which navigates the student to the profile.

- **Profile :-** 

    In the profile student need to fill the its informatoion in the forms as per the devided sections as following.

    1. **Education (63%) :-**

        - **Education Information :-**

            In this section student needs to fill his educational information Regarding gree as per the input feilds.

            In this section there are 2 checkbox which tells you appeared the GMAT, IELTS after checking it 2 more sections get added in your educational information.

        - **GRE,GMAT,TOEFL,IELTS :-**

            In this sections student needs to fill that exam realated details as per the input feilds and there are checkboxed where student have option to skip that parts named as `Yet to Appear`.

        - **Diploma :-**

            In this section students need to fill the diploma educational details as per the input feilds and student have ranking options checkboxed by clicking it one more input feild apperas which is rank in front of it.

            At the end of the section there is table in which student can fill the information on yearly basis which adds the row in the table.

        - **Masters :-**

              In this section students need to fill the masters educational details as per the input feilds and student have ranking options checkboxed by clicking it one more input feild apperas which is rank in front of it.

             At the end of the section there is table in which student can fill the information on yearly basis which adds the row in the table.

        - **Add Qualification :-**

            Which opens the same form format and student can add the inforamtion over there.

    2. **Work Experience(20%) :-**

        In this section user can fill his work experience details and this section evaulates 20% of completion.
    3. **Project Seminar(16%) :-**

        In this section user needs to fill the details about its project as per the input feilds and it evaluates 16% of the profile completion.

    4. **Co-Cirricular(0%) :-**

        In this section user needs to fill the details about hte co-cirricular activities and it evalutates 0% of profile completion.

    5. **Additional Files(0%) :-**

        In this section student can upload the extra documents and the certificates and this section is optional.

    6. **SOP Manual :-**

        In this section information about the various section covered in the sop are  given and user needs to check after reading the manual.

    7. **Sample SOP :-**

        In this section sample sop's are provided for the refrence.

- **Recommenders :-**

    In this tab some information provided to the user about the recommendations and user needs to provide 3 recommendations.

    Add recommendation opens a form and textarea for the letter and the details and it will appear in the table below.

    In the table in actions column user can view the letter in the detail and can remove the recommender.


- **SOP :-**

    In the sop tab first the question will be asked regarding their universities decision, their preparation, and their conclusion to students to write the state of purpose on it.

    And user can submit his anwers and in the draft card that all answer will he shown in which user can edit them as well.

    In the edit option user have Cancel, Save New Draft, And save current draft which performs the action as by their meaning.

    After completing the sop 1 faculty will be assigned to the student in 1 working day and user can book appointment.

- **Appointment :-**

    In the appointment tab we can book an appointment online or the offline as per the users prefrence.

    1. If your profile will be incomplete We have profile not completed interface in which we have 3 test case parameters like at least 3 recommendation letters & profile completion percentage should be at least 95% and answers to the 3 SOP questions.

    2. If students profile will be incomplete below three containers will be visible in which in profile completion it will show the profile complete percentage and cta button to the profile with `.tabIndex=0` and in sop questions it will show the staus of answered questions and in the recommenders information it will show the status of compltion of how much letters and it have checkbox as well to remove the condition.

    3. When all tests would be fulfilled you can click on continue button and it opens a new card it will show the available scheduled appointments which is new component named as `<app-sop-create-appointment></app-sop-create-appointment>`.

    4. After completion of the 95% profile and 3 SOP questions and 3 recommenders the faculty will be assigned to the student and student can book and appointment.

    5. Important Rules for the sop :-

        - 95% profile completion and After one working day the faculty will be assigned to the student.

        - Student can book an appoinment before upto 24hrs prior and one appointment will be 1 hour 20 mins.

        - Student can book only max 5 appointments. 

        - In the Schedule appointment Calender opens and show the dates with some colored marks on the calender of its meaning as follwed.

            1. Green - Available For booking

            2. Yellow - Appintments Booked for that day.

            3. Red - Appointment unavailable for that day.

        - In the rescheduling of the appointment we can only reschedule 1 appointment and that too that appointment shoud not be in next 24hrs and and appointment should not be past ones.

    6. In the side card when you select the date it will show the timesolts at rigt side and where the book button will be there and where we can book an appointment.

    7. In the appointments tab we can see our booked appointments below on the cards with date,admission center no, appointment number and appointment type.

    8. There is button to view SOP  which navigates user to the sop tab.


