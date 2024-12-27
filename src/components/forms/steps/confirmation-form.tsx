import React from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "@/lib/types";

const ConfirmationForm = () => {
  const { getValues } = useFormContext<FormData>();
  const values = getValues();

  const fields = [
    { label: "Name", value: values.name },
    { label: "Email", value: values.email },
    { label: "Phone Number", value: values.phoneNumber },
    { label: "Street Address", value: values.streetAddress },
    { label: "City", value: values.city },
    { label: "State", value: values.state },
    { label: "ZIP Code", value: values.zipCode },
    { label: "Additional Information", value: values.additionalInfo || "None" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Please confirm your information</h2>
      <div className="rounded-lg border p-4 space-y-3">
        {fields.map((field) => (
          <div key={field.label} className="grid grid-cols-2 gap-4">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {field.label}:
            </span>
            <span className="text-gray-600 dark:text-gray-400">
              {field.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConfirmationForm; 