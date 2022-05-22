# Angular Material

Angualar material is ui component libraby for angular like material ui for react.

### How to add angular material to angular project

- `ng add @angular/material` - It will setup and adds the angular material to your project.

Then we need to add the modules based on the components we want to use in our project in **app.module.ts** file and we need to decalre it in `imoprts:[]`.

### How to create seprate module for material

When we create seprate module for material we just need to import the material module in your whichever component and **page.module.ts** and we can use the all mat components which are included in the material module.

- first we need to create module with `ng g m material`

- In the material module we need to create and array like `const MaterialComponent = [MatButtonModule]` and we are going to add all the common required components in that module already.

- Then we need to create `imports:[]` and `exports : []` array and we need to add the `MaterialComponent` in imports and exports as well.

- Finally Wherever we want to use the material components we need to just **import material module** in its **module.ts** file and we are ready to use the components in that component and page.

### Typography

We have multiple class for multiple typography styles as per our requirements as like mentioned below with their uses.

- **Huge Display and Hero titles :-**
    
    - `mat-display-4` - Biggest display text.

    - `mat-display-3` - Sligt smaller display text than **mat-display-4**. 

    - `mat-display-2` - Sligt smaller display text than **mat-display-3**. 

    - `mat-display-1` - Smallest display text. 

- **Headings :-**

    - `mat-headline` - This is the class for H1.

    - `mat-title` - This is the class for H2.

    - `mat-subheading-2` - This is the class for H3.

    - `mat-subheading-1` - This is the class for H4.

- **Body Content :-**

    -`mat-body` - Body text.

    - `mat-body-2` - Bold text.

    - `mat-caption` - Caption text.

- `mat-typography` - It will apply the mat typography styles to the html heading tags.

### Buttons

Material buttons are the buttons with the floating animation on the click which is used in google websites.

`import {MatButtonModule} from @angular/material`

For using mat buttons we dont have specific html tags for buttons instead we have attributes for different types of buttons as mentioned followed : 

- **Type of Buttons :-**

    - `mat-button` - Plain Material Button.

    - `mat-raised-button` - Raised button with shadow.

    - `mat-stroked-button` - Plain button with border.

    - `mat-raised-button` - Raised button with shadow.

- **Round and icon buttons :-**

    - `mat-icon-button` - transperent icon button.

    - `mat-fab`- Medium round filled button with shadow.

    - `mat-mini-fab ` - Mini round filled button with shadow.

- **Button text colors :-**

    - `color="primary"` - blue text.

    - `color="accent"` - pinkish color.

    - `color="warn"` - Orange color.


`disableRipple` - Disables ripple effect on the button.

### Toggle Button



### Snackbar

Snackbar is the small popup which comes from the bottom with the important massage which will be visible for short term.

**How to call snackbar on the button click:-**

1. We need to import 2 things in out project as mentioned below :

   - **Module.ts:-** `import { MatSnackBarModule } from '@angular/material/snack-bar';`

   - **page.ts:-** `import {MatSnackBar} from '@angular/material'`

2. Then we need to initialize imported snackbar in components.ts file in constructor.

3. We need to create method for opening snackbar and what massage to show in the snackbar as like mentioned below :

   ```

   import {MatSnackBar} from '@angular/material/snack-bar';

   constructor(
       public snackbar:MatSnackBar;
   ){}

   // We need to call this function on the click event on the button.
    openSnackbar(massage,button){
   this.snackbar.open(massage,button,{duration:2000});
   }
   ```

### Mat-Cards

Mat Cards are the component in which it have already styling for header content actions and all soo we just need to use them.

**How to use mat-cards :-**

- First we need to import `import {MatCardModule} from '@angular/material';`

- Then we can create with `<mat-card>Basic Card</mat-card>`. Angular material provides predefined sections of cards with HTML tag as like mentioned below :

**Structure :-**

  - `<mat-card-title-group>` - can be used to combine a title, subtitle, and image into a single section. This element can contain:
  - `<mat-card-title></mat-card-title>` - Used for the card title.
  - `<mat-card-subtitle></mat-card-subtitle>` - Card Sub-title.
  - `<mat-card-content></mat-card-content>` - Section for card content.
  - `<img mat-card-image>` - Card image. Stretches the image to the container width
  - `<mat-card-actions align="right"></mat-card-actions>` - We can place the actions buttons inside it. With align we can align the action buttons with the align attributes.
  - `<mat-card-footer>` - Section anchored to the bottom of the card

### Mat Select

Material select is the part of form feild and its a dropdown in which values can be selected as normal html `<select><option></option></select>`.

- First we need to import `MatSelectModule` in module.ts.

**Structure :-**

- `<mat-form-feild>` - Its a materials form feild.
- `<mat-lable>` - This value will be showin by the default on the selection.
- `<mat-select>` - This will create selection and inside this tag all the options will be placed.
- `<mat-option value=""></mat-option>` - This is the option and the value we placed to it will be send to server.
- `<mat-opt-group>` - We can group out options with non-selected label inside the option.
- `<mat-select [(value)]="variable">` - The selected value will be stored in this variable on selection.
- `<mat-select multiple>` - Multiple attribute will bring the checkboxes to the options and now multiple options can be selected in the dropdow.

