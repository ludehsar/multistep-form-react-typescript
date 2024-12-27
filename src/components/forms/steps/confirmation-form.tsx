import React from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "@/lib/types";
import { cn } from "@/lib/utils";

interface Field {
  label: string;
  value: string;
  fullWidth?: boolean;
}

interface Section {
  title: string;
  fields: Field[];
}

const ConfirmationForm = () => {
  const { getValues } = useFormContext<FormData>();
  const values = getValues();

  const sections: Section[] = [
    {
      title: "Contact Information",
      fields: [
        { label: "Name", value: values.name },
        { label: "Email", value: values.email },
        { label: "Phone Number", value: values.phoneNumber },
      ],
    },
    {
      title: "Address",
      fields: [
        { label: "Street Address", value: values.streetAddress },
        { label: "City", value: values.city },
        { label: "State", value: values.state },
        { label: "ZIP Code", value: values.zipCode },
      ],
    },
    {
      title: "Additional Information",
      fields: [
        { 
          label: "Additional Details", 
          value: values.additionalInfo || "None provided",
          fullWidth: true 
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {sections.map((section) => (
          <div
            key={section.title}
            className={cn(
              "rounded-lg border p-4 space-y-3",
              section.title === "Additional Information" && "sm:col-span-2"
            )}
          >
            <h3 className="font-semibold text-lg border-b pb-2">
              {section.title}
            </h3>
            <div className="space-y-4">
              {section.fields.map((field) => (
                <div
                  key={field.label}
                  className={cn(
                    "space-y-1",
                    !field.fullWidth && "sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:items-baseline"
                  )}
                >
                  <span className="block font-medium text-gray-700 dark:text-gray-300">
                    {field.label}:
                  </span>
                  <span className={cn(
                    "block text-gray-600 dark:text-gray-400",
                    field.fullWidth && "mt-2"
                  )}>
                    {field.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConfirmationForm; 