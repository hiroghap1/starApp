import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoonPage } from '../moon/moon';

/**
 * Generated class for the AsListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-as-list',
  templateUrl: 'as-list.html',
})
export class AsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsListPage');
  }
  
  click_moon() {
    this.navCtrl.push(MoonPage);
  }
  
}
