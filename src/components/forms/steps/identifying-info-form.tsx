import React from "react";
import InputElement from "../elements/input-element";
import SelectElement from "../elements/select-element";

const IdentifyingInfoForm = () => {
  return (
    <div className="space-y-4">
      <InputElement
        name="name"
        label="What is your name?"
        placeholder="eg. John Doe"
      />
      <SelectElement
        name="jobTitle"
        label="What is your job title?"
        placeholder="Select Job Title"
        options={[
          { value: "manager", label: "Manager" },
          { value: "director", label: "Director" },
          { value: "supervisor", label: "Supervisor" },
          { value: "staff", label: "Staff" }
        ]}
      />
      <InputElement
        name="email"
        type="email"
        label="What is your email address?"
        placeholder="eg. john.doe@"
      />
      <SelectElement
        name="requestor"
        label="Are you the requestor of the CCR?"
        placeholder="Select"
        options={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]}
      />
    </div>
  );
};

export default IdentifyingInfoForm; 