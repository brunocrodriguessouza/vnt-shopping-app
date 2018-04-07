import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private listItems: Array<any>;

  private itemToAdd: string = '';

  constructor(private myShoppingListService: ShoppingListService) {
    this.listItems = this.myShoppingListService.findAll();
  }

  ngOnInit() {
  }

  private addObjectToList(){
    //criar
    let newItem = {
      name: this.itemToAdd,
      disabled: false
    };
    //Adicionar
    this.myShoppingListService.add(newItem);
    this.itemToAdd = '';
  }

}
