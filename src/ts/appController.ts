import * as ko from "knockout";
import * as ResponsiveUtils from "ojs/ojresponsiveutils";
import * as ResponsiveKnockoutUtils from "ojs/ojresponsiveknockoututils";
import * as ArrayDataProvider from "ojs/ojarraydataprovider";
import { ojListView } from "ojs/ojlistview";
import "ojs/ojlistview";

class RootViewModel {
  smScreen: ko.Observable<boolean>;
  appName: ko.Observable<string>;
  userLogin: ko.Observable<string>;
  listItems: ko.ObservableArray<object>;
  dataSource: any;
  onClickListItem: any;

  constructor() {
    const smQuery: string | null = ResponsiveUtils.getFrameworkQuery("sm-only");
    if (smQuery) {
      this.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(
        smQuery
      );
    }

    this.appName = ko.observable("Shopping Cart");

    this.userLogin = ko.observable("esneko@gmail.com");

    this.listItems = ko.observableArray([
      { id: 2, item: "Flour", price: 2.5 },
      { id: 1, item: "Milk", price: 3.25 },
      { id: 3, item: "Sugar", price: 2.5 },
      { id: 4, item: "Vanilla Extract", price: 1.5 },
    ]);

    this.dataSource = new ArrayDataProvider<string, object>(this.listItems, {
      idAttribute: "id",
    });

    this.onClickListItem = (data, event) => {
      const itemId = event.currentTarget.id;
      const selectedObj = document.querySelectorAll<ojListView<string, object>>(
        "." + itemId
      );
      console.log(data, event);
      console.log(itemId, selectedObj);
    };
  }
}

export default new RootViewModel();
