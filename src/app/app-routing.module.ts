import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BiscuitsComponent } from './biscuits/biscuits.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { AddBiscuitComponent } from './add-biscuit/add-biscuit.component';
import { UpdateBiscuitComponent } from './update-biscuit/update-biscuit.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
const routes: Routes = [
{path: "biscuits", component : BiscuitsComponent},
{path: "add-biscuit", component : AddBiscuitComponent},
{path: "", redirectTo: "biscuits", pathMatch: "full" },
{path: "updateBiscuit/:id", component: UpdateBiscuitComponent},
{path: "rechercheParMarque", component : RechercheParMarqueComponent},
{path: "rechercheParNom", component : RechercheParNomComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
