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
import { FormsModule } from '@angular/forms';
import { ModalConfirmActionComponent } from './modal-confirm-action/modal-confirm-action.component';
import { RangoModelosDirective } from './directives/rango-modelos.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListComponent,
    TableComponent,
    NotfoundpageComponent,
    ModalAddUpdateComponent,
    ModalConfirmActionComponent,
    RangoModelosDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalAddUpdateComponent]
})
export class AppModule { }
