"use client";

import RequestDetails from "@/components/forms/request-details";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const requests = [
  {
    id: "2001",
    name: "Teddy Cineas",
    submitted: "09-13-2024",
    status: "Approved",
    description: "my description",
    notes: "None",
    requestor: "teddy.cineas",
    jobTitle: "Software Engineer",
    email: "joe.celestin@example.com",
    theater: "North America",
    siteSpecific: "New York",
    implementationDate: new Date("2024-09-13"),
    fiscalYear: "2024",
    changeTo: "Process",
    changeType: "Update",
    expenseType: "Operating",
    managementFee: "10000",
    managementFeeAnnualized: "120000",
    totalNonControllableFYImpact: "5000",
    totalNonControllableAnnualized: "60000",
    isHeadcountChange: "Yes",
    headcountChangeType: "Increase",
    employeesInvolved: "5",
    kpiSlaImpact: "Yes",
    kpiSlaImpactDescription: "Improved response time",
    isLawChange: "No",
    lawChangeDescription: "",
    hasProviderPersonnel: "Yes",
    hasEmployees: "Yes",
  },
  {
    id: "2021",
    name: "Joe Celestin",
    submitted: "09-18-2024",
    status: "Approved",
    description: "my description",
    notes: "None",
    requestor: "teddy.cineas",
    jobTitle: "Software Engineer",
    email: "joe.celestin@example.com",
    theater: "North America",
    siteSpecific: "New York",
    implementationDate: new Date("2024-09-13"),
    fiscalYear: "2024",
    changeTo: "Process",
    changeType: "Update",
    expenseType: "Operating",
    managementFee: "10000",
    managementFeeAnnualized: "120000",
    totalNonControllableFYImpact: "5000",
    totalNonControllableAnnualized: "60000",
    isHeadcountChange: "Yes",
    headcountChangeType: "Increase",
    employeesInvolved: "5",
    kpiSlaImpact: "Yes",
    kpiSlaImpactDescription: "Improved response time",
    isLawChange: "No",
    lawChangeDescription: "",
    hasProviderPersonnel: "Yes",
    hasEmployees: "Yes",
  },
  {
    id: "2024",
    name: "Joe Celestin",
    submitted: "09-19-2024",
    status: "In Progress",
    description: "my description",
    notes: "None",
    requestor: "teddy.cineas",
    jobTitle: "Software Engineer",
    email: "joe.celestin@example.com",
    theater: "North America",
    siteSpecific: "New York",
    implementationDate: new Date("2024-09-13"),
    fiscalYear: "2024",
    changeTo: "Process",
    changeType: "Update",
    expenseType: "Operating",
    managementFee: "10000",
    managementFeeAnnualized: "120000",
    totalNonControllableFYImpact: "5000",
    totalNonControllableAnnualized: "60000",
    isHeadcountChange: "Yes",
    headcountChangeType: "Increase",
    employeesInvolved: "5",
    kpiSlaImpact: "Yes",
    kpiSlaImpactDescription: "Improved response time",
    isLawChange: "No",
    lawChangeDescription: "",
    hasProviderPersonnel: "Yes",
    hasEmployees: "Yes",
  },
  {
    id: "2025",
    name: "Joe Celestin",
    submitted: "09-20-2024",
    status: "Declined",
    description: "my description",
    notes: "Requires call",
    requestor: "teddy.cineas",
    jobTitle: "Software Engineer",
    email: "joe.celestin@example.com",
    theater: "North America",
    siteSpecific: "New York",
    implementationDate: new Date("2024-09-13"),
    fiscalYear: "2024",
    changeTo: "Process",
    changeType: "Update",
    expenseType: "Operating",
    managementFee: "10000",
    managementFeeAnnualized: "120000",
    totalNonControllableFYImpact: "5000",
    totalNonControllableAnnualized: "60000",
    isHeadcountChange: "Yes",
    headcountChangeType: "Increase",
    employeesInvolved: "5",
    kpiSlaImpact: "Yes",
    kpiSlaImpactDescription: "Improved response time",
    isLawChange: "No",
    lawChangeDescription: "",
    hasProviderPersonnel: "Yes",
    hasEmployees: "Yes",
  },
];

export default function DashboardPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request) => (
              <TableRow
                key={request.id}
                className={cn(
                  request.status === "Approved" && "bg-green-50",
                  request.status === "Declined" && "bg-red-50"
                )}
              >
                <Popover>
                  <PopoverTrigger asChild>
                    <TableCell className="cursor-pointer">
                      {request.id}
                    </TableCell>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-[800px] p-6"
                    align="center"
                    side="right"
                    sideOffset={40}
                    alignOffset={0}
                    avoidCollisions={true}
                  >
                    <RequestDetails request={request} />
                  </PopoverContent>
                </Popover>
                <TableCell>{request.name}</TableCell>
                <TableCell>{request.submitted}</TableCell>
                <TableCell>
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2 py-1 text-sm",
                      request.status === "Approved" &&
                        "bg-green-100 text-green-700",
                      request.status === "Declined" &&
                        "bg-red-100 text-red-700",
                      request.status === "In Progress" &&
                        "bg-blue-100 text-blue-700"
                    )}
                  >
                    {request.status === "Approved" && "✓ "}
                    {request.status === "Declined" && "✕ "}
                    {request.status}
                  </span>
                </TableCell>
                <TableCell>{request.description}</TableCell>
                <TableCell>{request.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
