import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistasComponent } from './vistas/vistas.component';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { ModalAddUpdateComponent } from './modal-add-update/modal-add-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListComponent,
    TableComponent,
    NotfoundpageComponent,
    ModalAddUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalAddUpdateComponent]
})
export class AppModule { }
