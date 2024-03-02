# Angular JS

Angular js the framework to add custom directives to your html & make the process easier of dom manipulation.

Its has most of 3 parts, view, model & controller in which view is our template & model is our data & controller is our functional code which interacts with servers to retrieve the data.

### Instllation

We can install angular app without even downloading or something, we can just include the script of angularjs in `head tag` in html as like mentioned below.

```
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js" integrity="sha512-KZmyTq3PLx9EZl0RHShHQuXtrvdJ+m35tuOiwlcZfs/rE7NZv29ygNA8SFCkMXTnYZQK2OX0Gm2qKGfvWEtRXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
```

### Creating First Angular App

**Steps to create :-**
1. **Create Module :-**
   
    For Creating the application we need to create module with `angular.module('name',[])` which will create the module.

    Remember that if you dont provide the second parameter like `angular.module('name')` it will look for existing module with that name and will return it. But here we are creating the module so we need to pass second parameter as `[]` so it will intialize the new module.

    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js" integrity="sha512-KZmyTq3PLx9EZl0RHShHQuXtrvdJ+m35tuOiwlcZfs/rE7NZv29ygNA8SFCkMXTnYZQK2OX0Gm2qKGfvWEtRXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

        // Creating Angular Module
        <script type="text/javascript">
            angular.module('main',[])
        </script>
    </head>
    <body></body>
    </html>
    ```

2. **Bind that module to ng-app :-**
   
   Even if you create the module but untill and unless you bind the module to angular app we cant use angular features in our html.

   For binding module to app we need to bind to any html element or body of tag as like mentioned below.

   ```
    // Binding module to app
    <body ng-app="main">
    </body>
    </html>
   ```

3. **Write Your First Code :-**
   
   Now we can start consuming angular features like interpolation or angular expressions `{{javascript code}}` in which we can write simple single liner javascript code for computing the javascript in html itself.

   ```
   <body ng-app="main">
    sum of 3 + 2 = {{ 3 + 2}} // sum of 3 + 2 = 5
    </body>
   ```

### How Angularjs Get Executed

<img src="./assets/angular-execution.png">

**Steps of Angular Execution :-**
- **Angular Engine Execution & Initialization :-**
   When we integrate the CDN link into our head tag angualr engine gets executed.

- **Module Creation :-**

    When we add module into application its get created.

- **Template Identification :-**
  
    Angular HTML compiler is different from browser html compiler, it looks for angular directives which usually starts with `ng-directiveName` and looks for angular templates which contains interpolation `{{}}` data binding etc.

    HTML containing angular directives, interpolations and angular stuff are called as templates.

    Basically angular html compiler identifies angular templates first.

- **Template Processing :-**
  
  After being done identifying angular template it Compiles the template to checking if syntax is correct or does contains any errors.

  After compilation it loads the template in instance of memory of browser itself & transforms the template into simple browser understandable HTML.

- **Rendering Transformed HTML :-**
  
  The transformed HTML is rendered on the page with the help of browser's html engine itself.

### Controllers

<img src="./assets/controllers.png">

Angular controllers are nothing but the javascript objects which contains data, variables, methods etc.

With the help of controllers we can execute our complex logic or javascript in it and then we can interact with view for displaying the results in the application.

We can consume the controller with the help of `ng-controller="controllerName as variableName` attribute, the attributes starts with `ng` are called as directives in angular. variable name contains the refrence to the controller and we can consume controllers properties and method as like mentioned below.

```
// Controller
    const app = angular.module('sampleApp',[]);
    app.controller('main',function(){
        this.name = 'Shivprasad';
    })

// Template
 <div ng-app="sampleApp" ng-controller="main as c">
        Hello {{c.name}}! // Hello Shivprasad!
    </div>
```

**Role of Controllers :-**

<img src="./assets/controller-role.png">

Data is termed as `Model` in angular & controllers are usually used to exchange of data with views.

View doesn't have any idea about controllers, it only believes in model's but controller works as middle man or data provider to view in terms of model.

Even controllers doesnt interact with databases directly, controllers communicate with web services & web services communicate with databases and delivers data to controller which controllers pass to view in terms of model.

### Scope

<img src="./assets/scope.png">

As we saw earlier Controller returns the model which is data indirectly but it doesn't send the data directly to view.

