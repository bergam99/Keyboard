import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//On va créer une variable "code" et on va l'initialiser avec une string vide dans le parent (=app).
// Cette variable nous servira à stocker le code. 
// C'est à cette variable qu'on ajoutera les nouveaux caractères. 
// => Je crée une variable vide.
  code : string = "";

  // Dans le parent (ici) je crée un tableau avec tous les caractères.
  // => créer la variable "keyboard" avec tous les touches. Et il est de type string.
  keyboard: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


  // la fonction "updateCode" va prendre en argument keyvalue.

  updateCode(keyValue:string){
    // console.log("KEY", keyValue);

// fonction qui sert à ajouter un nouveau caractère à notre "code". (j'appuie sur le boutton ça met sur le site)
    this.code += keyValue;
  }

  // fonction qui retire le dernier élément du "code"
  // reçu de l'enfant
  remove(){
    this.code = this.code.slice(0, -1);
  }

  reset(){
    this.code = "";
  }

  // 	Si je mets 123, il m'alerte "bien joué", sinon Essaye encore.

  check(){
    return this.code === "123" ? alert(" Bien joué ^_< ") : alert("Essaie encore");
  }
}
