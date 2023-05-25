import { Component } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Biscuit } from '../model/biscuit.model';
import { BiscuitsComponent } from '../biscuits/biscuits.component';
import { BiscuitService } from '../services/biscuit.service';
@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',

})
export class RechercheParMarqueComponent {
  biscuits! : Biscuit[];
IdMarque! : number;
marques! : Marque[];
constructor(private biscuitService : BiscuitService) { }

ngOnInit(): void {
  this.biscuitService.listeMarque().
    subscribe(mars => {this.marques = mars._embedded.marques;
    console.log(mars);
  });

}
onChange() {
  this.biscuitService.rechercherParMarque(this.IdMarque).
    subscribe(mars =>{this.biscuits=mars});

  }
}
