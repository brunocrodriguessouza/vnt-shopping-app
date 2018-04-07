import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input("item") private listItem: any;
  public deleted: boolean = false;

  constructor(private myShoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  public removeItem(){
    this.myShoppingListService.remove(this.listItem).subscribe(
      res => {
        console.log('Removed with success');
        this.deleted = true;
      },
      error => { console.log('Error')}
    );
  }

  public crossItem(){

    let itemEdited = {
      key: this.listItem.key,
      name: this.listItem.name,
      disabled: true
    };
   
    this.myShoppingListService.edit(this.listItem).subscribe(
      res => {
        console.log("Edited");
        this.listItem.disabled = true;
      },
      error => { console.log('Error')}
    )
  }

}
