import React, { useState } from "react";
import { Box, Button, FormControl, RadioGroup, Typography } from "@mui/material";
import WYRadio from "../../../components/WYRadio/WYRadio";
import WYButton from "../../../components/WYButton/WYButton";
import styles from "./SendConfirmation.module.scss";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

interface SendConfirmationProps {
    nextStep: () => void;
    prevStep: () => void;
}

const SendConfirmation: React.FC<SendConfirmationProps> = ({ nextStep, prevStep }) => {
    const [otpMethod, setOtpMethod] = useState("email");

    return (
        <Box className={styles.container}>
            <Typography variant="h5" className={styles.title}>OTP Verification</Typography>

            <Box className={styles.card}>
                <Typography variant="h6" className={styles.subtitle}>Send Code</Typography>
                <Typography className={styles.description}>
                    How would you like to receive the code?
                </Typography>

                <FormControl component="fieldset">
                    <RadioGroup
                        value={otpMethod}
                        onChange={(e) => setOtpMethod(e.target.value)}
                        className={styles.radioGroup}
                    >
                        <WYRadio value="phone" label="Send to Phone" />
                        <WYRadio value="email" label="Send to Email" />
                    </RadioGroup>
                </FormControl>
            </Box>

<NavigationButtons nextLabel={"Next"} backLabel={"Back"} nextStep={nextStep} prevStep={prevStep}/>
        </Box>
    );
};

export default SendConfirmation;
