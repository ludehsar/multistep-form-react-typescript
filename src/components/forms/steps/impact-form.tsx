import React from "react";
import SelectElement from "../elements/select-element";
import InputElement from "../elements/input-element";
import TextAreaElement from "../elements/text-area-element";
import FileInputElement from "../elements/file-input-element";

const ImpactForm = () => {
  return (
    <div className="space-y-4">
      <SelectElement
        name="isHeadcountChange"
        label="Is this a change to headcount?"
        placeholder="Select"
        options={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]}
      />
      <InputElement
        name="headcountChangeType"
        label="Are we adding or removing headcount?"
        placeholder="eg. Adding, Removing"
      />
      <InputElement
        name="employeesInvolved"
        label="How many employees are involved?"
        placeholder="eg. 10"
      />
      <SelectElement
        name="kpiSlaImpact"
        label="Will there be any impact to KPIs/SLAs as a result of this CCR?"
        placeholder="Select"
        options={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]}
      />
      <TextAreaElement
        name="kpiSlaImpactDescription"
        label="Please explain the KPI/SLA impact as a result of the CCR"
        placeholder="eg. Decrease in productivity"
        className="resize-none"
        rows={4}
      />
      <SelectElement
        name="isLawChange"
        label="Is this change because of a law?"
        placeholder="Select"
        options={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]}
      />
      <TextAreaElement
        name="lawChangeDescription"
        label="Please explain"
        placeholder="eg. New regulation"
        className="resize-none"
        rows={4}
      />
      <SelectElement
        name="hasProviderPersonnel"
        label="Are there any provider personnel involved in the change?"
        placeholder="Select"
        options={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]}
      />
      <SelectElement
        name="hasEmployees"
        label="Are there employees involved in the change?"
        placeholder="Select"
        options={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]}
      />
      <div className="pt-4">
        <FileInputElement
          name="file"
          label="Upload File"
        />
      </div>
    </div>
  );
};

export default ImpactForm; 