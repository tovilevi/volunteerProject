import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeddHelpComponent } from "src/app/Components/nedd-help/nedd-help.component";
import { MitnadevComponent } from "src/app/Components/mitnadev/mitnadev.component";
import { SignupComponent } from "src/app/Components/signup/signup.component";
import { LoginComponent } from "src/app/Components/login/login.component";
import { ShowmsComponent } from "src/app/Components/showms/showms.component";

import { MitnadevSpaceComponent } from "src/app/Components/mitnadev-space/mitnadev-space.component";
import { NeedhelpSpaceComponent } from "src/app/Components/needhelp-space/needhelp-space.component";
import { SubjectVolonteringComponent } from "src/app/components/subject-volontering/subject-volontering.component";
import { DeletemitnadevComponent } from "src/app/Components/deletemitnadev/deletemitnadev.component";
import { UpdateNComponent } from "src/app/Components/update-n/update-n.component";
import { ConstrainComponent } from "src/app/Components/constrain/constrain.component";
import { UpdatemComponent } from "src/app/Components/updatem/updatem.component";
import { ShownComponent } from './Components/shown/shown.component';
import { UpdateNcvComponent } from './Components/update-ncv/update-ncv.component';
import { SCHComponent } from './components/sch/sch.component';
import { AppComponent } from './app.component';
import { ManagerComponent } from './Components/manager/manager.component';
import { LoginManagerComponent } from './Components/login-manager/login-manager.component';


const routes: Routes = [
  {
    path: 'app-mitnadev', component: MitnadevComponent, children: []
      
  },
  {
    path: 'app-nedd-help', component: NeddHelpComponent, children: [
     ]
  },
  { path: 'app-signup', component: SignupComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-signup', component: SignupComponent },
      { path: 'app-login', component: LoginComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-signup', component: SignupComponent },
  { path: 'app-mitnadev-space/:id', component: MitnadevSpaceComponent },
  { path: 'app-needhelp-space/:id', component: NeedhelpSpaceComponent },
  { path: 'app-subject-volontering/:id', component: SubjectVolonteringComponent }
  , { path: 'app-constrain', component: ConstrainComponent },
  { path: 'app-update-ncv/:id', component: UpdateNcvComponent },
  { path: 'app-updatem', component: UpdatemComponent },
  { path: 'app-showms', component: ShowmsComponent },
  { path: 'app-deletemitnadev', component: DeletemitnadevComponent },
  { path: 'app-update-n/:id', component: UpdateNComponent },
  { path: 'app-shown', component: ShownComponent },
  { path: 'app-sch', component: SCHComponent },
  { path: 'app-root', component: AppComponent },
  { path: 'app-login-manager', component: LoginManagerComponent },

  { path: 'app-manager', component: ManagerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
