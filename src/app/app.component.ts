import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponenteI } from './interfaces/inteface';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  components: Observable<ComponenteI[]>;

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.components = this.dataSvc.getMenuOpts();
  }
}
