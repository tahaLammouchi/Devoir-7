import { Injectable } from '@angular/core';
import { Produit } from '../model/produits.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL: string = 'http://localhost:8090/produits/api';
  produits! : Produit[];
  //produit! :Produit;

  constructor(private http :HttpClient) {
    /*
    this.produits = [
      {idProduit : 1, nomProduit : "PC Asus123", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
      {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
      {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
      ];
      */

   }
   /*
   listeProduits():Produit[]{
    return this.produits;
   }
   */

    listeProduit(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiURL);
    }


    ajouterProduit( prod: Produit):Observable<Produit>{
      return this.http.post<Produit>(this.apiURL, prod, httpOptions);
      }

    supprimerProduit(id:number){
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
      }

      consulterProdui(id: number): Observable<Produit> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Produit>(url);
        }
        updateProduit(p:Produit)
        {
          return this.http.put<Produit>(this.apiURL, p, httpOptions); 
        }

 
}
