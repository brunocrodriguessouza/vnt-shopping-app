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
    this.myShoppingListService.findAll().subscribe(
      response => {
        if (response){
          this.listItems = Object.keys(response).map(id => {
            let item: any = response[id];
            item.key = id;
            return item;
          })
        } else {
          this.listItems = []
        }
    },
      error => { console.error(error) }
    )
  };

  ngOnInit() {
  }

  private addObjectToList(){
    //criar
    let newItem = {
      name: this.itemToAdd,
      disabled: false
    };
    //Adicionar
    this.myShoppingListService.add(newItem).subscribe(
      response => { 
        newItem['key'] = response['name'];
        this.listItems.unshift(newItem)},

      error => { console.log('Deu certo!')} 
    );  
    this.itemToAdd = '';
  }

}
