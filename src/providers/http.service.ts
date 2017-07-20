import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class HttpService {
    constructor(
        public http: Http
    ) { }

    get(url) {
        return this.http
            .get(url)
            .map(res => {
                console.log(res.json())
                return res.json()
            })
    }

    post(url, params) {
        return this.http
            .post(url, params)
            .map(res => {
                console.log(res.json())
                return res.json()
            })
    }

    put(url, params) {
        return this.http
            .put(url, params)
            .map(res => {
                console.log(res.json())
                return res.json()
            })
    }

    delete(url, params) {
        return this.http
            .delete(url)
            .map(res => {
                console.log(res.json())
                return res.json()
            })
    }
}