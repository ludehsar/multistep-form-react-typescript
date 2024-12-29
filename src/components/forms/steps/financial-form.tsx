import React from "react";
import SelectElement from "../elements/select-element";
import InputElement from "../elements/input-element";

const FinancialForm = () => {
  return (
    <div className="space-y-4">
      <SelectElement
        name="expenseType"
        label="What is the expense type?"
        placeholder="Select"
        options={[
          { value: "type1", label: "Type 1" },
          { value: "type2", label: "Type 2" },
          { value: "type3", label: "Type 3" }
        ]}
      />
      <InputElement
        name="managementFee"
        label="What is the Management Fee?"
        placeholder="eg. $10,000"
      />
      <InputElement
        name="managementFeeAnnualized"
        label="What is the Management Fee Annualized?"
        placeholder="eg. $12,000"
      />
      <InputElement
        name="totalNonControllableFYImpact"
        label="What is the Total Non-Controllable (current FY impact)?"
        placeholder="eg. $40,000"
      />
      <InputElement
        name="totalNonControllableAnnualized"
        label="What is the Total Non-Controllable (annualized)?"
        placeholder="eg. $48,000"
      />
    </div>
  );
};

export default FinancialForm; 