Ex :

**Nomrmal Mat Select :-**

```
<mat-form-feild>
    <label>DefaultValue</label>
        <mat-select [(value)]="variableName">
            <option value="1">one</option>
            <option value="2">two</option>
            <option value="3">three</option>
        </mat-select>
</mat-form-feild>
```

**Advanced Mat Select with option group and multiple selection :-**

```
<mat-form-feild>
    <label>DefaultValue</label>
        <mat-select [(value)]="variableName" multiple>
            <mat-opt-group label="Web">
                <option value="1">React</option>
                <option value="2">vue</option>
                <option value="3">angular</option>
            </mat-opt-group>
            <mat-opt-group label="Phone">
                <option value="1">Ionic</option>
                <option value="2">React Native</option>
            </mat-opt-group>
        </mat-select>
</mat-form-feild>
```

### Navbar

Navbar is the header which help us to navigate us to different pages and some actions.

We need to import toolbar module as like mentioned below.
`import {MatToolbarModule} from '@angular/material'`

- `<mat-toolbar></mat-toolbar>` - Toolbar parent tag with ideal padding.

ex:
```
<mat-toolbar class="nav" color="warn">
    
    <div class="mat-headline">
        Pug-Admin
    </div>
    <div class="buttons">
        <button mat-icon-button >
            <mat-icon class="material-icons-round"> search</mat-icon>
        </button>
        <button mat-icon-button class="notifications">
            <mat-icon class="material-icons-round"> notifications</mat-icon>
        </button>
        <button mat-icon-button>
            <mat-icon class="material-icons-round">
                email
                </mat-icon>
        </button>
        <button mat-icon-button>
            <mat-icon class="material-icons-round">
                account_circle
                </mat-icon>
        </button>
    </div>
</mat-toolbar>

```    

### SideMenu

We need to import sidenav module to module.ts as like mentioned below.
`import {MatTSidenavModule} from '@angular/material'`

**Structure :-**
- `<mat-sidenav-container></mat-sidenav-container>` - Main sidenav container.
- `<mat-sidenav></mat-sidenav>` - The main sidenav.
- `<mat-sidenav-content></mat-sidenav-content>` - Content of the sidenav

**Attributes :-**

- `<mat-sidenav opened></mat-sidenav>` - The sidenav by default will be opened and it will be closed when click its outside.

**Opening Modes :-**
- `mode='over'` - It will overlap on the content.
- `mode='push'` - It will push the content to the side.
- `mode='side' ` - It will keep nav and body side by side.

**Opening and closing :-**

We can apply template refrence variable to the sidenav we can call the methods like mentioned below.
- `sidenav.open()` - It will open the sidenav.
- `sidenav.open()` - It will close the sidenav.
- `sidenav.toggle()` - It will work as toggle button for side nav for opening and closing of sidenav.

**Events :-**
- `(opened)="method()"` - This event will be fired when the sidemenu gets opened.
- `(closed)="method()"` - This event will be fired when the sidenav will be closed.

Ex : 
```

<app-navbar (toggleSidenav)="toggleSidenav()"></app-navbar>

<!-- Sidenav Starts Here -->
<mat-sidenav-container>
  <mat-sidenav #sidenav mode="side" opened="'">
    
    Sidenav Content

  </mat-sidenav>
  <mat-sidenav-content>

    <!-- Website Content will go here below -->
    <router-outlet></router-outlet>

  </mat-sidenav-content>
</mat-sidenav-container>

```

### Table
Table is used for show the data in the tabular format.

We need to import table module as like mentioned below : 
`import {MatTableModule} from '@angular/material`

**Structure :-**

- `<mat-table></mat-table>` - Parent tag of table.

- `<ng-container></ng-container>` - Its group of table header and table cell.

- `<mat-header-cell></mat-header-cell>` - Header of column.

- `<mat-cell></mat-cell>` - Data Cell of column.


**Attributes :-**
- `<mat-table [dataSource]="var"></mat-table>` - Takes the data source.

- `<ng-container matColumnDef="feild"></ng-container>` - We defines the group is for which feild.


- `<mat-header-cell *matHeaderCellDef>name</mat-header-cell>` - It will create a header and we can pass the dynamic data as well by creating the instance like `let item` and `item.property`

- `<mat-cell *matCellDef="let item">{{item.name}}</mat-cell>`

- It will loopthrough the array and prints the property.


**Most Imp :-** `matColumnDef` values should be same with the value mentioned in the  `displayedColumns: string[] = ['srno','userName'];` and we can assign the key itself over 3 places in `matColumnDef` and in displayedColumns as well and in the `element.userName` as well.

