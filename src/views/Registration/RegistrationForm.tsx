import React, {useState} from "react";
import UserDetails from "./UserDetails/UserDetails";
import SendConfirmation from "./SendConfirmation/SendConfirmation";
import SubmitConfirmation from "./SubmitConfirmation/SubmitConfirmation";
import MultiStepper from "../../components/MultiStepper/MultiStepper";
import {emptyUserRegistrationValues, registrationSteps} from "../../constants/registration";
import {RegistrationRequestModel, SendOTPRequestModel} from "../../models/Auth.model";

const RegistrationForm: React.FC = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [registrationData, setRegistrationData] = useState<RegistrationRequestModel>(emptyUserRegistrationValues);
    const [verificationData, setVerificationData] = useState<SendOTPRequestModel>({});

    const nextStep = ({userData, otpRequestData}: {userData?: RegistrationRequestModel,otpRequestData?: SendOTPRequestModel} = {}) => {
        if(userData) setRegistrationData(userData);
        else if(otpRequestData) setVerificationData(otpRequestData);
        setActiveStep((prev) => prev + 1);
    };
    const prevStep = () => setActiveStep((prev) => prev - 1);

    return (
        <MultiStepper
            activeStep={activeStep}
            pageTitle={"Registration"}
            stepsDetails={registrationSteps}
            components={[
                <UserDetails nextStep={nextStep} />,
                <SendConfirmation nextStep={nextStep} prevStep={prevStep} email={registrationData.email} phone={registrationData.phone} />,
                <SubmitConfirmation nextStep={nextStep} prevStep={prevStep} verificationData={verificationData}  />,
            ]}
        />
    );
};

export default RegistrationForm;
