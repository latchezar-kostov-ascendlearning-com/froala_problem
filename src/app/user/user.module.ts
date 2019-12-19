import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: UserComponent },
    { path: '*', component: UserComponent },
];

@NgModule({
    declarations: [UserComponent],
    imports: [
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class UserModule {}
