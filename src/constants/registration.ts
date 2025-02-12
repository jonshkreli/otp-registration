import {MultiStepperProps, StepConfig} from "../components/MultiStepper/MultiStepper";
import {RegistrationRequestModel} from "../models/Auth.model";


export const registrationSteps: StepConfig[] = [
    {
        step: 1,
        description: "Please enter below information to create your account.",
    },
    {
        step: 2,
        description: "Please enter the OTP sent to your email.",
    },
    {
        step: 3,
        description: "Review and confirm your details.",
    },
];

export const emptyUserRegistrationValues: RegistrationRequestModel = {
    firstName: "",
    lastName: "",
    gender: "",
    residenceCountry: "",
    email: "",
    phone: "",
    agreeToTerms: false,
}
