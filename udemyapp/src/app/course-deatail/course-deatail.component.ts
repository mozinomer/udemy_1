import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-deatail',
  templateUrl: './course-deatail.component.html',
  styleUrls: ['./course-deatail.component.scss']
})
export class CourseDeatailComponent implements OnInit {

    coursesDetail: coursesdetail[] = []

  constructor() { }

  ngOnInit() {
  }

}
