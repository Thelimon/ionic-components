import { Component, OnInit } from '@angular/core';

interface ComponenteI {
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  components: ComponenteI[] = [
    {
      icon: 'accessibility-outline',
      name: 'action-sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'logo-apple-appstore',
      name: 'action-sheet',
      redirectTo: '/action-sheet',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
