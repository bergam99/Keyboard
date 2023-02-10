import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {
  // Créer les output pour chaques fonctions
  @Output() onClickRemove = new EventEmitter();
  @Output() onClickReset = new EventEmitter();
  @Output() onClickCheck = new EventEmitter();

  // Créer 3 fonctions
  // lier chaque fonction à son output dans la class 

  remove(){
    this.onClickRemove.emit();
  }

  reset(){
    this.onClickReset.emit();
  }

  check(){
    this.onClickCheck.emit();
  }
  // => chaqune de mes fonctionnes sont liées à outputs

}
