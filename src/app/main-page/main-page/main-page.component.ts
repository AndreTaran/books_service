import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  data: any;

  constructor() {

  }

  displayedColumns!: string[];
  dataSource: any;

  ngOnInit() {
    // this.http.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
    //   .subscribe(res => {
    //     if (res) {
    //       // this.data = res;
    //       console.log(res);
    //       // this.dataSource = new MatTableDataSource([res]);
    //       this.dataSource = res;
    //       console.log(this.dataSource);
          
          
    //     }
    //   })
    
    // this.displayedColumns = ['title', 'description', 'pageCount', 'publishDate'];
    // console.log(this.dataSource, '---');
    // setTimeout(() => {
    //   this.dataSource = new MatTableDataSource<any>(this.data);
    // }, 0)
    

  }


}

// import { DataSource } from '@angular/cdk/collections';



