import React, { Component } from "react";
import "../reactStyles/reactStyles.css";

class Layouts extends Component {
  constructor() {
    super();
    this.state = {
      hoursBooked: "", // stores the amount of hours booked, initalized with empty value
      date: "", // stores the date the user picked
      isWeekday: "", // stores a boolean value that determines if the date picked is a weekday
    };
    this.setHours = this.setHours.bind(this);
    this.setDate = this.setDate.bind(this);
  }

  // setter that sets the hours booked, called in an input
  setHours(event) {
    this.setState({ hoursBooked: event.target.value });
  }

  // setter that sets the day booked and sets isWeekday to true or false, called in input
  setDate(event) {
    this.setState({ date: event.target.value });
    const dateP = new Date(event.target.value);
    const day = dateP.getDay();
    if (day === 0 || day === 6) {
      this.setState({ isWeekday: false });
    } else {
      this.setState({ isWeekday: true });
    }
    console.log(this.state.isWeekday);
    console.log(day);
  }

  // returns the final price for the booking, takes isWeekday and the hours booked
  getPrice(isWeekday, hours) {
    let price = 0;
    if (isWeekday === "" || hours === 0) {
      return " ";
    } else {
      if (isWeekday === true) {
        price = 100;
      } else {
        price = 150;
      }

      return <p1>${price * hours}</p1>;
    }
  }

  render() {
    return (
      <div className="bookingArea">
        <p1>Choose a date and time: </p1>
        <input //input for the date
          type="datetime-local"
          value={this.state.date}
          onChange={this.setDate}
        />
        <div className="hours">
          <p1>How many hours would you like to book for?</p1>
          <input //input for the hours 
            type="number"
            value={this.state.hoursBooked}
            onChange={this.setHours}
          />
        </div>
        <h4 className="priceHeader">Your final price is: </h4> 
        <h4 className="finalPrice"> 
          {this.getPrice(this.state.isWeekday, this.state.hoursBooked)} 
        </h4>
      </div>
    );
  }
}

export default Layouts;
