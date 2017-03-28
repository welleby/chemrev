import { Observable } from "rxjs/Observable";
import { Equipment } from "app/dto/equipment";

export abstract class IEquipmentService {
  abstract getAllEquipment():Observable<Equipment[]>;
}