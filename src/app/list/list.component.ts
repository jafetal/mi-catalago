import { Component, OnInit } from '@angular/core';
import {AUTOMOVILES} from '../data'
import {Automovil} from '../models'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado:Automovil;
  closeResult = '';

  constructor(private modalService: NgbModal) { }
  
  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }
  
  open(content,auto) {
    this.autoSeleccionado = auto;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
