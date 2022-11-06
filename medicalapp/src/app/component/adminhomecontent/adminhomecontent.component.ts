import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminhomecontent',
  templateUrl: './adminhomecontent.component.html',
  styleUrls: ['./adminhomecontent.component.css']
})
export class AdminhomecontentComponent implements OnInit {
searchtext:any;
  constructor() { }

  ngOnInit(): void {
  }
public status=true;
}
