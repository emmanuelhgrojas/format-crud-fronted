//Import Libraries Interns
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
//Import Libraries Externs

//Import Components
import { ConfigurationFormComponent } from './configuration-form.component';
//Constants
const titlePlatform: string = 'Configuración Formulario | ' + environment.titleWindowPlatform;

const configurationFormRoutes: Routes = [
    {
        path: '',
        component: ConfigurationFormComponent,
        data: {title: titlePlatform },
        children: [
        ]
    }
];

/** Array of Components Routes */
export const routableConfigurationFormComponents = [
	ConfigurationFormComponent
];

@NgModule ({
    imports: [
        RouterModule.forChild(configurationFormRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ConfigurationRoutingModule {}

