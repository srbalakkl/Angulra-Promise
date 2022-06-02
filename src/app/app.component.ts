import {Component, OnInit} from '@angular/core';
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angulra-Promise';
//  https://dev.to/techiediaries/angular-10-promise-by-example-bne#:~:text=Promises%20can%20be%20executed%20by,invoked%20when%20an%20error%20occurs.

  promise : any;
  ngOnInit() {
    let x = new Promise((resolve, reject)=>{
      console.log('promise is called \n');
      setTimeout(()=>resolve('testin'),3000 )
    });

    x.then(x=>console.log('promise object 1'))
      .then(x=>console.log('promise object 2'))
      .catch(x=>console.log('catch'))
      .then(x=>console.log('this will return undefined becz catch has stopped sending objct'))
    .finally(()=>console.log('finally'))
  }


}
