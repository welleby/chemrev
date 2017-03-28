import { Injectable } from '@angular/core';
import { Http, Headers,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Area } from "app/dto/area";

@Injectable()
export class AreaService {

  dataUrl:string = 'http://127.0.0.1:8080';

  constructor(private http:Http) { }

  getAllAreas():Observable<Area[]>{
    //let equipments = this.http.get(this.dataUrl)
    let equipments = this.http.get(`${this.dataUrl}/allAreas`, {headers: this.getHeaders()})
    .map(mapAreas);
    return equipments;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    //headers.append('Connection', 'close');
    return headers;
  }


}

function mapAreas(response:Response): Area[]{
    console.log(response.json());
    return response.json() as Area[];
    //return response.json().map(toEquipment);
}

