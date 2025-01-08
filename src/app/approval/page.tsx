"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Form } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import RequestDetails from "@/components/forms/request-details";

const requests = [
  {
    id: "15",
    name: "Joe Celestin",
    requestor: "joe.celestin",
    submitted: "2024-09-13",
    description: "Request 1",
    notes: "",
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
    id: "40",
    name: "Joe Celestin",
    requestor: "joe.celestin",
    submitted: "2024-09-15",
    description: "Request 1",
    notes: "",
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
    id: "25",
    name: "Joe Celestin",
    requestor: "joe.celestin",
    submitted: "2024-09-18",
    description: "Request 1",
    notes: "",
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
    id: "70",
    name: "Teddy Cineas",
    requestor: "teddy.cineas",
    submitted: "2024-09-16",
    description: "Request 1",
    notes: "",
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

type RequestStatus = "approved" | "declined" | null;

interface ApprovalFormData {
  requests: {
    id: string;
    selected: boolean;
    notes: string;
  }[];
  status: RequestStatus;
}

export default function ApprovalPage() {
  const form = useForm<ApprovalFormData>({
    defaultValues: {
      requests: requests.map((request) => ({
        id: request.id,
        selected: false,
        notes: "",
      })),
      status: null,
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "requests",
    keyName: "_id",
  });

  const onSubmit = (data: ApprovalFormData) => {
    const selectedRequests = data.requests
      .filter((r) => r.selected)
      .map((r) => ({
        ...r,
        status: data.status,
      }));

    console.log(selectedRequests);
  };

  const handleAction = (status: RequestStatus) => {
    form.setValue("status", status);
    form.handleSubmit(onSubmit)();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Approval</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12"></TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Requestor</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fields.map((field, index) => {
                  const request = requests.find((r) => r.id === field.id)!;
                  return (
                    <TableRow key={field._id} className="hover:bg-muted/50">
                      <TableCell
                        onClick={(e) => e.stopPropagation()}
                        className="cursor-default"
                      >
                        <Checkbox
                          checked={form.watch(`requests.${index}.selected`)}
                          onCheckedChange={(checked) => {
                            form.setValue(
                              `requests.${index}.selected`,
                              checked === true
                            );
                          }}
                        />
                      </TableCell>
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
                      <TableCell>{request.requestor}</TableCell>
                      <TableCell>{request.submitted}</TableCell>
                      <TableCell>{request.description}</TableCell>
                      <TableCell
                        onClick={(e) => e.stopPropagation()}
                        className="cursor-default"
                      >
                        <Textarea
                          placeholder="eg. notes"
                          className="min-h-[80px] resize-none"
                          {...form.register(`requests.${index}.notes`)}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            {fields.some((_, index) =>
              form.watch(`requests.${index}.selected`)
            ) && (
              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={() => handleAction("approved")}
                  className="bg-green-500 hover:bg-green-600"
                >
                  ✓ Approve
                </Button>
                <Button
                  type="button"
                  onClick={() => handleAction("declined")}
                  variant="destructive"
                >
                  ✕ Decline
                </Button>
              </div>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
