import React, { useState } from "react";
import { Component } from "react";
import "../App.css";
import img1 from "../image.jpg";

export default class Navbar extends Component {
  state = {
    showDropdown: false,
  };
  contact = () => {
    window.location = "https://wa.me/7892823716";
  };
  homePage = () => {
    window.location = "/";
  };
  AboutUs = () => {
    window.location = "/AboutUs";
  };
  Registers = () => {
    window.location = "/Register";
  };
  toggleDropdown = () => {
    this.setState((prevState) => ({
      showDropdown: !prevState.showDropdown,
    }));
  };
   
  Product1 = () =>{
    window.location = "/Product";
  }

  Product2 = () =>{
    window.location = "/Product2";
  }
  render() {
    return (
      <>
        <div>
          <div
            style={{
              backgroundColor: "rgb(221, 208, 200)",
              fontSize: "calc(10px + 2vmin)",
            }}
          >
            <div className="name-container">
              <div className="name-left span" onClick={this.homePage}>
                <img
                  style={{ height: "100%", width: "100px" }}
                  src={img1}
                  alt=""
                />
              </div>
              <div className="name-right" style={{ marginTop: "30px" }}>
              <div className="dropdown">
                <span
                  style={{ marginLeft: "30px", color: "black" }} className="product-text"
                  onClick={this.toggleDropdown}
                >
                  <i className="fa fa-caret-down span" style={{ color: "black" }}>
                    {" "}
                    Product
                  </i>
                  
                </span>{this.state.showDropdown && (
                    <div className="dropdown-content">
                      <span onClick={this.Product1 }>Product 1</span>
                      <span onClick={this.Product2}>Product 2</span>
                      <span onClick={() => this.handleProductClick('Type 3')}>Type 3</span>
                    </div>
                  )}</div>
                <span
                  style={{ marginLeft: "30px", color: "black" }}
                  onClick={this.AboutUs}
                >
                  <i className="span" style={{ color: "black" }}>
                    {" "}
                    About Us
                  </i>
                </span>

                <span style={{ marginLeft: "30px", color: "black" }}>
                  <i
                    className="fa fa-phone span"
                    style={{ marginLeft: "5px", color: "black" }}
                    onClick={() => this.contact()}
                  >
                    {" "}
                    Contact us
                  </i>
                </span>

                <span style={{ marginLeft: "30px", color: "black" }}>
                  {" "}
                  <i
                    className="fa fa-folder span"
                    style={{ marginLeft: "5px", color: "black" }}
                    onClick={this.Registers}
                  >
                    {" "}
                    Register
                  </i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
