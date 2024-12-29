import React from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "@/lib/types";
import { cn } from "@/lib/utils";

interface Field {
  label: string;
  value: string | undefined;
  fullWidth?: boolean;
}

interface Section {
  title: string;
  fields: Field[];
}

const ConfirmationForm = () => {
  const { getValues } = useFormContext<FormData>();
  const values = getValues();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sections: Section[] = [
    {
      title: "Identifying Information",
      fields: [
        { label: "Name", value: values.name },
        { label: "Job Title", value: values.jobTitle },
        { label: "Email", value: values.email },
        { label: "CCR Requestor", value: values.requestor },
      ],
    },
    {
      title: "Description",
      fields: [
        { label: "Theater", value: values.theater },
        { label: "Site Specific", value: values.siteSpecific },
        { label: "Implementation Date", value: values.implementationDate ? formatDate(values.implementationDate) : undefined },
        { label: "Fiscal Year", value: values.fiscalYear },
        { label: "Change To", value: values.changeTo },
        { label: "Change Type", value: values.changeType },
        { label: "Description", value: values.description, fullWidth: true },
      ],
    },
    {
      title: "Financial",
      fields: [
        { label: "Expense Type", value: values.expenseType },
        { label: "Management Fee", value: values.managementFee },
        { label: "Management Fee Annualized", value: values.managementFeeAnnualized },
        { label: "Total Non-Controllable (Current FY Impact)", value: values.totalNonControllableFYImpact },
        { label: "Total Non-Controllable (Annualized)", value: values.totalNonControllableAnnualized },
      ],
    },
    {
      title: "Impact",
      fields: [
        { label: "Change to Headcount", value: values.isHeadcountChange },
        { label: "Headcount Change Type", value: values.headcountChangeType },
        { label: "Employees Involved", value: values.employeesInvolved },
        { label: "Impact to KPIs/SLAs", value: values.kpiSlaImpact },
        { label: "KPI/SLA Impact Description", value: values.kpiSlaImpactDescription, fullWidth: true },
        { label: "Change Due to Law", value: values.isLawChange },
        { label: "Law Change Description", value: values.lawChangeDescription, fullWidth: true },
        { label: "Provider Personnel Involved", value: values.hasProviderPersonnel },
        { label: "Employees Involved in Change", value: values.hasEmployees },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-lg border p-4 space-y-3"
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
                    "block text-gray-600 dark:text-gray-400 break-words",
                    field.fullWidth && "mt-2"
                  )}>
                    {field.value || "Not provided"}
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