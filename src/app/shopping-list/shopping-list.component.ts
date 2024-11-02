import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  newItem: string = ''; // Propriedade para armazenar o novo item
  currentIndex: number | null = null; // Armazena o índice do item a ser editado

  // Método para adicionar ou editar o item
  addItem() {
    if (this.newItem.trim()) {
      if (this.currentIndex !== null) {
        // Edita o item existente
        this.items[this.currentIndex].name = this.newItem;
        this.currentIndex = null; // Reseta o índice após editar
      } else {
        // Adiciona um novo item
        this.items.push({ name: this.newItem, purchased: false });
      }
      this.newItem = ''; // Limpa o campo após adicionar
    }
  }

  markAsPurchased(index: number) {
    this.items[index].purchased = true;
  }

  editItem(index: number) {
    this.currentIndex = index; // Armazena o índice do item a ser editado
    this.newItem = this.items[index].name; // Preenche o campo de entrada com o nome do item
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
