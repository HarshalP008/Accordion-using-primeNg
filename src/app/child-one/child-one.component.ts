import { Component, OnInit,Input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
@Input() accSections:any;
accList:any[]=[];
  constructor() { }
  
  ngOnInit(): void {
    this.accList= this.accSections;
    }
}