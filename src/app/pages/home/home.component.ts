import { Component } from '@angular/core';

// object to map the height col:height
const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // var that will update inside the layout, set defalut to 3
  cols = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  // method doesnt return anything so its void
  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    // need to update row qhen col is updated
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }


}
