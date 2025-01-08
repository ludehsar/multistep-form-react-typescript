"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  },
  {
    id: "2021",
    name: "Joe Celestin",
    submitted: "09-18-2024",
    status: "Approved",
    description: "my description",
    notes: "None",
  },
  {
    id: "2024",
    name: "Joe Celestin",
    submitted: "09-19-2024",
    status: "In Progress",
    description: "my description",
    notes: "None",
  },
  {
    id: "2025",
    name: "Joe Celestin",
    submitted: "09-20-2024",
    status: "Declined",
    description: "my description",
    notes: "Requires call",
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
                <TableCell>{request.id}</TableCell>
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
