import React from "react";
import InputElement from "../elements/input-element";
import PhoneNumberInputElement from "../elements/phone-number-input";

const ContactForm = () => {
  return (
    <div className="space-y-4">
      <InputElement
        name="name"
        label="Full Name"
        placeholder="Enter your full name"
      />
      <InputElement
        name="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
      />
      <PhoneNumberInputElement
        name="phoneNumber"
        label="Phone Number"
        placeholder="Enter your phone number"
        defaultCountry="us"
      />
    </div>
  );
};

export default ContactForm; 