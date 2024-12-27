import React from "react";
import TextAreaElement from "../elements/text-area-element";

const AdditionalForm = () => {
  return (
    <div className="space-y-4">
      <TextAreaElement
        name="additionalInfo"
        label="Additional Information"
        placeholder="Enter any additional information you'd like to share"
        className="resize-none"
        rows={4}
      />
    </div>
  );
};

export default AdditionalForm; 