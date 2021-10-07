import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

// istanziazione eseguita in automatico con tag <app-studenti>
export class StudentComponent implements OnInit {

  studentList = [
    { "name": "Ettore Esposito", "hobby": "Karate", "gender": "M" },
    { "name": "Luca Pelissero", "hobby": "Paddle", "gender": "M" },
    { "name": "Bianca Teleman", "hobby": "Volley", "gender": "F" },
    { "name": "Paolo Giordano", "hobby": "Volley", "gender": "M" },
    { "name": "Giada Valinotto", "hobby": "Paddle", "gender": "F" },
    { "name": "Marta Baudracco", "hobby": "Volley", "gender": "F" },
    { "name": "Michele Ghisolfi", "hobby": "Paddle", "gender": "M" },
    { "name": "Martina Velardi", "hobby": "Karate", "gender": "F" },
    { "name": "Ivan Angjelovski", "hobby": "Paddle", "gender": "M" },
    { "name": "Gabriele Leone", "hobby": "Volley", "gender": "M" }
  ]

  student:any;

  constructor() {
    this.randomStudent();
  }

  private randomStudent() {
    let num = Math.floor(Math.random() * this.studentList.length);
    this.student = this.studentList[num];
  }

  ngOnInit(): void {
  }

  onStudentClick() {
    this.randomStudent();
  }
}
