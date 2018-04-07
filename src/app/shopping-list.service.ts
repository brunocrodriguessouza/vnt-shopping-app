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

  public add(item): Observable<Object>{
    return this.httpClient.post(`${environment.firebase.databaseURL}/items.json`, item);
  }

  public remove(item){
    // Verify if item exists
    return this.httpClient.delete(`${environment.firebase.databaseURL}/items/${item.key}.json`);
  }

  public edit(item){
    // verify if tem exists
    let key = item.key;
    delete item.key;
    return this.httpClient.patch(`${environment.firebase.databaseURL}/items/${key}.json`, item);
  }

}
