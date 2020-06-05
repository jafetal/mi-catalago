import { Component, OnInit } from '@angular/core';
import {Automovil} from '../models'
import { AutosService } from '../services/autos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';
import { ModalConfirmActionComponent } from '../modal-confirm-action/modal-confirm-action.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: Automovil[];
  page: number;
  pageSize: number;

  constructor(private autoService: AutosService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
      this.page = 1;
    this.pageSize = 10;
    })
    
  }

  openModalEditar(auto){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(
      (auto)=>{
        this.autoService.updateAutos(auto).subscribe(response=>console.log(response));
      },
      (reason)=>{
        console.log(reason);
      }
    )
  }

  openModalAgregar(){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});
    modalRef.componentInstance.accion = 'Agregar';

    modalRef.result.then(
      (auto)=>{
        this.autoService.agregarAutos(auto).subscribe(response=>console.log(response));
      },
      (reason)=>{
        console.log(reason);
      }
    )
  }

  openModalEliminar(auto:Automovil){
    const modalRef = this.modalService.open(ModalConfirmActionComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Eliminar';

    modalRef.result.then(
      (auto)=>{
        this.autoService.eliminarAuto(auto).subscribe(response=>console.log(response));
      },
      (reason)=>{
        console.log(reason);
      }
    )
  }
}
