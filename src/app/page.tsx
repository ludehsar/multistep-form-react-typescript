import MultiStepForm from "@/components/forms/multi-step-form";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Contract Change Request Form</h1>
        <MultiStepForm />
      </main>
    </div>
  );
}
