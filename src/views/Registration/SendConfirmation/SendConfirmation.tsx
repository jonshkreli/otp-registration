import React, { useState } from "react";
import { Box, FormControl, RadioGroup, Typography, CircularProgress } from "@mui/material";
import WYRadio from "../../../components/WYRadio/WYRadio";
import styles from "./SendConfirmation.module.scss";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import { sendOTP } from "../../../api/auth";
import {RegistrationRequestModel, SendOTPRequestModel} from "../../../models/Auth.model";
import FormErrorText from "../../../components/FormErrorText";
import WYSection from "../../../components/WYSection/WYSection";

interface SendConfirmationProps {
    nextStep: ({userData, otpRequestData}: {userData?: RegistrationRequestModel,otpRequestData?: SendOTPRequestModel}) => void;
    prevStep: () => void;
    email: string;
    phone: string;
}

const SendConfirmation: React.FC<SendConfirmationProps> = ({ nextStep, prevStep, email, phone }) => {
    const [otpMethod, setOtpMethod] = useState<"phone" | "email">("email");
    const [errorMessage, setErrorMessage] = useState<string | undefined>();
    const [loading, setLoading] = useState(false);

    const handleSendOTP = async () => {
        setLoading(true);
        setErrorMessage(undefined);

        try {
            const requestData: SendOTPRequestModel = {
                phone: otpMethod === "phone" ? phone : undefined,
                email: otpMethod === "email" ? email : undefined,
            };

            const response = await sendOTP(requestData); // Call API to send OTP
            if(!response.otpSent) {
                setErrorMessage(response.message);
            } else {
                nextStep({otpRequestData: requestData}); // Proceed to the next step ONLY if OTP request succeeds
            }
        } catch (error) {
            setErrorMessage("An error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <WYSection sectionTitle={"OTP Verification"}>
            <Box className={""}>
                <Box className={"card-container-style"}>
                <Typography variant="h6" className={styles.subtitle}>Send Code</Typography>
                <Typography className={styles.description}>
                    How would you like to receive the code?
                </Typography>

                <FormControl component="fieldset">
                    <RadioGroup
                        value={otpMethod}
                        onChange={(e) => setOtpMethod(e.target.value as "phone" | "email")}
                        className={styles.radioGroup}
                    >
                        <WYRadio value="phone" label="Send to Phone" />
                        <WYRadio value="email" label="Send to Email" />
                    </RadioGroup>
                </FormControl>
            </Box>

            <FormErrorText error={errorMessage} />

            {loading && <CircularProgress size={20} color="inherit" />}
            <NavigationButtons
                nextLabel={"Next"}
                backLabel="Back"
                nextStep={handleSendOTP}
                prevStep={prevStep}
            />
        </Box>
        </WYSection>
    );
};

export default SendConfirmation;
