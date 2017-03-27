import { Component, OnInit } from '@angular/core';
import { Equipment } from "app/equipment/equipment";
import { EquipmentService } from "app/equipment/equipment.service";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipments:Equipment[] = [];

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.equipmentService.getAllEquipment()
        .subscribe(resp => this.equipments = resp);
  }

  

}
