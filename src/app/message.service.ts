import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  constructor(public http: HttpClient) {}

  theurl = "https://covidtracking.com/api/states";
  thecountryurl = "https://pomber.github.io/covid19/timeseries.json";

  getStateCount() {
    return this.http.get(this.theurl);
  }
  getCountryCount() {
    return this.http.get(this.thecountryurl);
  }
}
