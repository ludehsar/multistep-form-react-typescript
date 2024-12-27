import { cn } from "@/lib/utils";

interface StepperProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="relative flex justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center flex-1">
            <span
              className={cn(
                "mb-2 text-sm font-medium",
                index === currentStep
                  ? "text-primary"
                  : index <= currentStep
                  ? "text-primary"
                  : "text-gray-500 dark:text-gray-400"
              )}
            >
              {step}
            </span>
            <div className="flex items-center w-full">
              <div
                className={cn(
                  "h-[2px] w-full",
                  index <= currentStep
                    ? "bg-primary"
                    : "bg-gray-200 dark:bg-gray-700"
                )}
              />
              <div
                className={cn(
                  "relative flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2",
                  index === currentStep
                    ? "border-primary bg-primary text-white"
                    : index < currentStep
                    ? "border-primary bg-primary text-white"
                    : "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                )}
              >
                <div className="h-1 w-1 rounded-full bg-current" />
              </div>
              <div
                className={cn(
                  "h-[2px] w-full",
                  index <= currentStep
                    ? "bg-primary"
                    : "bg-gray-200 dark:bg-gray-700"
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 