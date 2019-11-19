import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule,MatInputModule,MatOptionModule, MatSelectModule,MatIconModule,MatDividerModule,MatSnackBarModule,
  MatCardModule,MatButtonModule,MatExpansionModule, MatFormFieldModule } from '@angular/material';
  import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatInputModule,MatOptionModule, MatSelectModule,MatIconModule,MatDividerModule,MatSnackBarModule,
  MatCardModule,MatButtonModule,MatExpansionModule, MatFormFieldModule,MatTableModule,MatSidenavModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
