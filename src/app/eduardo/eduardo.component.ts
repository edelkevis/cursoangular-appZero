import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EduardoDataSource } from './eduardo-datasource';

@Component({
  selector: 'app-eduardo',
  templateUrl: './eduardo.component.html',
  styleUrls: ['./eduardo.component.css']
})
export class EduardoComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: EduardoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new EduardoDataSource(this.paginator, this.sort);
  }
}