Scope is the mediator in between view & controller which carries the context of controller due to which it contains the all the data, method etc.

Remember if any property not present in the controller and still we try to access it through scpoe it does not throw any error, that why we use `use strict` in the controller.

Previous we was accesing the variable of controller through refrence created with the help of `as`, when we set the property to scope in controller we can directly access in the view without creating any refrence to controller as like mentioned below.

```
<script type="text/javascript">
        const app = angular.module('sampleApp',[]);
        // Assigned value to scope
        app.controller('main',function($scope){
            $scope.name = 'Shivprasad';
        })
</script>

<body ng-app="sampleApp" ng-controller="main">
    sum of 3 + 2 = {{ 3 + 2}}
    <br>
    // Consuming the variables from scope directly
    <div class="greet">
        Hello {{name}}!
    </div>
</body>
```

**Providing Collections rather than direct variables :-**

Browsers or servers usually minimzes our code in which case our variables get replaced with some simple charecters as like menioned below.
```
 // Assigned value to scope
        app.controller('main',function($scope){
            $scope.name = 'Shivprasad';
        })

// Minified
    app.controller('main',function(c){
        c.name = 'Minified';
    })
```

But the code gets minified it modifies the variables as it wants to be but that wont work in the view. To prevent this modification by browsers and servers we need to provide the collections for variables or dependencies as like mentioned below.

```
 // Assigned value to scope
        app.controller('main',function($scope){
            $scope.name = 'Shivprasad';
        })

// With Collection
    app.controller('main',['$scope',function(scope){ // Provided collection with ['instance',function(varible)]
        scope.name = 'Minified';
    }])
```
This is the standard we follow world wide for preventing the modification of dependencies but we need to keep in mind that its mapping is purely index based. If you provided a dependency at index 1, parameter 1 of the function will redirect to it.

```
app.controller('main,['inj1','inj2',function(var1, var2){

}])
```

**Creating & Using Multiple Controllers :-**

```
    // Shiv controller for Employee shiv
    app.controller('shiv',['$scope',function(scope){ // Provided collection with ['instance',function(varible)]
        scope.name = 'Shivprasad';
    }])

    // Sai controller for Employee Sai
    app.controller('sai',[$scope,function($scope){
        $scope.name = 'Saikiran'
    }])

    <div ng-controller="shiv">
        Employee name : {{name}} // Shivprasad
    </div>

    <div ng-controller="shiv">
        Employee name : {{name}} // Saikiran
    </div>
```

When we bind controller to some div it will refer its method & properties to its controller itself. No matter if proerties or methods are same.

**Controller Binding Syntax Differences :-**

- **Using refrence for controller :-**

    ```
     app.controller('main',function(){
        this.name = 'Shivprasad';
    })
    <div ng-app="sampleApp" ng-controller="main as c">
        Hello {{c.name}}! // Hello Shivprasad!
    </div>
    ```

    In this syntax controller scope is accesible from the view but rather the methods & properties of the scope will be set as refrence variable in scope like `scope.c` will refer to scope. there will be c property in the scope in which properties and methods from the controller will exists.

- **Using scope for controller :-**

    ```
     app.controller('main',function($scope){
        $scope.name = 'Shivprasad';
    })

    <div ng-app="sampleApp" ng-controller="main">
        Hello {{name}}! // Hello Shivprasad!
    </div>
    ```

    In this syntax controller variables & methods will be directly accesible through scope itself. it will exist in scope object with other inbuilt properties and methods rather than creating another property refering to this controller data.

### Scope Inheritance

<img src="./assets/scope-inheritance.png">

When the angular html compiler sees ng-controller directive then it creates a scope context referring to directives scope, anything will be defined in the scope of controller like properties, methods or everything will be accessible withing the html elment on which ng-controller binded.

When we use another controller within that existing div element which is already binded with some controller then it creates another scope context in existing parents scope context, so in the child scope context parent scope's properties and methods will be accessible due to inheritance as like Oops concept.

