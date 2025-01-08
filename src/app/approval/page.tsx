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

const requests = [
  {
    id: "15",
    name: "Joe Celestin",
    requestor: "joe.celestin",
    submitted: "2024-09-13",
    description: "Request 1",
    notes: "",
  },
  {
    id: "40",
    name: "Joe Celestin",
    requestor: "joe.celestin",
    submitted: "2024-09-15",
    description: "Request 1",
    notes: "",
  },
  {
    id: "25",
    name: "Joe Celestin",
    requestor: "joe.celestin",
    submitted: "2024-09-18",
    description: "Request 1",
    notes: "",
  },
  {
    id: "70",
    name: "Teddy Cineas",
    requestor: "teddy.cineas",
    submitted: "2024-09-16",
    description: "Request 1",
    notes: "",
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
                    <TableRow key={field.id}>
                      <TableCell>
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
                      <TableCell>{request.id}</TableCell>
                      <TableCell>{request.name}</TableCell>
                      <TableCell>{request.requestor}</TableCell>
                      <TableCell>{request.submitted}</TableCell>
                      <TableCell>{request.description}</TableCell>
                      <TableCell>
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
