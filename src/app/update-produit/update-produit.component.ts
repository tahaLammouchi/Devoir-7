import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produits.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();
  constructor(private activatedRoute:ActivatedRoute,
              private produitService:ProduitService,
              private router :Router) { }

  ngOnInit(): void {
    this.produitService.consulterProdui(this.activatedRoute.snapshot.params['id']).
      subscribe( prod =>{ this.currentProduit = prod; } ) ;
  }

  updateProduit() {
    this.produitService.updateProduit(this.currentProduit).subscribe(() => {
    this.router.navigate(['produits']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}
