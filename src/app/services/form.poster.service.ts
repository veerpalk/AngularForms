import { Injectable } from "@angular/core";
import{Http,Response,Headers,RequestOptions} from '@angular/http';
import { Employee } from "../models/emloyee.model";
import { IfObservable } from "rxjs/observable/IfObservable";
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
@Injectable()
    export class FormPoster{
        constructor(private http:Http){

        }
        private extractData(res:Response){
            let body=res.json();
            return body.fields || {};
        }
        private handleError(error:any){
            console.error('post error: ',error);
            return Observable.throw(error.statusText); 
        }
        postEmployeeForm(employee:Employee):Observable<any>{
                 let body=JSON.stringify(employee);
          let headers=new Headers({'Content-Type':'application/json'});
          let options=new RequestOptions({headers:headers});

    return this.http.post('http://localhost:3100/postemployee',body,options)
    .map(this.extractData)
    .catch(this.handleError);
           
        }
    }