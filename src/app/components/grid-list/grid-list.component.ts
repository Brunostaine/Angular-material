import { Component } from '@angular/core';

export interface Grid {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss'],
})
export class GridListComponent {
  grids: Grid[] = [
    { text: 'Sidebar', cols: 1, rows: 7, color: 'lightblue' },
    { text: 'Video Youtube', cols: 4, rows: 4, color: '#EE5F68' },
    { text: 'Lista de videos', cols: 1, rows: 7, color: 'lightpink' },
    // { text: 'Coluna 4', cols: 2, rows: 1, color: '#DDBDF1' },
    // { text: 'Coluna 5', cols: 2, rows: 2, color: '#EBCAA1' },
    // { text: 'Coluna 6', cols: 3, rows: 1, color: '#EDBBB1' },
  ];
}
