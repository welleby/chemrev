import { Component, OnInit } from '@angular/core';
import { Equipment } from "app/dto/equipment";
import { Area } from "app/dto/area";

import { IEquipmentService } from "app/services/equipment/iequipment.service";
import { AreaService } from "app/services/area/area.service";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipments:Equipment[] = [];
  areas:Area[] = [];


  constructor(private equipmentService: IEquipmentService, private areaService: AreaService) { }

  ngOnInit() {
    this.equipmentService.getAllEquipment()
        .subscribe(resp => this.equipments = resp);
    this.areaService.getAllAreas()
        .subscribe(resp => this.areas = resp);
  }

}
