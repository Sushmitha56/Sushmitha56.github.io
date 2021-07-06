import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProjectComponent } from './project/project.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ActivitiesComponent } from './activities/activities.component';
import { DeviceListComponent } from './device-list/device-list.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { RightSidenavComponent } from './right-sidenav/right-sidenav.component'
import { ProviderService } from './provider.service';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ProjectComponent,
    ProfileComponent,
    SettingsComponent,
    ActivitiesComponent,
    DeviceListComponent,
    RightSidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxDatatableModule,
    MatInputModule
    
  

  ],
  providers: [ProviderService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
