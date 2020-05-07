import { Component } from "@angular/core";
import { MessageService } from "../message.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(public service: MessageService) {}
  stats;
  state;
  positive;
  negative;
  hospitalized;
  recovered;
  death;

  currentSelection = {
    state: 0,
    positive: 0,
    negative: 0,
    hospitalized: 0,
    recovered: 0,
    death: 0,
  };

  ngAfterViewInit() {
    this.service.getStateCount().subscribe((result) => {
      this.stats = result;
    });
  }
  showSelectValue(selectedValue) {
    console.log("Selected:", selectedValue);
    this.currentSelection = selectedValue;
    this.currentSelection.hospitalized =
      selectedValue.hospitalized == null ? "null" : selectedValue.hospitalized;
    this.currentSelection.recovered =
      selectedValue.recovered == null ? "null" : selectedValue.recovered;
    this.currentSelection.death =
      selectedValue.death == null ? "null" : selectedValue.death;
  }
}
