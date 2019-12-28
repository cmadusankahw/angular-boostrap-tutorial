import { Component, OnInit } from '@angular/core';
export interface Student{
  id: string;
  name: string;
  school: string;
  class_no: number;
}

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  // hardcoded date for student interface
  students: Student[] = [
    {id: '1', name: 'Chiran', school: 'Rahula College', class_no: 72552 },
    {id: '2', name: 'Gayan', school: 'Rahula College', class_no: 12334 },
    {id: '3', name: 'Samitha', school: 'Rahula College', class_no: 15443 }
  ];

  constructor() { }

  ngOnInit() {
  }

  deleteData() {
    this.students.pop();
    alert('Data Row Successfully Deleted!');
  }
}
