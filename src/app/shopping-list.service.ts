import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {

  private listItems: Array<any>;

  constructor() {
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

  public findAll(){
    return this.listItems;
  }

  public add(item){
    this.listItems.unshift(item);
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
