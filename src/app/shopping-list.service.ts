import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ShoppingListService {

  private listItems: Array<any>;
  public listItemFirebase: Observable<any[]>;
  private listItemsRef: AngularFireList<any>;

  constructor(private httpClient: HttpClient, private db: AngularFireDatabase) {
    this.listItems = []
    this.listItemsRef = this.db.list('items');

    this.listItemFirebase = this.listItemsRef.snapshotChanges().map(
      changes => {
        return changes.map(c => {
            console.log(c.payload.val());
            return({
              key: c.payload.key,
              name: c.payload.val()['name'],
              disabled: c.payload.val()['disabled'],
            })
          })
        }
      );
  }

  public add(item){
    this.listItemsRef.push(item);
  }

  public remove(item){
    // Verify if item exists
    this.listItemsRef.remove(item.key);
  }

  public edit(item){
    // verify if tem exists
    let key = item.key;
    delete item.key;
    
    this.listItemsRef.update(key, item);
  }

}
