# Angular Flex Layout

Angular Flex layout is the flex layout library which is helpfull for the resopnsive layouts as like the bootstrap.

### Installation

- `npm i -s @angular/flex-layout` install the angular flex with this command.

- `import {FlexLayoutModule} from '@angular/flex-layout'` and declare in `imports []`.

### Features divided in 2 main categories

- **Flex parent Directives :-** 

    We have fxLayout directives for the parent container like `fxLayout,fxLayoutGap,fxLayoutAlign`

- **Flex Child Directives :-**

    We have fxLayout directives for the child containers like `fxFlex,flFlexOrder,fxFlexOffset,fxFlexAlign,fxFlexFill`

---
<br>

## Parent Container Directives

### fxLayout

`fxLayout` defines the container as flex-box and control its flex-direction.

**directives :-**

`fxLayout` - It will convert the container in flex container.

`fxLayout="row"` - It will apply the flex and the flex-direction will be row.

`fxLayout="column"` - It will apply the flex and flex-direction will be column.

`fxLayout="row-reverse"` - It will apply the flex and flex-direction will be row-reverse and childern items will be aligned in the reverse ordre in row.

`fxLayout="column-reverse"` - It will apply the flex and flex-direction will be column-reverse and childern items will be aligned in the reverse order in column.


### fxLayoutGap

fxLayoutGap defined the gap between the child elements.

**directives :-**

`fxLayoutGap : -` it will creaate gap between all the elements as like space between but acquiring the value only we given.

`fxLayoutGap="1%" :-` it will give gap of 1% of the browser window in between the flex elements.

**Most Imp :- we can use all the css unit in the fxLayoutGap values like px, %, vh, vw, em, rem etc.**

### fxLayoutAlign

fxLayoutAlign defines the alignment of the child elements.

`fxLayoutAlign = <main-axis> <cross-axis    >`

**Both Axis Values :-**

- `start :-` It will place the elements at the start of the specified axis.

- `center :-` It will place the elements at the center of the specified  axis.

- `end :-` It will place the elements at the end of the specified axis.

- `space-between :-` It will keep space between the child elements not on the left side.

- `space-around :-` It will keep the space around the child elements on both side.

- `space-evently :-` It will keep the space evenly in between the edges and in between the elements.

**Most Imp :- If our `flexLayout='column'` then the main axis will be vertical and `flexLayout='row'` then the main axis will be horizontal. soo your values will be applicable as per the main axis first and then cross axis.**

### fxShow & fxHide

fxShow and fxHide are used to hide and show the elements on the breakpoints.

**BreakPoints :-**

- `xs :-` max-width = 599px

- `sm :-` min-width = 600px and max-width = 959px

- `md :-` min-width = 960px and max-width = 1279px

- `lg :-` min-width = 1280px and max-width = 1919px

- `xl :-` min-width = 1920px to max-width = 5000px


**Directive :-**

- `fxHide.sm = "true"` - It will hide the main container along with flex-items on the small screens.



---
<br>

## Child Container Directives

### fxFlex

fxFlex directives streaches the element at the fullest on its main axis by default and the rest elements will be atjusted in the rest space.

**Directives :-**

`fxFlex="100vw"` - By providing value to it it will streches the child element on the based of our value.


**Most Imp :- we can use all the css unit in the fxFlex values like px, %, vh, vw, em, rem etc.**

### fxFlexOrder

fxFlexOrder defines the order of the flex-item and as per the provided value.

**Directives :-**

`fxFlexOrder="1"` - It will keep the element in the order first and or as per provided values in numerical.

### fxFlexOffset

fxFlexOffset acts as the margin on the item as per provided value on its main axis.

**Directives :-** 

`fxFlexOffset="10vw"` - It will keep 10vw offset to the flex-item on its main axis.

**Most Imp :- we can use all the css unit in the fxFlex values like px, %, vh, vw, em, rem etc.**

### fxFlexAlign

fxFlexAlign defines alignment of flex-item on which property is used in cross-axis only `fxFlexAlign="<cross-axis>"`.

We cant apply both axis properties as like fxLayoutAlign="<main-axis><cross-axis>" and if we give the value bymistake it will not disturb the flex-alignment.

`fxFlexAlign="center"` - If the `fxLayout="column"` soo it will applicable on cross axis which is horizontal axis and center the element horizontally as its cross-axis is horizontal.

Basically it will apply the value only on its cross axis.


**Directive :-**

`flFlexAlign="center" :-` It will center the flex-item on its cross axis.


**Allowed Value are :-** 

- `start :-` - it will place element at start on its cross axis.

- `center :-` it will place element at the center on its cross axis.

- `end :-` it will place element at the end on its cross axis.









