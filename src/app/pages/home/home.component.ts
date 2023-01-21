import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // var that will update inside the layout, set defalut to 3
  cols = 3;

  // method doesnt return anything so its void
  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
  }

}
