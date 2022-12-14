import React from "react";
import "./ContactStyle.css";

const Contact = () => {
  return (
    <div name="contact" className="contact">
      <div className="container">
        <div className="top">
          <h1>Contact</h1>
        </div>

        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div>
            <label>Message</label>
            <textarea
              cols="30"
              rows="10"
              placeholder="Enter your Message"
            ></textarea>
          </div>
          <div className="bottom">
            <button className="btn btn_dark">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
