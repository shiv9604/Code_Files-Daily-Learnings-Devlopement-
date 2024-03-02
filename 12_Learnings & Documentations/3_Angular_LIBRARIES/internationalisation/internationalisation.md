# Internationlisation

We can build multi language application which can be used globally with the help of `ngx-translate` npm library.

### Installation

We can install ngx-translate with `npm install @ngx-translate/core --save` & `npm install @ngx-translate/http-loader --save` for installing loader for it.

**Config :-**

- Register Translate module in `app.module.ts` by importing TranslateModule as like mentioned below.

```
// app.module.ts

import {TranslateModule} from `@ngx-translate/core`;

imports:[
    TranslateModule.forRoot()
]
```

- Implement the HttpLoaderFactory by importing required Modules as mentioned in github repo document as like mentioned below.

```
// app.module.ts
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
```

- Provide the translate module options as mentioned in github documents with necessary imports.

```
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from `@ngx-translate/core`;

imports:[
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
],
providers:[
    HttpClient
]
```

### Translation Files

Our translations will be loaded from this files so we need to create this files to load the translations against the i18 keys accordingly.

Create `assets/i18` directory in assets directory & create the json files like `en.json, jp.json, de.json` etc.

In the json attribute will be the key & its value will be the translatations in the json file as like mentioned below.

```
// en.json
{
    "buy" : "buy"
}

// de.json
{
    "buy" : "kauf"
}

// ar.json
{
    "buy" : "يشتري"
}
```

We can set the dynamic value in the json as well with interpolation in which we set the property aginst which we will need to dynamic value from params.

We can pass this params with multiple ways which will look in the follwing sections.
```
// de.json
{
    "buy":"kauf {{label}}"
}
```

### Translations

We can implement the translations with our custom ways, like storing language in local storage or session storage or getting it from backend or setting language based on dropdowns etc.

The only buissness we need to do with translateService is we need to pass the currentLanguage to `translateService.use(currentLanguage)` & this will does the magic for us.

We need to configure the default language & `translateService.use(lang)` in app components as like mentioned below.

```
export class AppComponent {
    param = {value: 'world'};

    constructor(translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        // Everytime the language changes in session storage this will be triggered & translations will be processed by translateService.

        translate.use(sessionStorage.getItem('lang') || 'en');
    }
}
```

**Get Translations :-**

After the configuration for setting the currentLanguage, We can get the translate with serval different ways like using `| translate` pipe, `[translate]='key'` directive & `translateService.get(key)` which returns Observable etc.

- **translate Pipe :-**

    We need to use the translate pipe in interpolations with the i18 key as like mentioned below.

    ```
    // template
    <div>{{'buy' | translate : param}}
    ```

- **translate directive :-**

    We can use the translate directive for passing dynamic value or simpler values as like mentioned below.

    ```
    // dynamic values
    <div [translate]="'HELLO'" [translateParams]="{value: 'world'}"></div>

    // translations on tag content itself.
    <div translate [translateParams]="{value: 'world'}">HELLO</div>
    ```

- **html through i18 keys :-**

    We can write the html as values against i18 keys in translation files & we can consume it with `[innterHTML]="key | translate"` as like mentioned below.

    ```
    // en.js
    {
    "welcome": "Welcome to my Angular application!<br><strong>This is an amazing app which uses the latest technologies!</strong>"
    }

    // consumption
    <div [innerHTML]="'welcome' | translate"></div>
    ```

- **translations through service :-**

    We can get the translations through `translateService.get(key)` method which returns observable as like mentioned below.

    ```
    // class
    translate.get('buy', {value: 'Product'}).subscribe((res: string) => {
    console.log(res);
    //=> 'buy Product'
    });
    ```









