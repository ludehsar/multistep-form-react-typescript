import { z } from "zod";
import { formSchema } from "./schema";

export type TOption = {
  label: string;
  value: string;
};

export type FormData = z.infer<typeof formSchema>;

export type FormStep = 'contact' | 'address' | 'additional' | 'confirmation';