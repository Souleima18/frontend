import { Marque } from "./marque.model";
export class Biscuit {
    idBiscuit? : number;
    nomBiscuit? : string;
    prixBiscuit? : number;
    gout? : string;
     dateSortir? : Date;
     marque! : Marque;

}