
import { Component, OnInit } from '@angular/core';
import { Biscuit } from '../model/biscuit.model';
import { BiscuitService } from '../services/biscuit.service';

@Component({
  selector: 'app-biscuits',
  templateUrl: './biscuits.component.html'
})
export class BiscuitsComponent implements OnInit {

    biscuits? : Biscuit[]; //un tableau de produits

  constructor(private biscuitService: BiscuitService) {
   //this.produits=[];
     }

  ngOnInit(): void {

    this.chargerBiscuits();
  }

  chargerBiscuits(){
    this.biscuitService.listeBiscuit().subscribe(biscs => {
      console.log(biscs);
      this.biscuits = biscs;
      });
  }

  supprimerBiscuit(b: Biscuit) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf && b.idBiscuit !== undefined) { // Vérifier que idBiscuit n'est pas undefined
      this.biscuitService.supprimerBiscuit(b.idBiscuit).subscribe(() => {
        console.log("biscuit supprimé");
        this.chargerBiscuits();
      });
    }
  }
 
 

}