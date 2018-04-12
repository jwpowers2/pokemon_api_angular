import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getTasks();
  }

  getTasks(){

    let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    
    tempObservable.subscribe(data => {

      let pokemonList = [];
      let pokemonAbilityUrls = [];
      
      for(let i of data.abilities){

        let ability_list = this._http.get(i.ability.url);

        ability_list.subscribe(data => {
          
            for (let y of data.pokemon){

              pokemonList.push(y.pokemon.name);

            }
        })

      }
      
      console.log("Got our pokemon!", pokemonList));

    })
}


