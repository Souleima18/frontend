import { Injectable } from '@angular/core';
import { Biscuit } from '../model/biscuit.model';
import { Marque } from '../model/marque.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MarqueWrapper } from '../model/MarqueWrapped.model';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class BiscuitService {
  apiURL: string = 'http://localhost:8081/biscuits/api';
  apiURLCat: string = 'http://localhost:8081/biscuits/cat';

  biscuits : Biscuit[]; //un tableau de produits
  //categories : Categorie[];
 

  constructor(private http : HttpClient) { 
    /*this.marques = [ {idMarque : 1, nomMarque : "Saida",descriptionMarque : "biscuit"},
    {idMarque : 2, nomMarque : "kif",descriptionMarque : "biscuit"}]; */
    this.biscuits = [
    {idBiscuit : 1, nomBiscuit : "gaufrette", prixBiscuit : 1500.000,gout:"fraise", dateSortir : new Date("01/14/2011"),marque: {idMarque : 1, nomMarque : "Saida",descriptionMarque : "biscuit"}},
    {idBiscuit : 2, nomBiscuit : "oreo", prixBiscuit : 2000.000,gout:"vanille", dateSortir : new Date("01/14/2011"),marque: {idMarque :2, nomMarque : "kif",descriptionMarque : "biscuit"}},
    {idBiscuit : 3, nomBiscuit : "gaufrette", prixBiscuit : 1500.000,gout:"chocolat", dateSortir : new Date("01/14/2011"),marque: {idMarque : 1, nomMarque : "Saida",descriptionMarque : "biscuit"}}
     ];
    }

    listeBiscuit(): Observable<Biscuit[]>{
      return this.http.get<Biscuit[]>(this.apiURL);
      }
  
      ajouterBiscuit( bisc: Biscuit):Observable<Biscuit>{
        return this.http.post<Biscuit>(this.apiURL, bisc, httpOptions);
        }
        supprimerBiscuit(id : number) {
          const url = `${this.apiURL}/${id}`;
          return this.http.delete(url, httpOptions);
          }
       
        consulterBiscuit(id: number): Observable<Biscuit> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Biscuit>(url);
          }
          updateBiscuit(bisc :Biscuit) : Observable<Biscuit>
            {
                return this.http.put<Biscuit>(this.apiURL, bisc, httpOptions);
            }

         
            listeMarque():Observable<MarqueWrapper>{
              return this.http.get<MarqueWrapper>(this.apiURLCat);
              }
              rechercherParMarque(idMarque: number):Observable< Biscuit[]> {
                const url = `${this.apiURL}/prodscat/${idMarque}`;
                return this.http.get<Biscuit[]>(url);
                }
                rechercherParNom(nom: string):Observable< Biscuit[]> {
                  const url = `${this.apiURL}/prodsByName/${nom}`;
                  return this.http.get<Biscuit[]>(url);
                  } 
        
}