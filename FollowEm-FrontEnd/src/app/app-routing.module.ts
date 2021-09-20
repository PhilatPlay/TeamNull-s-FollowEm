import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: "signup", component: SignupComponent},
  {path: "login", component: LoginComponent},
<<<<<<< HEAD
  {path: "profile/:user_id", component: ProfileComponent},
  {path: "posts", component: PostsComponent},
  {path: "post-form", component: PostFormComponent},
=======
  {path: "profile", component: ProfileComponent, canActivate: [AuthGuard]},
 { path: "posts", component: PostsComponent},
 {path: "post-form", component: PostFormComponent, canActivate: [AuthGuard]}
>>>>>>> 01f1ac211bd717ae63c388cd09f954cc28cbf535
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
