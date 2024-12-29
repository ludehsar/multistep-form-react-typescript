import * as z from "zod";

export const formSchema = z.object({
  // Identifying Information
  name: z.string().min(1, "Name is required"),
  jobTitle: z.string().min(1, "Job Title is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  requestor: z.string().min(1, "Requestor is required"),

  // Description
  theater: z.string().min(1, "Theater is required"),
  siteSpecific: z.string().min(1, "Site specific selection is required"),
  implementationDate: z.date({
    required_error: "Implementation date is required",
    invalid_type_error: "That's not a date!",
  }),
  fiscalYear: z.string().min(1, "Fiscal year is required"),
  changeTo: z.string().min(1, "Change to is required"),
  changeType: z.string().min(1, "Change type is required"),
  description: z.string().min(1, "Description is required"),

  // Financial
  expenseType: z.string().min(1, "Expense type is required"),
  managementFee: z.string().min(1, "Management fee is required"),
  managementFeeAnnualized: z.string().min(1, "Management fee annualized is required"),
  totalNonControllableFYImpact: z.string().min(1, "Total non-controllable current FY impact is required"),
  totalNonControllableAnnualized: z.string().min(1, "Total non-controllable annualized is required"),

  // Impact
  isHeadcountChange: z.string().min(1, "Please specify if this is a change to headcount"),
  headcountChangeType: z.string().optional(),
  employeesInvolved: z.string().optional(),
  kpiSlaImpact: z.string().min(1, "Please specify if there will be impact to KPIs/SLAs"),
  kpiSlaImpactDescription: z.string().optional(),
  isLawChange: z.string().min(1, "Please specify if this change is because of a law"),
  lawChangeDescription: z.string().optional(),
  hasProviderPersonnel: z.string().min(1, "Please specify if there are provider personnel involved"),
  hasEmployees: z.string().min(1, "Please specify if there are employees involved"),
  
  // File Upload
  file: z.instanceof(File).optional().or(z.string().optional())
}); 