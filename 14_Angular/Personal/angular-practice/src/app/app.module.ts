import { SenwellPageComponent } from './components/senwell-page/senwell-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FormComponent } from './components/form/form.component'
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RedElDirective } from './directives/red-el.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from './material/material.module';
import { CrudComponent } from './components/crud/crud.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BlogHomeComponent } from './components/blogs/blog-home.component';
import { CommentsComponent } from './components/comments/comments.component';
import { TypecodeTodosComponent } from './components/typecode-todos/typecode-todos.component';
import { TestHomeComponent } from './components/depronto-test-home/test-home.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipeComponent } from './components/search-pipe/search-pipe.component';
import { HomeComponent } from './components/home/home.component';
import { LoginAuthComponent } from './components/login-auth/login-auth.component';
import { HeaderInterceptor } from './services/intercepter-services/headers/header.interceptor';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterActionsComponent } from './counter/counter-actions/counter-actions.component';
import { CounterNameComponent } from './counter/counter-name/counter-name.component';
import { appReducer } from './Store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoaderComponent } from './components/loader/loader.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { NgrxRouterSerializer } from './Store/ngrx-router.serializer';
import { NumStrenthPipe } from './pipes/num-strenth.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    ReactiveFormComponent,
    TodoListComponent,
    RedElDirective,
    CrudComponent,
    BlogHomeComponent,
    CommentsComponent,
    TypecodeTodosComponent,
    TestHomeComponent,
    SenwellPageComponent,
    FilterPipe,
    SearchPipeComponent,
    HomeComponent,
    LoginAuthComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterActionsComponent,
    CounterNameComponent,
    LoaderComponent,
    NumStrenthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly:environment.production
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer:NgrxRouterSerializer
    })
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:HeaderInterceptor,multi:true}],
  bootstrap: [AppComponent],
  exports:[MaterialModule,MatIconModule]
})
export class AppModule { }
