import { Component, OnInit } from '@angular/core';
import { courses } from './courses.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  coursesArray: courses[] = [];

  constructor() {
    this.coursesArray.push(
      new courses("Machine Learning A-Z™: Hands-On Python & R In Data Science","Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team","https://www.outsourcedesigning.com/assetsn/images/1.jpg",920,820, true,"$"),
      new courses("Machine Learning A-Z™: Hands-On Python & R In Data Science","Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team","https://www.outsourcedesigning.com/assetsn/images/1.jpg",920,820, true,"$"),
      new courses("Machine Learning A-Z™: Hands-On Python & R In Data Science","Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team","https://www.outsourcedesigning.com/assetsn/images/1.jpg",920,820, true,"$"),
      new courses("Machine Learning A-Z™: Hands-On Python & R In Data Science","Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team","https://www.outsourcedesigning.com/assetsn/images/1.jpg",920,820, true,"$"),
      new courses("Machine Learning A-Z™: Hands-On Python & R In Data Science","Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team","https://www.outsourcedesigning.com/assetsn/images/1.jpg",920,820, true,"$"),
    )
  }

  ngOnInit() {

  }

}
