import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const Routes: Routes = [

    { path: 'signup', component: SignupComponent },
    { path: 'user', component: UserprofileComponent },
    { path: '', component: UserprofileComponent }

];

export { Routes };