//Import Libraries Interns
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormatosComponent } from './formatos.component';
//Import Libraries Externs

//Import Components

//Constants
const titlePlatform: string = 'Formatos | ' + environment.titleWindowPlatform;
const formatosRoutes: Routes = [
    {
        path: '',
        component: FormatosComponent,
        data: {title: titlePlatform },
        children: [
        ]
    }
];

/** Array of Components Routes */
export const routableFormatosComponents = [
	FormatosComponent
];

@NgModule ({
    imports: [
        RouterModule.forChild(formatosRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class FormatosRoutingModule {}