```
// Controllers
    const app = angular.module('sampleApp',[]);
    app.controller('main',["$scope",function($scope){
        $scope.name = 'Shivprasad';
    }])

    app.controller('child',['$scope',function($scope){
        $scope.salary = 45000;
        $scope.age = 25;
    }])

// View
<body ng-app="sampleApp" ng-controller="main">
    sum of 3 + 2 = {{ 3 + 2}}
    <br>
    <br>
    <div class="greet" ng-controller="child">
        Hello {{name}}!
        <br>
        Your Salay is {{salary}}
        <br>
        Your Age is {{age}}
    </div>
</body>

// Result
sum of 3 + 2 = 5

Hello Shivprasad!
Your Salay is 45000
Your Age is 25
```

As you can see we are able to access name which is declared in main controller in the scope of child scope.

We can nest n numbers of scope in each other as we have saw above, if you want to seprate the logic mdoule wise then we can use multiple controllers nested within same entity such as Employee will be main scope & Personal details, Financial details will act as child scope where they would contain its relative logic.

### Root Scope

<img src="./assets/rootscope.png">

Rootscope is the scope gets created when the the ng-app binding(module binding) is declared with root module for the application.

Root scope contains all the nested or child scopes it as gets created for module binding with dom.

And nesting of the scopes in hirarchial order will be the same in its child scopes.

**Root Scope Access :-**

<img src="./assets/rootscpe-access.png">

All the child scopes have access to rootscope methods & properties due to inheritance, When we bind module to dom element it creates root scope by default & as we declare the controllers in it creates controllers context inside the rootscope due to which all the scopes have access to root scope properties & methods.

**Declaring properties & methods in root scope :-**

We have `.run(['',function(){}])` method on module which gets executes when the module is initialized.

```
   const app = angular.module('sampleApp',[]).run(['$rootScope',function($rootScope){
            $rootScope.manager = 'SK';
        }]);

    app.controller('child',['$scope',function($scope){
            $scope.salary = 45000;
            $scope.age = 25;
        }])

<body ng-app="sampleApp">
    <div class="greet" ng-controller="child">
        Your Salay is {{salary}}
        <br>
        Your Age is {{age}}
        <br>
        Your manager is {{manager}}
    </div>
</body>
```

**RootScope Modifications :-**

<img src="./assets/rootscope-modification.png">

As mentioned above every controller scopes are referring to same rootscope variable TaxPercent, if we modify the rootscope values then it will be reflected in each and every controller.

`Note :- Rootscope gives us the comfortability to have access in each & every scopes but its not the good practice to use rootscope for sharing the data across multiple controllers. It should be only opted when there is no else way is remaining.`


**Accessing Root scope in Controllers :-**

<img src="./assets/rootscope-access.png">

If we dont have variable named in our local scope or parent scope it will directly refer to root scope if we have declared the variable with that name.

But it's not good practice to access the rootscope variable with direct access as it doesn't gives any clarity from where exactly we are accessing the values or where are those declared.

Best way to access the rootscope variable or values is with `$rootScope` parameter which is reserved keywork in angualr which we can inject as same as scope in the controller.

```
   const app = angular.module('sampleApp',[]).run(['$rootScope',function($rootScope){
            $rootScope.manager = 'SK';
            $rootScope.tax = 1500;
        }]);

    app.controller('child',['$scope',function($scope){
            $scope.salary = 45000 + $rootScope.tax; // We have accessed rootscope with $rootScope instance.
            $scope.age = 25;
        }])

<body ng-app="sampleApp">
    <div class="greet" ng-controller="child">
        Your Salay is {{salary}}
        <br>
        Your Age is {{age}}
        <br>
        Your manager is {{manager}}
    </div>
</body>
```

There is not necessity to declare the rootScope values in the `module.run` method only, we can declare the rootScope values from any of the child controllers as well. But it just should be declared before consuming it as like mentioned below.

```
const app = angular.module('app', []);

app.controller('myController',['$scope','$rootScope',function($scope,$rootScope) {
    $scope.name = 'Shiv';
    $rootScope.manager = 'SK'; // Setting rootscope values from child controller.

}])
```

### Data Binding (One way, 2 way & one time binding)

<img src="./assets/data-binding.png">

Data binding is the binding of data between the view & controller which will sync automatically and will reflect on the Ui as well when the data gets updated.

**Types of Data Binding in angularjs :-**

- **One Way Binding :-**

    <img src="./assets/one-way.png">

    One Way data binding is the data binding in which data updations reflects on view on real time but data cannot be updated in scope from the view.

    We can use one-way binding with Evaluation Expressions (interpolations) like `{{}}` or `ng-bind` for one way data binding.

    Data binding done with ng-bind or interpolation will integrate the data as content of the html tag where its used. It can be accessed through `innerText` property of html element.

    `ng-bind` does not works with input based tags, it only works with readonly or non-input based tags only.

    ```
    // View
    <div class="class" ng-controller="child">
            Your Initial Salay is {{::salary}}
            <h1>ng-binding</h1>
            Your Updated Salary is <span ng-bind="salary"></span>! // One Way binding
        </div>
        <hr>
        <button ng-click="doubleSalary()">Double Salary</button>
    </div>

    // Controller
    app.controller('child',['$scope',function($scope){
        $scope.salary = 45000;
        $scope.doubleSalary = function() {
            $scope.salary = $scope.salary * 2;
        };
    }])
    ```

- **Two Way Binding :-**

    <img src="./assets/two-way.png">

    Two way data binding the data binding in which updated data will reflect on view on real time as well as data can be updated in scope from the view ie with input field value updation etc.

    we can achieve 2 way data binding with `ng-model`.

    ```
    // View
     <div class="greet" ng-controller="child">
        You can modify your salary
        <br>
        <input type="text" ng-model="salary">
        <hr>
        <div class="class">
            Your Updated Salary is <span ng-bind="salary"></span>!
        </div>
        <hr>
        <button ng-click="doubleSalary()">Double Salary</button>
    </div>

    // Controller
    app.controller('child',['$scope',function($scope){
    $scope.salary = 45000;
    $scope.doubleSalary = function() {
        $scope.salary = $scope.salary * 2;
    };
}])
    ```

- **One Time Binding :-**

    <img src="./assets/one-time.png">
    
    One time data binding is similar as one-way binding in which data flows from controller or scope to view but it will not be reflected realtime on view as like one way data binding.

    When the scope initializes or data get initializes it will sent to the view only once, and if any changes happens to that data later it will not be reflected in view.

    We can achieve 1 time data binding by using `::` in Evaluation Expressions (interpolation).

    ```
    // View
    <div class="class" ng-controller="child">
        Your Initial Salay is {{::salary}} // One Time Binding
        <h1>ng-binding</h1>
        Your Updated Salary is <span ng-bind="salary"></span>!
    </div>
    <hr>
    <button ng-click="doubleSalary()">Double Salary</button>
    </div>

    // Controller
    app.controller('child',['$scope',function($scope){
        $scope.salary = 45000;
        $scope.doubleSalary = function() {
            $scope.salary = $scope.salary * 2;
        };
    }])
    ```

### AngularJs Events & Event bindings

### AngularJs API Calls & AJAX

<img src="./assets/ajax.png">

AJAX stands for Asynchronous javascript And XML which is the network between the server and client(browser) for the data interchange.

We recieve the data in terms of html, xml or data. When we recieve the full page with HTML is known as Full page post back.

When we recieve the data in terms of xml, json or data then its called as partial page post back.

<img src="./assets/cors.png">

When we request webpage from one domain or if webpage is loaded from one domain & then the webpage tries to access the data or resources from another domain then its called as cross-origin which is restricted.

If we want to allow cross-origin then we need to implement server 2 (secondary) the server accordingly.

We can make ajax calls in angular with `$http` built-in service, jquery or any third party library which provides ajax functionaliies.

**How to make API call in angularjs :-**

<img src="./assets/http.png">

We use http built-in service provided by the angular for API calls with `$http({config...})`.

- Import `$http` built-in service in controller.

- Construct `$http({url:'URL',method:'METHODTYPE'})` which takes config object as an arguement in which url is the server url & method like `GET`, `POST`, `PUT`, `DELETE` etc. We will checkout config object properties & methods in detail further ahead.

- When above http method initialized it returns response or error in terms of promise which we will catch with `$http({config}).then((res)=>{},(err)=>{})`.

```
// Template
<button ng-click="doubleSalary()">Double Salary</button>

// Controller
$scope.getUsers = function () {
    $http({
        url: 'https://jsonplaceholder.typicode.com/users',
        method:'GET'
    }).then((res) => {
        console.log("Users => ", res.data);
        alert(res.data[0].name);
        }, (err) => {
        console.log("Error Occured while getting users=>", err);
    })
}
```

