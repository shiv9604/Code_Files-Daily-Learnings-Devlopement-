import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild, ɵɵsetComponentScope } from '@angular/core';
import { Urls } from 'src/app/models/urls';
import { ApiService } from 'src/app/services/api/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-typecode-todos',
  templateUrl: './typecode-todos.component.html',
  styleUrls: ['./typecode-todos.component.css'],
})
export class TypecodeTodosComponent implements OnInit {
  todos: any;

  dataSource: any;

  displayedColumns: string[] = ['id', 'postId', 'name', 'email', 'body'];

  searchVal:any = ''

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(public api: ApiService,public loader:LoaderService) {
    this.getTodoList();
  }

  ngOnInit(): void {
  }

  getTodoList() {
    this.loader.showLoader()
    let url = Urls.allComments;
    console.log("Get All Todo's URL=>", url);
    this.api.get(url).subscribe((res) => {
      this.todos = res;
      this.dataSource = new MatTableDataSource(this.todos);
      console.log('Tasks Fetched From typecode =>', this.todos);
      this.assignPaginator();
      this.assignSorter();
      this.loader.stopLoader()
    },e=>{
      console.log("Err Occured while fetching typecode todos",e)
      this.loader.stopLoader()
    });
  }

  assignPaginator() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    }, 1);
  }

  assignSorter(){
    this.dataSource.sort = this.sort
  }
}
