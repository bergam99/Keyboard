// Component qui affichera un key (afficher les valeurs de bouttons).

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent {
  // je vais passer la valeurs de la key.
  // Pour passer les données de parent à l'enfant = @input.
  // ! : obligatoire. pas vide.
  // string : de type string.

  @Input() keyValue! : string;

  // également, une fois mon input est prêt, je crée la liaison entre le parent et l'enfant. je vais dans parent.html(app.html) et "passer le [nom de input]" (ici, son nom c'est keyValue => [keyValue])!!
  // Je reçois de parent, et ma valeur que je vais avoir ça s'appellera "keyValue". et ce nom servira à afficher la valeuer de la clé dans son html.

  // key <= app
  // code <= app

  // Je crée également OutPut() qui s'appelle onClickKey.
  @Output() onClickKey = new EventEmitter();

  keyClick(){
    this.onClickKey.emit(this.keyValue);
    }
  //  Donc Je click et ça mets dans le consol sa valeur. 
  // 	J'ai les lettres qui s'affiche dans le consol quand je click sur le boutton.

  // On a output donc, à chaque fois qu'on appelle keyClick, on va faire => this.onClick.emit la valeur.

}
