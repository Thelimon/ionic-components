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
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo: '/buttons',
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/cards',
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checks',
      redirectTo: '/checks',
    },
    {
      icon: 'calendar-outline',
      name: 'Datetime',
      redirectTo: '/date-time',
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid',
    },
    {
      icon: 'infinite-outline',
      name: 'Scroll',
      redirectTo: '/scroll',
    },
    {
      icon: 'hammer-outline',
      name: 'Input',
      redirectTo: '/input',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
