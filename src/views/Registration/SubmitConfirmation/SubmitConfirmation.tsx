import React, {useCallback, useMemo, useState} from "react";
import {Box, Typography, Link, CircularProgress} from "@mui/material";
import WYButton from "../../../components/WYButton/WYButton";
import WYTextField from "../../../components/WYTextField/WYTextField";
import styles from "./SubmitConfirmation.module.scss";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import {SendOTPRequestModel} from "../../../models/Auth.model";
import {sendOTP} from "../../../api/auth";
import FormErrorText from "../../../components/FormErrorText";
import WYSection from "../../../components/WYSection/WYSection";

interface SubmitConfirmationProps {
    prevStep: () => void,
    nextStep: () => void,
    verificationData: SendOTPRequestModel
}

const SubmitConfirmation: React.FC<SubmitConfirmationProps> = ({prevStep, nextStep, verificationData}) => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [errorMessage, setErrorMessage] = useState<string | undefined>();
    const [loading, setLoading] = useState(false);

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    // extract key and value from verification data
    const {origin, value} = useMemo(() => {
        const { email, phone } = verificationData;

        return email
            ? { origin: "email", value: email }
            : { origin: "phone", value: phone };
    }, [verificationData]);

    const handleSendOTP = useCallback(async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        setLoading(true);
        setErrorMessage(undefined);

        try {
            const response = await sendOTP(verificationData);
            if (!response.otpSent) {
                setErrorMessage(response.message);
            }
        } catch (error) {
            setErrorMessage("An error occurred.");
        } finally {
            setLoading(false);
        }
    }, [verificationData]);

    return (
        <WYSection sectionTitle={"OTP Verification"}>
            <Box className={""}>
                <Box className={"card-container-style"}>
                    <Typography variant="h6" className={styles.subtitle}>Please check your {origin}.</Typography>
                    <Typography className={styles.description}>
                        We've sent a code to <b>{value}</b>
                    </Typography>

                    <Box className={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <WYTextField
                                key={index}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                otpStyle
                            />
                        ))}
                    </Box>

                    <Typography className={styles.resendText}>
                        Didn’t get a code? <Link onClick={handleSendOTP} href="#">Click to resend.</Link>
                    </Typography>
                </Box>

                <FormErrorText error={errorMessage} />
                {loading && <CircularProgress size={20} color="inherit" />}

                <NavigationButtons nextLabel={"Next"} backLabel={"Back"} nextStep={nextStep} prevStep={prevStep}/>
            </Box>
        </WYSection>
    );
};

export default SubmitConfirmation;
