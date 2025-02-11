import React, { useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import WYButton from "../../../components/WYButton/WYButton";
import WYTextField from "../../../components/WYTextField/WYTextField";
import styles from "./SubmitConfirmation.module.scss";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

interface SubmitConfirmationProps {
    prevStep: () => void;
    nextStep: () => void;
}

const SubmitConfirmation: React.FC<SubmitConfirmationProps> = ({ prevStep, nextStep }) => {
    const [otp, setOtp] = useState(["", "", "", ""]);

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    return (
        <Box className={styles.container}>
            <Typography variant="h5" className={styles.title}>OTP Verification</Typography>

            <Box className={styles.card}>
                <Typography variant="h6" className={styles.subtitle}>Please check your email.</Typography>
                <Typography className={styles.description}>
                    We've sent a code to <b>anton@gmail.com</b>
                </Typography>

                {/*<Box className={styles.otpContainer}>*/}
                {/*    {otp.map((digit, index) => (*/}
                {/*        <WYTextField*/}
                {/*            key={index}*/}
                {/*            value={digit}*/}
                {/*            onChange={(e) => handleChange(index, e.target.value)}*/}
                {/*            className={styles.otpInput}*/}
                {/*        />*/}
                {/*    ))}*/}
                {/*</Box>*/}

                <Typography className={styles.resendText}>
                    Didn’t get a code? <Link href="#">Click to resend.</Link>
                </Typography>
            </Box>

            <NavigationButtons nextLabel={"Next"} backLabel={"Back"} nextStep={nextStep} prevStep={prevStep}/>
        </Box>
    );
};

export default SubmitConfirmation;