### Angularjs Services

<img src="./assets/services.png">

Angularjs service is common code for business logic or non-controller dependent which can be used in entire application.

Service only gets initialized once in the angularjs application memory and that only if any of controllers have consumed it. When its already initialized all controllers refers to the same instance of service in entire application.

Services can be used in another services as well for segrigating logics of perticular features.

**Service Types :-**

- **Built-in Services :-**

    Built-in services are the services provided by the angular which can be consumed for consuming angularjs functionalities.

- **Custom Services :-**

    <img src="./assets/custom-services.png">

    Custom services are the services created by the us for business logic, according to features or specific parts of the application. ie if i have user management application i will have different services for user, admin etc.

    **How to create custom service :-**

    We can create the custom services with 3 different ways, Factory, Service & Provider as mentioned below.

    **Factory :-**

    <img src="./assets/factory.png">

    Factory is inbuit feature provided by the angular with which we can create our custom service, we create an object in the factory & we assign the properties & methods to that object & return it.

    We will be able to access the properties & methods across the application with the help of factory.

    ```
    // Module
    const app = angular.module('app',[]);

    // Factory
    app.factory('userService',function(){
        // Created factory object, assinged methods & properties & returned it
        let service = {};
        service.setURL = function(url){
            service.URL = url;
        }

        return service;
    })

    // Controller
    app.controller('main',['$scope','userService',function(userService){
        userService.setURL('https://api.github.com')
    }])
    ```

    **Service :-**

    <img src="./assets/service.png">

    Service is another way to create an custom service in which the syntax is little bit different but have same purpose as factory.

    we directly assign the properties & methods to `this` keyword which refers to object its property of as like mentioned below.

    ```
     // Module
    const app = angular.module('app',[]);

    // Factory
    app.service('userService',function(){
        // Created service, assigned function with this keyword
        this.setURL = function(url){
            service.URL = url;
        }
    })

    // Controller
    app.controller('main',['$scope','userService',function($scope,userService){
        userService.setURL('https://api.github.com')
    }])
    ```

    **Provider :-**

    <img src="./assets/provider.png">

    Service, Factory are the wrappers built upon the provider but provider is an core funcitonality behind the angularjs services.

    Provider can be used when you want to pass the configuration or data which needs to do some operation before service gets initialized.

    In the provider we have `this.$get = function(){}` method which gets executed after the service's configuration for execution of the service.

    `Note :- app.config will get called in the initial stage of the application where no controllers, views and all initliazed yet so we cant access anythings related to those in the config callback.`

    ```
         // Module
    const app = angular.module('app',[]);

    app.config(['userService',function(userService){
        userService.setURL('http://localhost:4200');
    }])

    // Factory
    app.provider('userService',function(){
        let URL = '';

        // Created service, assigned function with this keyword
        this.setURL = function(url){
            URL = url;
        }

        this.$get = function(){
            let service = {};
            service.getUserInfo = function(){
                return // API CAll
            }
            return service;
        }
    })

    // Controller
    app.controller('main',['$scope','userService',function($scope,userService){
        userService.setURL('https://api.github.com')
    }])
    ```

### Bulit-In directives

There are bunch of built-in directives provided by angularjs which can be used accordingly to requirements.

- **ng-if :-**

    <img src="./assets/ng-if.png">

    ng-if directive takes expression as an arugment & if expressions returns true then only element will be rendered in the dome. It will not be hidden with the help of css but it will not rendered itself.

    It creates its own scoep & search the expression variables & method in its scope if it does not exist then it will keep checking to parent scope till root scope.

    ```
    // Template
    <div class="class" ng-if="salary">
            Your Updated Salary is <span ng-bind="salary"></span>!
    </div>

    // Controller
     $scope.salary = 45000;
    ```
    
- **ng-show or ng-show :-**

    <img src="./assets/ng-show-hide.png">

    ng-show is similar to ng-if directive but ng-if will show or hide element with the help of css but it will be part of dom.

    No scope will be created for ng-show directive properties & methods.

    ng-hide works vice versa to ng-show if the condition will be true and used ng-hide then element will be hidden or if ng-show is true then element will be visible.

    ```
    // Template
    <div class="class" ng-hide="!salary">
            Your Updated Salary is <span ng-bind="salary"></span>!
    </div>

    // Controller
     $scope.salary = 45000;


     // Template
    <div class="class" ng-show="salary">
            Your Updated Salary is <span ng-bind="salary"></span>!
    </div>

    // Controller
     $scope.salary = 45000;
    ```

