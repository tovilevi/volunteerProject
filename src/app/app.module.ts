import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeddHelpComponent } from './Components/nedd-help/nedd-help.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SubjectVolonteringComponent } from './components/subject-volontering/subject-volontering.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { MitnadevSpaceComponent } from './Components/mitnadev-space/mitnadev-space.component';
import { MitnadevComponent } from './Components/mitnadev/mitnadev.component';
import { NeedhelpSpaceComponent } from './Components/needhelp-space/needhelp-space.component';
import { SCHComponent } from './components/sch/sch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitiesComponent } from 'src/app/Components/cities/cities.component';

import { ShowmsComponent } from './Components/showms/showms.component';
import { DeletemitnadevComponent } from './Components/deletemitnadev/deletemitnadev.component';
import { UpdatemComponent } from './Components/updatem/updatem.component';
import { UpdateNComponent } from './Components/update-n/update-n.component';
import { ConstrainComponent } from './Components/constrain/constrain.component';
import { ShownComponent } from './Components/shown/shown.component';
import { UpdateNcvComponent } from './Components/update-ncv/update-ncv.component';



 import {MatSelectModule} from '@angular/material/select';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CitiesService } from './Servises/cities.service';
import { ShowmsService } from './Servises/showms.service';
import { GeneticService } from './Servises/genetic.service';
import { MitnadevService } from './Servises/mitnadev.service';
import { SubjectVolonteringService } from './Servises/subjectvolontering.service';
import { DeletemitnadevService } from './Servises/deletemitnadev.service';
import { NeedHelpService } from './Servises/need-help.service';
import { ManagerComponent } from './Components/manager/manager.component';
import { LoginManagerComponent } from './Components/login-manager/login-manager.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ManagerComponentDialogComponent } from './Components/manager-component-dialog/manager-component-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NeddHelpComponent,
    SubjectVolonteringComponent,
    SignupComponent,
    LoginComponent,
    MitnadevSpaceComponent,
    MitnadevComponent,
    NeedhelpSpaceComponent,
    SCHComponent,
    CitiesComponent,

    ShowmsComponent,

    DeletemitnadevComponent,

    UpdatemComponent,

    UpdateNComponent,

    ConstrainComponent,

    ShownComponent,

    UpdateNcvComponent,
     ManagerComponent,
     LoginManagerComponent,
     TranslatePipe,
     ManagerComponentDialogComponent,
    
    //   TimeComponent
    


  ],
  imports: [
    MatNativeDateModule, 
    // MatMomentDateModule,
    MatDatepickerModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
     MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [
    CitiesService,
    ShowmsService,
    GeneticService,
    MitnadevService,
    SubjectVolonteringService,
    DeletemitnadevService,
    NeedHelpService,
    ReactiveFormsModule
  ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }





