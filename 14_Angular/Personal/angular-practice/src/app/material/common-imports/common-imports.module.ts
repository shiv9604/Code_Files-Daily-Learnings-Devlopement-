import { ModuleWithProviders, NgModule } from "@angular/core";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        MaterialModule
    ],
    exports: [
        FlexLayoutModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    providers: [],
    entryComponents : []
})
export class CommonImportsModule {
    constructor() {
    }
}