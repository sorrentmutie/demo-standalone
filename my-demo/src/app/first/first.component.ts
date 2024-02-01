import { Component } from '@angular/core';
import { SecondComponent } from '../second/second.component';
import { MyService } from '../my.service';
import { MyPipe } from '../my.pipe';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [SecondComponent, MyPipe],
  template: `
    <p>
      first works! {{title | my}}
    </p>
    <app-second></app-second>
  `,
  styles: ``
})
export class FirstComponent {
    title = 'my-demo';
    constructor(private myService: MyService){

    }
}
