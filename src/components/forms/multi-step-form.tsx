'use client'

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormData } from "@/lib/types";
import { formSchema } from "@/lib/schema";
import ContactForm from "./steps/contact-form";
import AddressForm from "./steps/address-form";
import AdditionalForm from "./steps/additional-form";
import ConfirmationForm from "./steps/confirmation-form";

const steps: { title: string; component: React.FC; fields: (keyof FormData)[] }[] = [
  { 
    title: "Contact Information", 
    component: ContactForm,
    fields: ['name', 'email', 'phoneNumber']
  },
  { 
    title: "Address", 
    component: AddressForm,
    fields: ['streetAddress', 'city', 'state', 'zipCode']
  },
  { 
    title: "Additional Information", 
    component: AdditionalForm,
    fields: ['additionalInfo']
  },
  { 
    title: "Confirmation", 
    component: ConfirmationForm,
    fields: []
  },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      additionalInfo: "",
    },
  });

  const CurrentStepComponent = steps[currentStep].component;

  const handleNext = async () => {
    const currentFields = steps[currentStep].fields;
    
    const currentErrors = form.formState.errors;
    Object.keys(currentErrors).forEach((key) => {
      if (!currentFields.includes(key as keyof FormData)) {
        form.clearErrors(key as keyof FormData);
      }
    });

    const isValid = await form.trigger(currentFields, { shouldFocus: true });
    
    if (isValid) {
      form.clearErrors();
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handleBack = () => {
    form.clearErrors();
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold">{steps[currentStep].title}</h2>
            <p className="text-sm text-gray-500">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>

          <CurrentStepComponent />
        </div>

        <div className="flex justify-between gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            Back
          </Button>
          {currentStep === steps.length - 1 ? (
            <Button type="submit">Submit</Button>
          ) : (
            <Button type="button" onClick={handleNext}>
              Next
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default MultiStepForm; 