import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {RangoModelosDirective} from '../directives/rango-modelos.directive'

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent implements OnInit {
  accion: string;
  auto: Automovil = {} as Automovil;
  min:number;
  max:number;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if(this.auto.modelos == null){
      this.min = 2010;
      this.max = 2015;
    }else{
      this.min = this.auto.modelos[0];
      this.max = this.auto.modelos[this.auto.modelos.length-1];
    }
    
  }

  onSubmit(){
    let m: number[] = this.generarModelos();
    this.auto.modelos = m;
    this.activeModal.close(this.auto);
  }

  generarModelos(){
    let modelos: number[];
    modelos = [];
    for(let i = this.min; i <= this.max; i++) {
      modelos.push(i);
    }
    return modelos;
  }
}
