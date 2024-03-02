# ng-select
ng-select is the lightweight ui component for the dropdowns all types at one place suggestions, dropdowns,mutiple selections all dropdown usecases at one places.

### Installation

We can install `ng-select` with `npm  i --save @ng-select/ng-select` and for specific version `npm  i --save @ng-select/ng-select@4.x.x`.

### How to use

**Steps for Integration :-**

- After installation of `ng-select` we just need to import its stylesheet in `style.scss` as like mentioned below.

    ```
    // style.scss
    @import "~@ng-select/ng-select/themes/default.theme.css";

    OR

    @import "~@ng-select/ng-select/themes/material.theme.css";

    ```

- Import `NgSelectModule` in app module to recognize `<ng-select></ng-select>` component .

- Use `<ng-select></ng-select>` tag and it takes array of objects for the options for binding options to use `[items]` directive and we can bind the display values with `bindLabel="keyOfObject"` and the values of options with `bindValue="keyOfValueProperty"` as like mentioned below.

    ```
    // Template
    <ng-select [items]="options" bindLabel="key" bindValue="key">
    </ng-select>

    // Class

    options = [
        {
            id:1,
            name:'Rohit'
        },
        {
            id:2,
            name:'Akash'
        },
        {
            id:3,
            name:'Sunit'
        }
    ]
    constructor(){}
    ```

- To get the value of selected item we need to bind `(change)="method($event)"` event which will returns the selected item as like mentioned below.

    ```
    // Template
    <ng-select [items]="options" bindLabel="key" bindValue="key" (change)="getValue($event)">

    </ng-select>

    // Class

    options = [
        {
            id:1,
            name:'Rohit'
        },
        {
            id:2,
            name:'Akash'
        },
        {
            id:3,
            name:'Sunit'
        }
    ]
    constructor(){}

    getValue(selectedItem){
        console.log(selectedItem)
    }
    ```
 

### Directives

`ng-select` select provides serval directives to alter the behaviour of ng-select as like mentioned below.

- **items :-**

- **bindLabel :-**

- **bindValue :-**

- **clearable :-**

    We can remove the clearable button from `ng-select` as like mentioned below.

    ```
    <ng-select [clearable]="false"></ng-select>
    ```
- **multiple :-**

    We can selecte the multilpe options with the help of `multilpe` directive which is false by default as like mentioned below.

    `(chage)="method($event)"` returns the array of selected values on each selection when the multiple selection is set to be `true`.

    ```
        <ng-select [multiple]="true"></ng-select>
    ```

- **closeOnSelect :-**

    When we are using multiple selection dropdown closes by default which can be tidious job to open it again and agian for every value selection which can be prevented by setting `closeOnSelect` `false` as like mentioned below.

    ```
        <ng-select [closeOnSelect]="false" [multiple]="true"></ng-select>
    ```

- **readonly :-**

    Whenever we want to disable the `ng-select` dropdown on our requirement we can disable it with by setting `readonly` `true` which will disable the dropdown.

    ```
            <ng-select [readonly]="false"></ng-select>
    ```


### Events

- **(change) :-**
