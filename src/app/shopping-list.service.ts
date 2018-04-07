import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingListService {

  private listItems: Array<any>;

  constructor(private httpClient: HttpClient) {
    this.listItems = [{
      name: 'Bread',
      disabled: false
    },{
      name: 'Butter',
      disabled: false
    },{
      name: 'Coffee',
      disabled: false
    },{
      name: 'Cookies',
      disabled: true
    },]
  }

  public findAll(): Observable<Object>{
    return this.httpClient.get(`${environment.firebase.databaseURL}/items.json`);
  }

  public add(item){
    this.httpClient.post(`${environment.firebase.databaseURL}/items.json`, item).subscribe(
      response => { console.log('Deu certo!')},
      error => { console.log('Deu certo!')} 
    );  
  }

  public remove(item){
    // Verify if item exists
    let index = this.listItems.indexOf(item);
    this.listItems.splice(index, 1);
  }

  public cross(item){
    // verify if tem exists
    let index = this.listItems.indexOf(item);
    this.listItems[index].disabled = true;
  }

}
