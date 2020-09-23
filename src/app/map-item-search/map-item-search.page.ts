import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { BLE } from '@ionic-native/ble/ngx';

@Component({
  selector: 'app-map-item-search',
  templateUrl: './map-item-search.page.html',
  styleUrls: ['./map-item-search.page.scss'],
})
export class MapItemSearchPage implements OnInit {
  item: string = "";
  result: Boolean = false;
  itemNum: Number = 0;
  area: string = "番Beaconの近くです.";
  mapNum: Number[] = [...new Array(16).keys()];

  // 描画情報
  mapAtt: Number[] = new Array(256);
  mapCla: string[] = new Array(256);
  beaNum: string[] = new Array(256);
  posObj: any = {};
  getObj: any = {};
  adData: any;

  // BLE
  bleContents: string = "";

  constructor(
    public gs: GlobalService,
    private ble: BLE
  ) { }

  ngOnInit() {
    this.posObj['id'] = 'myhome';

    const body = this.posObj;
    console.log(body);
    this.gs.http('https://kn46itblog.com/hackathon/SumHackV220200916/php_apis/getMap.php', body).subscribe(
      res => {
        console.log('success: ' + JSON.stringify(res));
        this.getObj = res;
        console.log(this.getObj);
        for(let i = 0; i < 256; i++){
          this.mapAtt[i] = this.getObj['map_list'][i];
          this.beaNum[i] = ' ';
          if(this.mapAtt[i] == 0){
            this.mapCla[i] = 'white';
          }
          else if(this.mapAtt[i] == -1){
            this.mapCla[i] = 'black';
          }
          else{
            this.mapCla[i] = 'red';
            this.beaNum[i] = String(this.getObj['map_list'][i]);
          }
        }
        console.log(this.mapAtt);
      },
      error => {
        console.log('error: ' + JSON.stringify(error));
      }
    );
  }
  onWhere = () => {
    for(let i = 0; i < 256; i++){
      if(this.mapCla[i] == 'red'){
        this.mapCla[i] = 'green';
      }
      else if(this.mapCla[i] == 'green'){
        this.mapCla[i] = 'red';
      }
    }
  }

  onBLE = () => {
    this.ble.scan([], 1).subscribe(
      device => {
        if(device.name == "AirPods Pro"){
          this.bleContents = ""
          this.bleContents = device.rssi;
        }
      }
    );
  }

}
