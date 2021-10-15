import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ComponenteI } from 'src/app/interfaces/inteface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  components: Observable<ComponenteI[]>;

  constructor(private menuCtrl: MenuController, private dataSvc: DataService) {}

  ngOnInit() {
    this.components = this.dataSvc.getMenuOpts();
  }

  showMenu() {
    this.menuCtrl.open('first');
  }
}
