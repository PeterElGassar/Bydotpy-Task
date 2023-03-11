import { Product } from '../../../@core/data/Product';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';

  @Input() cartProducts: Product[];
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initalCart();
  }
  onSearchProduct() {
    this.onSearch.emit(this.searchTerm);
  }

  initalCart() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
  }
  navigate() {
    this.router.navigateByUrl('/auth/login');
  }
}
