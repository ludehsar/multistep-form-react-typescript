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

function RequestDetails({ request }: { request: FormData }) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const sections: Section[] = [
    {
      title: "Identifying Information",
      fields: [
        { label: "Name", value: request.name },
        { label: "Job Title", value: request.jobTitle },
        { label: "Email", value: request.email },
        { label: "CCR Requestor", value: request.requestor },
      ],
    },
    {
      title: "Description",
      fields: [
        { label: "Theater", value: request.theater },
        { label: "Site Specific", value: request.siteSpecific },
        {
          label: "Implementation Date",
          value: request.implementationDate
            ? formatDate(request.implementationDate)
            : undefined,
        },
        { label: "Fiscal Year", value: request.fiscalYear },
        { label: "Change To", value: request.changeTo },
        { label: "Change Type", value: request.changeType },
        { label: "Description", value: request.description, fullWidth: true },
      ],
    },
    {
      title: "Financial",
      fields: [
        { label: "Expense Type", value: request.expenseType },
        { label: "Management Fee", value: request.managementFee },
        {
          label: "Management Fee Annualized",
          value: request.managementFeeAnnualized,
        },
        {
          label: "Total Non-Controllable (Current FY Impact)",
          value: request.totalNonControllableFYImpact,
        },
        {
          label: "Total Non-Controllable (Annualized)",
          value: request.totalNonControllableAnnualized,
        },
      ],
    },
    {
      title: "Impact",
      fields: [
        { label: "Change to Headcount", value: request.isHeadcountChange },
        { label: "Headcount Change Type", value: request.headcountChangeType },
        { label: "Employees Involved", value: request.employeesInvolved },
        { label: "Impact to KPIs/SLAs", value: request.kpiSlaImpact },
        {
          label: "KPI/SLA Impact Description",
          value: request.kpiSlaImpactDescription,
          fullWidth: true,
        },
        { label: "Change Due to Law", value: request.isLawChange },
        {
          label: "Law Change Description",
          value: request.lawChangeDescription,
          fullWidth: true,
        },
        {
          label: "Provider Personnel Involved",
          value: request.hasProviderPersonnel,
        },
        { label: "Employees Involved in Change", value: request.hasEmployees },
      ],
    },
  ];

  return (
    <div className="max-h-[80vh] overflow-y-auto space-y-6">
      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <div key={section.title} className="rounded-lg border p-4 space-y-3">
            <h3 className="font-semibold text-lg border-b pb-2">
              {section.title}
            </h3>
            <div className="space-y-4">
              {section.fields.map((field) => (
                <div
                  key={field.label}
                  className={cn(
                    "space-y-1",
                    !field.fullWidth &&
                      "sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:items-baseline"
                  )}
                >
                  <span className="block font-medium text-gray-700 dark:text-gray-300">
                    {field.label}:
                  </span>
                  <span
                    className={cn(
                      "block text-gray-600 dark:text-gray-400 break-words",
                      field.fullWidth && "mt-2"
                    )}
                  >
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
}

export default RequestDetails;
