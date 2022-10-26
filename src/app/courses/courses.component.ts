/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 18/10/2022 - 16:59:31
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/10/2022
    * - Author          : 
    * - Modification    : 
**/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 101, name: 'Angular for beginners', author: 'Eben Dami', duration: 48, type: 'Free',
      price: 0.00, ratings: 3.5, image: 'assets/Angular.png', description: 'In this course you will learn purely the fundamentals of Javascript. This course is purely....'
    },
    {
      id: 102, name: 'Javascript for beginners', author: 'Eben Dami', duration: 48, type: 'Premium',
      price: 0.00, ratings: 3.5, image: 'assets/what-is-javascript.jpeg', description: 'In this course you will learn purely the fundamentals of Javascript'
    },
    {
      id: 103, name: 'Angular for beginners', author: 'Eben Dami', duration: 48, type: 'Premium',
      price: 0.00, ratings: 3.5, image: 'assets/Angular.png', description: 'In this course you will learn purely the fundamentals of Javascript'
    },
    {
      id: 104, name: 'Angular for beginners', author: 'Eben Dami', duration: 48, type: 'Free',
      price: 0.00, ratings: 3.5, image: 'assets/Angular.png', description: 'In this course you will learn purely the fundamentals of Javascript'
    },
    {
      id: 105, name: 'Javascriipt for the boss', author: 'Eben Dami', duration: 48, type: 'Premium',
      price: 0.00, ratings: 3.5, image: 'assets/image3.webp', description: 'In this course you will learn purely the fundamentals of Javascript'
    },
    {
      id: 106, name: 'Angular for beginners', author: 'Eben Dami', duration: 48, type: 'Premium',
      price: 0.00, ratings: 3.5, image: 'assets/Angular.png', description: 'In this course you will learn purely the fundamentals of Javascript'
    },
    {
      id: 107, name: 'Angular for beginners', author: 'Eben Dami', duration: 48, type: 'Premium',
      price: 0.00, ratings: 3.5, image: 'assets/Angular.png', description: 'In this course you will learn purely the fundamentals of Javascript'
    },
    {
      id: 108, name: 'Angular and Javascript for beginners', author: 'Eben Dami', duration: 48, type: 'Free',
      price: 0.00, ratings: 3.5, image: 'assets/Angular.png', description: 'In this course you will learn purely the fundamentals of Javascript'
    },
    {
      id: 109, name: 'Javascript for average', author: 'Eben Dami', duration: 48, type: 'Premium',
      price: 0.00, ratings: 3.5,image: 'assets/what-is-javascript.jpeg', description: 'In this course you will learn purely the fundamentals of Javascript'
    },
    
  ]
  getTotalCourses(){
    return this.courses.length;
  }
   getTotalFreeCourses(){
    return this.courses.filter(course => course.type === 'Free').length;
   }
   getTotalPremiumCourses(){
    return this.courses.filter(course => course.type === 'Premium').length;
   }

   courseCountRadioButton: string = 'All';
   searchText: string = '';

   onFilterRadioButtonChanged(data: string){
     this.courseCountRadioButton = data; 
    //  console.log(this.courseCountRadioButton)
   }

   onSearchTextEntered(searchValue: string){
       this.searchText = searchValue;
          console.log(this.searchText )
   }
  constructor() { }

  ngOnInit(): void {
  }
}
