import {MultiStepperProps, StepConfig} from "../components/MultiStepper/MultiStepper";


export const registrationSteps: StepConfig[] = [
    {
        step: 1,
        title: "Personal Info",
        description: "Please enter below information to create your account.",
    },
    {
        step: 2,
        title: "OTP Verification",
        description: "Please enter the OTP sent to your email.",
    },
    {
        step: 3,
        title: "Final Confirmation",
        description: "Review and confirm your details.",
    },
];
