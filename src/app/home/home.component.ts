import {Component} from '@angular/core';
import { Employee } from '../models/emloyee.model';
import { FormPoster } from '../services/form.poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages=['English','Spanish','Other'];
  model=new Employee('Sumit','Williams',false,'','default');
  hasPrimaryLanguageError=false;

constructor(private formPoster:FormPoster){

}

submitForm(form:NgForm){
  this.validatePrimaryLanguage(this.model.primaryLanguage);
  if(this.hasPrimaryLanguageError)
  return;
this.formPoster.postEmployeeForm(this.model)
.subscribe(
  data=>console.log('success: ',data),
  err=>console.log('error',err)
);
}

  validatePrimaryLanguage(value){
    if(value==='default')
this.hasPrimaryLanguageError=true;
else
this.hasPrimaryLanguageError=false;
  }

}
