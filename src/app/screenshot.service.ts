import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { IScreenshotService } from "app/iscreenshot-service";


@Injectable()
export class ScreenshotService extends IScreenshotService{
    dataUrl : string = 'assets/data.json';
    //value : Array<any>;
    constructor(private http:Http){
        super();
    }
    
    public getScreenshots () {
        return this.http.get(this.dataUrl)
            .map(response => response.json());
    }
}