import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'; // Certifique-se de importar corretamente
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ShoppingListComponent,
  ],
})
export class AppComponent {
  itemForm: FormGroup;

  constructor() {
    this.itemForm = new FormGroup({
      itemName: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.itemForm.value);
  }
}
