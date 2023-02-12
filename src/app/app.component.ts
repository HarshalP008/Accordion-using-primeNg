import { Component ,OnInit} from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-3';
  form: FormGroup| any;
  topicList:any;
  ngOnInit(){}
  constructor(private fb: FormBuilder){
    this.topicList=[{
      headerName: 'Section1',
      sectionDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, in.'
    },
    {
      headerName: 'Section2',
      sectionDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, in.'
    }
  ];
  this.form= this.fb.group({
    headerName: ['',Validators.required],
    sectionDetails:['',[Validators.required, Validators.maxLength(20)]]
  })
    
  }

  onSubmit() {
    console.log(this.form.value)
    console.log(this.topicList)
    if(this.form.valid){
      this.topicList.push({...this.form.value});
    }
    
  }
}