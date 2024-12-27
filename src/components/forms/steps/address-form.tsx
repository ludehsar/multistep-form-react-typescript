import React from "react";
import InputElement from "../elements/input-element";

const AddressForm = () => {
  return (
    <div className="space-y-4">
      <InputElement
        name="streetAddress"
        label="Street Address"
        placeholder="Enter your street address"
      />
      <div className="grid grid-cols-2 gap-4">
        <InputElement
          name="city"
          label="City"
          placeholder="Enter your city"
        />
        <InputElement
          name="state"
          label="State"
          placeholder="Enter your state"
        />
      </div>
      <InputElement
        name="zipCode"
        label="ZIP Code"
        placeholder="Enter your ZIP code"
      />
    </div>
  );
};

export default AddressForm; 