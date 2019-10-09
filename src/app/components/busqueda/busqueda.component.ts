import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroes:Heroe[]=[]
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
    private _heroeService:HeroesService) { 
     
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
        this.heroes = this._heroeService.buscarHeroes(params['termino']);
        this.termino = params['termino'];
        console.log(this.heroes.length)
    });
    
  }
}
