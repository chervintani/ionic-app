import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin':'*',
  })
};
@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private _http: HttpClient) {}
  url =""

  getData(): Observable<any>{
    return this._http.get('https://swapi.co/api/films', httpOptions)
  }
}
