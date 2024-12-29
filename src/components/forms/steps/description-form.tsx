import React from "react";
import SelectElement from "../elements/select-element";
import TextAreaElement from "../elements/text-area-element";
import DatePickerElement from "../elements/date-picker-element";

const DescriptionForm = () => {
  return (
    <div className="space-y-4">
      <SelectElement
        name="theater"
        label="What Theater is this CCR for?"
        placeholder="Select"
        options={[
          { value: "theater1", label: "Theater 1" },
          { value: "theater2", label: "Theater 2" },
          { value: "theater3", label: "Theater 3" }
        ]}
      />
      <SelectElement
        name="siteSpecific"
        label="Is this CCR site specific?"
        placeholder="Select"
        options={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]}
      />
      <DatePickerElement
        name="implementationDate"
        label="What is the implementation date?"
        placeholder="mm/dd/yyyy"
      />
      <SelectElement
        name="fiscalYear"
        label="What fiscal year will this change take place in?"
        placeholder="Select"
        options={[
          { value: "2024", label: "2024" },
          { value: "2025", label: "2025" },
          { value: "2026", label: "2026" }
        ]}
      />
      <SelectElement
        name="changeTo"
        label="This is a change to"
        placeholder="Select"
        options={[
          { value: "process", label: "Process" },
          { value: "system", label: "System" },
          { value: "policy", label: "Policy" }
        ]}
      />
      <SelectElement
        name="changeType"
        label="What type of change is this?"
        placeholder="Select"
        options={[
          { value: "type1", label: "Type 1" },
          { value: "type2", label: "Type 2" },
          { value: "type3", label: "Type 3" }
        ]}
      />
      <TextAreaElement
        name="description"
        label="Please provide a detailed description of your change.(Why, Where, What, When and How?)"
        placeholder="eg. Renovating the office space"
        className="resize-none"
        rows={4}
      />
    </div>
  );
};

export default DescriptionForm; 