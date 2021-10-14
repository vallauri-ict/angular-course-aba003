import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

// istanziazione eseguita in automatico con tag <app-studenti>
export class StudentComponent implements OnInit {
@Input() student:any;
  constructor() {
    
  }

  private randomStudentPro() {
    let num = Math.floor(Math.random() * 2);
    if(num==1){
      this.student.isPro=true;
    }
    /*this.student = this.studentList[num];*/
  }

  ngOnInit(): void {
    this.randomStudentPro(); //va meso qui non nel costruttore perchè l html nel costruttore non cè ancora
  }

  onStudentClick() {
    this.student.isPro=!this.student.isPro;
  }
}
