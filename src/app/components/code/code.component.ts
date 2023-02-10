// <!-- Ce component servira à recevoir du code depuis le parent(app) et l'afficher. (=> @input) -->

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {
  // Je suis prêt à recevoir! >_<
  @Input() code!:string;
  // Une fois c'est l'enfant est prêt à recevoir, je crée la liaison entre le parent et l'enfant : dans app.html : 
  // 1) appeler l'enfant => <app-code></app-code>
  // 2) et lui passer input (qui est ici): [nom de input] (donc, [code]). 
}
