import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Base64} from "js-base64";
import {ApiService} from "../../providers/api.service";
import {HomePage} from "../home/home";
/*
 Generated class for the Welcome page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 首次登陆，输入API key
 */
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {

    apiKey: string = '';

    constructor(public navCtrl: NavController, public navParams: NavParams,
                private apiService: ApiService) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad WelcomePage');
    }

    saveKey() {
        console.log(this.apiKey);
        localStorage.setItem('Authorization', Base64.encode(this.apiKey));
        this.apiService.createAuthorizationHeader();
        this.navCtrl.setRoot(HomePage);
    }

}