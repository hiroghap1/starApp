import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the MoonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moon',
  templateUrl: 'moon.html',
})
export class MoonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MoonPage');
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      //resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting lovation', error);
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      //data can be ast of coordinates, or an error (if an error occurred).
      document.getElementById("latitude").innerHTML = data.coords.latitude.toFixed(14);
      document.getElementById("longitude").innerHTML = data.coords.longitude.toFixed(14);
      document.getElementById("accuracy").innerHTML = data.coords.longitude.toFixed(2);
      document.getElementById("altitude").innerHTML = data.coords.longitude.toFixed(2);
      document.getElementById("altiAccuracy").innerHTML = data.coords.longitude.toFixed(2);
      document.getElementById("heading").innerHTML = data.coords.longitude.toFixed(1);
    });
  }
  
  getLocation(){
  }
}
