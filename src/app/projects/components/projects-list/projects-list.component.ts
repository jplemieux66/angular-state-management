import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects = [
    { name: "test 1" },
    { name: "test 2" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
