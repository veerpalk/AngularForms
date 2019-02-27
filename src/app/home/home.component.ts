import {Component} from '@angular/core';
import { Employee } from '../models/emloyee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages=['English','Spanish','Other'];
  model=new Employee('Darla','Smith',true,'w2','English');


}
