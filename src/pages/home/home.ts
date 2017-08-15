import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AsListPage } from '../as-list/as-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  click_move() {
    this.navCtrl.push(AsListPage);
  }

}