- **ng-repeat :-**

    <img src="./assets/ng-repeat.png">

    ng-repeat is kind of for-loop reusable template in html, in which same tempalte but different data will be rendered.

    It creates its own scope of an item while iterating through array of items & that items properties & data will be accessed through its instance variable.

    ```
    // Template
      <div class="users" ng-if="users.length>0">
            <div class="card" style="border:1px solid;padding:10px;" ng-repeat="user in users">
                Id : {{user.id}}
                <br>
                Name : {{user.name}}
                <br>
                Email : {{user.email}}
            </div>
        </div>

        // Controller
        $scope.getUsers = function () {
        UserFactory.getUsers().then((res) => {
                $log.log("Users => ", res.data);
                $scope.users = res.data;
            }, (err) => {
                console.log("Error Occured while getting users=>", err);
        })
        }
    ```

### Bootstrap CSS Integration

We can simply integrate bootstrap in angular application by including cdn scripts related to it.

**Scripts to include :-**

- **Bootstrap CSS :-** `    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">`

- **Boootstrap Bundles (Includes everything such as popper, jquery) :-** 
  
    Note that always include the script files at the end of the body tag, so dom elements would be accesible through it as we are accesing them after they rendered.

    ```
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    ```

### AngularJs Filters

<img src="./assets/filters.png">

AngularJs filters are the similar as angular pipes, which are pure functions to transform & manipulate the data according to our requirements. We can use filters for sorting,filtering & transforming data according to our requirements.

There are some built-in filters provided by angularjs such as `number,date,filter,uppercase, lowercase, orderby etc` & we can create our own filters as well for our custom requirements.

We can consume filters directly inside html using evaluation expressions like `{{12 | number}}` & in controllers, services etc.

**How to consume filters :-**

- **Filters in View :-**
  
    For using filters into html we need to use evaluation expressions as like mentioned below. The key or value will be taken as input & result will be returned in evaluation expression which will be displayed as final output on screen.

    ```
    // Controller
    $scope.empName = 'shiv'

    // Tempalte
    {{empName | uppercase}}
    ```

- **Filters in Controllers & Services :-**

    For using filters into controllers we need to inject `$filter` into controller or services and we need to pass the filterName & input data as arguement to method like `$filter(filterName)(inputData)` which will returned transformed value.

    ```
    app.controller('sample',['$scope','$filter',function($scope,$filter){
        // UpperCase value will be stored in variable
        $scope.empNameUpperCase = $filter('uppercase')('Shiv');
    }])

    app.service('sampleService',['$filter',function($filter){
        this.getUpperCaseValue = function(inputValue){
            // Returning transformed value
            return $filter('uppercase')(inputValue)
        }
    }])
    ```

**Built-In Filters :-**

- **uppercase :-**

    {{inputValue | uppercase}}

- **lowercase :-**

    {{inputValue | lowercase}}

- **number :-**
  
    {{inputValue | number:"2"}}

- **currency :-**
  
    {{inputValue | currency:"$":2}}

- **dates :-**
    
    {{inputValue | date:"medium"}}

- **orderby :-**

    {{objArray | orderby:''}}

- **filter :-**

    {{objArray | filter:{property:value}}}

- **json -**

    {{inputObj | json}}

- **limitTo :-**

### Custom Directives

<img src="./assets/custom-directives.png">

Directives are functionality provided by angular with the help of which we can execute logic, change the tempalte structure and moreover template related logic within template itself.

Angular provdes built-in directives such as ng-show, ng-hide, ng-repeat etc. we can create our own custom directives as well according to our requirements.

We can create our own custom directives with the help of `app.directive(nameInCamleCase)` and we can use it with `- seprator`  like `myDirective to <span my-directive></span>`.


**Types of Custom directives :-**

- **Component :-**

    Component directives are the directives which have their own html or which returns the its own html. those are called as widget as well.

- **Decorators :-**

    Decorators are the directives which manipulates the existing html according to requirements.

- **Templating :-**




    


