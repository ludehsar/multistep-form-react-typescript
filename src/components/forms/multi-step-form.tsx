'use client'

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormData } from "@/lib/types";
import { formSchema } from "@/lib/schema";
import { Stepper } from "@/components/ui/stepper";
import IdentifyingInfoForm from "./steps/identifying-info-form";
import DescriptionForm from "./steps/description-form";
import FinancialForm from "./steps/financial-form";
import ImpactForm from "./steps/impact-form";
import ConfirmationForm from "./steps/confirmation-form";

const steps: { title: string; component: React.FC; fields: (keyof FormData)[] }[] = [
  { 
    title: "Identifying Information", 
    component: IdentifyingInfoForm,
    fields: ['name', 'jobTitle', 'email', 'requestor']
  },
  { 
    title: "Description", 
    component: DescriptionForm,
    fields: ['theater', 'siteSpecific', 'implementationDate', 'fiscalYear', 'changeTo', 'changeType', 'description']
  },
  { 
    title: "Financial", 
    component: FinancialForm,
    fields: ['expenseType', 'managementFee', 'managementFeeAnnualized', 'totalNonControllableFYImpact', 'totalNonControllableAnnualized']
  },
  { 
    title: "Impact", 
    component: ImpactForm,
    fields: ['isHeadcountChange', 'headcountChangeType', 'employeesInvolved', 'kpiSlaImpact', 'kpiSlaImpactDescription', 'isLawChange', 'lawChangeDescription', 'hasProviderPersonnel', 'hasEmployees', 'file']
  },
  {
    title: "Confirmation",
    component: ConfirmationForm,
    fields: []
  }
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      name: "",
      jobTitle: "",
      email: "",
      requestor: "",
      theater: "",
      siteSpecific: "",
      implementationDate: new Date(),
      fiscalYear: "",
      changeTo: "",
      changeType: "",
      description: "",
      expenseType: "",
      managementFee: "",
      managementFeeAnnualized: "",
      totalNonControllableFYImpact: "",
      totalNonControllableAnnualized: "",
      isHeadcountChange: "",
      headcountChangeType: "",
      employeesInvolved: "",
      kpiSlaImpact: "",
      kpiSlaImpactDescription: "",
      isLawChange: "",
      lawChangeDescription: "",
      hasProviderPersonnel: "",
      hasEmployees: "",
      file: ""
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

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <Form {...form}>
      <form className="space-y-8" method="post">
        <div className="space-y-6">
          <Stepper
            steps={steps.map(step => step.title)}
            currentStep={currentStep}
            className="mb-8"
          />

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
            <Button type="button" onClick={form.handleSubmit(onSubmit)}>Submit</Button>
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