Ex : 
```
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
  
  <ng-container matColumnDef="srno">
    <th mat-header-cell *matHeaderCellDef> Sr No</th>
    <td mat-cell *matCellDef="let element; index as i"> {{i+1}} </td>
  </ng-container>

    
  <ng-container matColumnDef="userName">
    <th mat-header-cell *matHeaderCellDef> Name</th>
    <td mat-cell *matCellDef="let element; index as i"> {{element.userName}} </td>
  </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

// Ts Code

  displayedColumns: string[] = ['srno','userName'];
  
  dataSource!:MatTableDataSource<any>;

  // Assign the data
  this.dataSource =   new MatTableDataSource(this.users);

```


**Work in Component.ts file :-**

The most important things in mat table is only 

- First we need to create `dataSource` variable of type `MatTableDataSource<any>` as like `dataSource!:MatTableDataSource<any>;` and we need to negate it as well to prevent error.

- `displayedColumns = ['name','email']`  - which should be same as `<ng-container>*matColumnDef="name"</ng-container>`  *matColumnDef values.

- Then we need to assign the api response data to with the help of `new MatDataSource(response)` like `this.dataSource = new MatDataSource(response);` we need to assigned the recieved response data to it.


### Table Pagination

Mat paginator is the component designed for the pagination in the data table.

**Structure :-**
- `<mat-paginator></mat-paginator>` - It will create paginator where we will place the paginator.

**Attributes :-**

- `<mat-paginator showFirstLastButtons></mat-paginator>` - It will show the first and last buttons.

- `<mat-paginator [pageSize]="2"></mat-paginator>` - Soo the page size will be the as per mentioned value.

- `<mat-paginator [pageSizeOptions]="[5,10,20]"></mat-paginator>` - Paginator shows page size options dropdown and this values will got over there.

**Work in Ts File :-**

- First we need to take the template refrence in the ts file with the help of `@ViewChild('refrence') name! : MatPaginator` and the type will be MatPaginator and we need to negotiate it on its initialization to prevent error which comes bcoz of new typescript version.

- Then we need to assign that `paginator` to `dataSource.paginator` as like `this.dataSource.paginator = this.paginator`.

Ex : 
```
// HTML Code
<mat-paginator #paginator 
              [pageSize]="2"
              [pageSizeOptions]="[1,3,4,5, 10, 25, 100]"
              >
</mat-paginator>

// Ts Code
  @ViewChild('paginator') paginator!: MatPaginator;

    // Assining response to dataSource.
    this.dataSource =   new MatTableDataSource(this.users);

    this.dataSource.paginator = this.paginator;
```

### Search on filter

Angular material provides the functionality for the search as welll on the table data.

- First we need to create a input box. `<mat-input> <input type="text" matInput></mat-input>`.

- Then we need to assign the `keyup` event on it which will emit an event when the key pressed.

- We need to create function which will be called on the key press and which will take `$event` as parameter.

- And the lastly we need to do `this.dataSource.filter = $event.target.value`

Ex : 
```
// HTML Code
<div class="header">
  <mat-form-field appearance="outline">
    <mat-label>Search</mat-label>
    <input type="text" matInput placeholder="Search By Keyword" (keyup)="filterData($event)" autocomplete="off">
    <button matSuffix  mat-icon-button>
    <mat-icon>search</mat-icon>
  </button>
  </mat-form-field>
</div>

// Ts Code
filterData($event:any){
    this.dataSource.filter = $event.target.value;
  }
```

### Material Dialouge

Material dialouge is similar to the snackbar and we can open an component inside the dialouge.

- First we need to import `MatDialougeModule` in module.ts and its related component to initialize in entry components.

- then we need to import `MatDialouge` in component.ts and as well as the compoennt `userLogin` as well to load inside the mat dialouge.

- then we need to initialize the `public dialouge:MatDialouge` in the constuctor.

- To open the dialouge we can create an function which will be called on button click and in side function `this.dialouge.open(componentName)`.

**Structure :-**

- `<p mat-dialog-title>text</p>` - This will be the dialog title.

- `<mat-dialog-content></mat-dialog-content>` - In this tags in the component we can write our html.

- `<mat-dialog-actions></mat-dialog-actions>` - 

### Menu

Mat menu is kind of dropdowns of the buttons which looks like dropdown.

- First we need to import `MatMenuModule` in module.ts

- Then we can create mat-menu in the html file.

**Structure :-**

- `<mat-menu></mat-menu>` - The parent mat menu tag which holds mat menu items as buttons.

**Attributes :-**

- `<button mat-menu-item></button>` - It will create Mat menu item.

- `<mat-menu #appMenu = "matMenu"></mat-menu>` - It will create template refrence variable and assign it to type matMenu.

- `<button [matMenuTriggerFor]="appMenu">Menu</button>` - It will create trigger for the menu on this button.

**Menu Opening Positioning :-**

- `<mat-menu xPosition="before, after" yPosition="below, above"></mat-menu>`

**Dynamic Data :-**

- `<button   [matMenuTriggerData]="{name:'Shiv'}"  [matMenuTriggerFor]="appMenu" ></button>` - It will send the data while triggerign the menu.

- `<ng-template let-name="name"></ng-template>` - You can grab the value like this with the name and you can use that variable in interpolation `{{name}}`.

