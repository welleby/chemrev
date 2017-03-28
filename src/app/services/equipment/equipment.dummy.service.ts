import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Equipment } from "app/dto/equipment";
import { IEquipmentService } from "app/services/equipment/iequipment.service";

@Injectable()
export class EquipmentDummyService extends IEquipmentService {
  dataUrl:string = 'assets/eq.json';

  constructor(private http:Http) {
    super();
   }

  getAllEquipment():Observable<Equipment[]>{
    let equipments = this.http.get(this.dataUrl)
    .map(mapEquipments);
    return equipments;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    //headers.append('Connection', 'close');
    return headers;
  }


}

function mapEquipments(response:Response): Equipment[]{
    console.log(response.json());
    return response.json() as Equipment[];
    //return response.json().map(toEquipment);
}

function toEquipment(r:any): Equipment{
  let equipment = <Equipment>({
    _id: JSON.stringify(r._id),
    area: r.area,
    littra: r.littra,
    name: r.name
  });
  console.log('Parsed equipment:', equipment);
  return equipment;
}


function mapEquipment(response:Response): Equipment{
  // toPerson looks just like in the previous example
  return toEquipment(response.json());
}