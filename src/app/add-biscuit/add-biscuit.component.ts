import { Component, OnInit } from '@angular/core';
import { Biscuit } from '../model/biscuit.model';
import { BiscuitService } from '../services/biscuit.service';
import { Marque } from '../model/marque.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-biscuit',
  templateUrl: './add-biscuit.component.html'
})
export class AddBiscuitComponent implements OnInit {

  newBiscuit = new Biscuit();
  marques! : Marque[];
  newIdMarque! : number;
  newMarque! : Marque;
  constructor(private biscuitService: BiscuitService,private router :Router) { }
  ngOnInit(): void {
    this.biscuitService.listeMarque().
    subscribe(mars => {console.log(mars);
    this.marques = mars._embedded.marques;
    }
    );
    }
    

 
    addBiscuit(){
      this.newBiscuit.marque = this.marques.find(ma => ma.idMarque == this.newIdMarque)!;
      this.biscuitService.ajouterBiscuit(this.newBiscuit).subscribe(bisc => {console.log(bisc);
      this.router.navigate(['biscuits']);
      });
      }

}