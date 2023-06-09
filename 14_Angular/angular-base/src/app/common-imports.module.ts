import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [FormsModule, HttpClientModule, MaterialModule, ReactiveFormsModule],
  providers: [],
  entryComponents: [],
})
export class CommonImportsModule {}
