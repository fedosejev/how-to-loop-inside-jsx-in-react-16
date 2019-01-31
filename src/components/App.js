import React, { Component } from "react";
import Month from "./Month";

const MONTHS = [
  {
    name: "January",
    number: 1
  },
  {
    name: "February",
    number: 2
  },
  {
    name: "March",
    number: 3
  },
  {
    name: "April",
    number: 4
  },
  {
    name: "May",
    number: 5
  },
  {
    name: "June",
    number: 6
  },
  {
    name: "July",
    number: 7
  },
  {
    name: "August",
    number: 8
  },
  {
    name: "September",
    number: 9
  },
  {
    name: "October",
    number: 10
  },
  {
    name: "November",
    number: 11
  },
  {
    name: "December",
    number: 12
  }
];

class App extends Component {
  createMonthElement = month => <Month month={month} key={month.number} />;

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 mt-5 mb-5">
            <ul className="list-group">
              {MONTHS.map(this.createMonthElement)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
