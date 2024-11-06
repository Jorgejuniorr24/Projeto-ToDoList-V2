import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class ShoppingListComponent {
  items = [
    { name: 'Maçã', purchased: false },
    { name: 'Leite', purchased: true },
  ];

  newItem: string = '';
  currentIndex: number | null = null;
  errorMessage: string = '';

  addItem() {
    if (this.newItem.trim()) {
      try {
        if (this.currentIndex !== null) {
          this.items[this.currentIndex].name = this.newItem;
          this.currentIndex = null;
        } else {
          this.items.push({ name: this.newItem, purchased: false });
        }
        this.newItem = '';
      } catch (error) {
        this.errorMessage = 'Erro ao adicionar item. Tente novamente.';
      }
    }
  }

  markAsPurchased(index: number) {
    this.items[index].purchased = true;
  }

  editItem(index: number) {
    this.currentIndex = index;
    this.newItem = this.items[index].name;
  }

  deleteItem(index: number) {
    try {
      this.items.splice(index, 1);
    } catch (error) {
      this.errorMessage = 'Erro ao deletar item. Tente novamente.';
    }
  }
}
