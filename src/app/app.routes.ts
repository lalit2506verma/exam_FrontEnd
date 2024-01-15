import { Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';

export const routes: Routes = [

    {
        path: 'signup',
        component : RegistrationComponent,
        pathMatch : 'full'
    }
];
