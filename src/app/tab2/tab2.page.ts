import { Component } from "@angular/core";
import { MessageService } from "../message.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  constructor(public service: MessageService) {}
  stats: any = [];
  selectedCountry;
  selectedDate;
  confirmed = 0;
  deaths = 0;
  recovered = 0;

  rawData;
  dataValues;
  dataKeys;
  dd;
  mm;
  yyyy;
  ngAfterViewInit() {
    this.service.getCountryCount().subscribe((result) => {
      this.stats = result;
      this.rawData = this.stats;
      this.dataValues = []; //For values
      this.dataKeys = []; //For keys

      for (let key in this.rawData) {
        this.dataValues.push(this.rawData[key]);
        this.dataKeys.push(key);

        //to fetch all the data upto yesterday's date
        var today = new Date();
        this.dd = String(today.getDate() - 1).padStart(2, "0");
        this.mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        this.yyyy = today.getFullYear();
      }
    });
  }
  onUpdateFunction() {
    for (let val of this.rawData[this.selectedCountry]) {
      if (val["date"] == this.selectedDate) {
        this.confirmed = val["confirmed"];
        this.deaths = val["deaths"];
        this.recovered = val["recovered"];
        console.log(
          val["date"] + this.confirmed + this.recovered + this.deaths
        );
      }
    }
  }
  showSelectValue(selectedCountry) {
    this.selectedCountry = selectedCountry;
    if (this.selectedDate != undefined) this.onUpdateFunction();
  }
  showSelectedDate(selectedDate) {
    console.log(selectedDate);
    this.selectedDate = selectedDate.slice(0, -19).replace(/-0/g, "-");
    if (this.selectedCountry != undefined) this.onUpdateFunction();
  }
}
