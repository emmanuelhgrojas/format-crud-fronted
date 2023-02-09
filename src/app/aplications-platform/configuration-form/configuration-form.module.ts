import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationFormComponent } from './configuration-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigurationRoutingModule, routableConfigurationFormComponents } from './configuration-form-routing.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    routableConfigurationFormComponents,
    ConfigurationFormComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ConfigurationRoutingModule,
    CKEditorModule
  ]
})
export class ConfigurationFormModule { }
