import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map-item-regist',
  templateUrl: './map-item-regist.page.html',
  styleUrls: ['./map-item-regist.page.scss'],
})
export class MapItemRegistPage implements OnInit {
  mapNum: Number[] = [...new Array(16).keys()];
  mapAtt: Number[] = new Array(256);
  mapCla: string[] = new Array(256);
  beaNum: string[] = new Array(256);
  map: Boolean = false;
  del: Boolean = false;
  bea: Boolean = false;
  beacon: Number;
  id1: any = 0;
  id2: any = 0;
  id: any = 0;
  item: string = "";
  beaconPos: Number;
  posObj: any = {};

  constructor(
    public gs: GlobalService
  ) { }

  ngOnInit() {
    for(let i = 0; i < 256; i++){
      this.mapAtt[i] = 0;
      this.mapCla[i] = 'white';
      this.beaNum[i] = ' ';
    }
    // console.log(this.mapCla);
  }

  onMap = () => {
    this.map = true;
    this.del = false;
    this.bea = false;
  }
  onDel = () => {
    this.map = false;
    this.del = true;
    this.bea = false;
  }
  onBea = () => {
    this.map = false;
    this.del = false;
    this.bea = true;
  }
  onClick = (e: any) => {
    if(this.map == true){
      // mapAttの書き換え
      // idの取得から
      this.id1 = Number(e.target.id.split(":")[1]);
      this.id2 = Number(e.target.id.split(":")[2]);
      this.id = (this.id1 * 16) + this.id2;
      // console.log(this.id);
      this.mapAtt[String(this.id)] = -1;
      this.beaNum[String(this.id)] = ' ';
      // console.log(this.mapAtt);
      // classの書き換え
      this.mapCla[String(this.id)] = 'black';
    }
    else if(this.del == true){
      // mapAttの書き換え
      // idの取得から
      this.id1 = Number(e.target.id.split(":")[1]);
      this.id2 = Number(e.target.id.split(":")[2]);
      this.id = (this.id1 * 16) + this.id2;
      this.mapAtt[String(this.id)] = 0;
      this.beaNum[String(this.id)] = ' ';
      // classの書き換え
      this.mapCla[String(this.id)] = 'white';
    }
    else if(this.bea == true){
      if(10 > this.beacon && this.beacon > 0){
        // mapAttの書き換え
        // idの取得から
        this.id1 = Number(e.target.id.split(":")[1]);
        this.id2 = Number(e.target.id.split(":")[2]);
        this.id = (this.id1 * 16) + this.id2;
        // console.log(this.id);
        this.mapAtt[String(this.id)] = Number(this.beacon);
        this.beaNum[String(this.id)] = String(this.beacon);
        // console.log(this.mapAtt);
        // classの書き換え
        this.mapCla[String(this.id)] = 'red';
      }
    }
  }

  registMap = () => {
    // マップ情報のオブジェクト化
    for(let i = 0; i < 256; i++){
      // console.log(i);
      let n = String(i);
      this.posObj[n] = this.mapAtt[i];
    }
    this.posObj['id'] = 'myhome';

    // POST
    const body = this.posObj;
    console.log(body);
    this.gs.http('https://kn46itblog.com/hackathon/SumHackV220200916/php_apis/registMap.php', body).subscribe(
      res => {
        console.log('success: ' + JSON.stringify(res));
      },
      error => {
        console.log('error: ' + JSON.stringify(error));
      }
    );
  }


}
