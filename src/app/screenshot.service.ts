import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class ScreenshotService {
    dataUrl : string = 'assets/data.json';
    //value : Array<any>;
    constructor(private http:Http){}
    
    public getScreenshots () {
        return this.http.get(this.dataUrl)
            .map(response => response.json());
    }
}