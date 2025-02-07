import React, {useState} from "react";
import UserDetails from "./UserDetails/UserDetails";
import SendConfirmation from "./SendConfirmation/SendConfirmation";
import SubmitConfirmation from "./SubmitConfirmation/SubmitConfirmation";
import MultiStepper from "../../components/MultiStepper/MultiStepper";
import {registrationSteps} from "../../constants/registration";

const RegistrationForm: React.FC = () => {
    const [activeStep, setActiveStep] = useState(1);

    const nextStep = () => setActiveStep((prev) => prev + 1);
    const prevStep = () => setActiveStep((prev) => prev - 1);

    return (
        <MultiStepper
            activeStep={activeStep}
            pageTitle={"Registration"}
            stepsDetails={registrationSteps}
            components={[
                <UserDetails nextStep={nextStep} />,
                <SendConfirmation nextStep={nextStep} prevStep={prevStep} />,
                <SubmitConfirmation nextStep={nextStep} prevStep={prevStep} />,
            ]}
        />
    );
};

export default RegistrationForm;
