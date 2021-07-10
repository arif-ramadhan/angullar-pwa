import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jokes';

  update: boolean = false
  public joke: any

  constructor(updates: SwUpdate, private data: DataService) {
    updates.available.subscribe(() => {
      this.update=true
    })
  }

  ngOnInit() {
    this.data.gimmeJokes().subscribe(res => {
      this.joke = res
    })
  }
}
