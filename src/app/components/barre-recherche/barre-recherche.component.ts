import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.css']
})
export class BarreRechercheComponent {

  @Output() search = new EventEmitter<string>();
  @Output() clear = new EventEmitter<void>();
  searchTerm: string = '';

  onSearch() {
    this.search.emit(this.searchTerm);
  }

  onClear() {
    this.searchTerm = '';
    this.clear.emit();
  }
}
