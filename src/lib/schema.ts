import * as z from "zod";

export const formSchema = z.object({
  // Contact Info
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),

  // Address
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "Zip code is required"),

  // Additional Info
  additionalInfo: z.string().optional(),
}); 