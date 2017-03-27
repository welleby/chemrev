import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Equipment } from "app/equipment/equipment";

@Injectable()
export class EquipmentService {
  dataUrl:string = 'assets/eq.json';

  constructor(private http:Http) { }

  getAllEquipment():Observable<Equipment[]>{
    let equipments = this.http.get(this.dataUrl)
    .map(mapEquipments);
    return equipments;
  }


}

function mapEquipments(response:Response): Equipment[]{
    return response.json().equipments.map(toEquipment);
}

function toEquipment(r:any): Equipment{
  let equipment = <Equipment>({
    id: r.id,
    area: r.area,
    vin: r.vin,
    name: r.name
  });
  console.log('Parsed equipment:', equipment);
  return equipment;
}


function mapEquipment(response:Response): Equipment{
  // toPerson looks just like in the previous example
  return toEquipment(response.json());
}