import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BiscuitService } from '../services/biscuit.service';
import { Biscuit } from '../model/biscuit.model';
import { Marque } from '../model/marque.model';
import { Router } from '@angular/router';
@Component({
selector: 'app-update-biscuit',
templateUrl: './update-biscuit.component.html',
styles: []
})
export class UpdateBiscuitComponent implements OnInit {
currentBiscuit = new Biscuit();
marques! : Marque[];
updatedMarqueId! : number;
constructor(private activatedRoute: ActivatedRoute,private biscuitService: BiscuitService,private router :Router) { }
ngOnInit(): void {
  this.biscuitService.listeMarque().
  subscribe(mars => {console.log(mars);
  this.marques = mars._embedded.marques;
  }
  );
  this.biscuitService.consulterBiscuit(this.activatedRoute.snapshot.params['id']).
  subscribe( bisc =>{ this.currentBiscuit = bisc; 
  this.updatedMarqueId = this.currentBiscuit.marque.idMarque;
  } ) ;
  }

  

  updateBiscuit() {
    this.currentBiscuit.marque = this.marques.find(ma => ma.idMarque== this.updatedMarqueId)!;
         this.biscuitService.updateBiscuit(this.currentBiscuit).subscribe(bisc => {
      this.router.navigate(['biscuits']); }
      );
  }
}
