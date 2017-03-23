import { Component, OnInit } from '@angular/core';
import { IScreenshotService } from "app/iscreenshot-service";

import { Http } from "@angular/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  maxStuff:number;
  spaceScreens: Array<any>;

    constructor(private screenshotService : IScreenshotService) {
      
    };

    ngOnInit(): void {
      this.screenshotService.getScreenshots()
        .subscribe(resp => this.spaceScreens = resp.screenshots);
    };

    likeMe(i){
      this.spaceScreens[i].liked = !this.spaceScreens[i].liked;
      console.log(this.spaceScreens[i].liked);
      /*if(this.spaceScreens[i].liked == 0)  
        this.spaceScreens[i].liked = 1;
      else 
        this.spaceScreens[i].liked = 0;*/
    }
    deleteMe(i){
      this.spaceScreens.splice(i,1);
      console.log(i);
    }

}
