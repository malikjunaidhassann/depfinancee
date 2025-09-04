import { Clipboard, Scale, BadgeCheck } from "lucide-react";

interface Step {
  id: number;
  label: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  { id: 1, label: "Fast and Secure Process", icon: <Clipboard size={24} /> },
  { id: 2, label: "Reasonable Terms and APR*", icon: <Scale size={24} /> },
  { id: 3, label: "Instant Money Access Online", icon: <BadgeCheck size={24} /> },
];

interface StepperProps {
  activeStep: number; // current step (1-based index)
}

const Stepper: React.FC<StepperProps> = ({ activeStep }) => {
  return (
    <div className="w-full flex justify-between items-center relative">
      {/* Connector line */}
      <div className="absolute top-6 left-0 w-full h-1 bg-gray-200">
        <div
          className="h-1 bg-gradient-to-r from-teal-200 to-teal-500 transition-all duration-500"
          style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>

      {/* Steps */}
      {steps.map((step, index) => {
        const isCompleted = index + 1 < activeStep;
        const isActive = index + 1 === activeStep;

        return (
          <div
            key={step.id}
            className="flex flex-col items-center relative z-10 w-1/3 text-center"
          >
            {/* Circle */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 
                ${
                  isCompleted || isActive
                    ? "bg-gradient-to-r from-teal-200 to-teal-500 text-white border-teal-400"
                    : "bg-gray-200 text-gray-500 border-gray-300"
                }`}
            >
              {step.icon}
            </div>
            {/* Label */}
            <p
              className={`mt-2 text-sm font-medium ${
                isActive
                  ? "text-teal-600"
                  : isCompleted
                  ? "text-gray-700"
                  : "text-gray-400"
              }`}
            >
              {step.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default function CustomizedStepperDemo() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Example with activeStep = 2 */}
      <Stepper activeStep={2} />
    </div>
  );
}
