import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { Runners} from './runner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'runner-go';
  runs: Runners[] = [];

  constructor(private api: ConfigService) {}

  ngOnInit() {
    this.get();
  }
  get() {
    this.api.getRunners()
      .subscribe(data => {
        console.log('AMINEE ' + data);


        for (const d of data) {
          this.runs.push(d);
        
        }
          console.log(this.runs.toString());
    });
  }
}
