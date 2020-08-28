import * as ko from "knockout";
import rootViewModel from "./appController";
import "ojs/ojknockout";
import "ojs/ojbutton";
import "ojs/ojtoolbar";
import "ojs/ojmenu";
import "ojs/ojlistview";

export = class Root {
  static init(): void {
    function _init(): void {
      ko.applyBindings(rootViewModel, document.getElementById("globalBody"));
    }
    _init();
  }
};
