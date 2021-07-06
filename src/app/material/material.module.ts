import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';



const material=[MatButtonModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatMenuModule,
MatCardModule,FlexLayoutModule,MatSlideToggleModule,MatBadgeModule]
@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
