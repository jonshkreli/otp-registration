import React, { useCallback, useMemo, useRef, useState } from "react";
import { Box, Typography, Link, CircularProgress } from "@mui/material";
import WYTextField from "../../../components/WYTextField/WYTextField";
import styles from "./SubmitConfirmation.module.scss";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import { SendOTPRequestModel } from "../../../models/Auth.model";
import { sendOTP } from "../../../api/auth";
import FormErrorText from "../../../components/FormErrorText";
import WYSection from "../../../components/WYSection/WYSection";

interface SubmitConfirmationProps {
    prevStep: () => void;
    nextStep: () => void;
    verificationData: SendOTPRequestModel;
}

const SubmitConfirmation: React.FC<SubmitConfirmationProps> = ({
                                                                   prevStep,
                                                                   nextStep,
                                                                   verificationData,
                                                               }) => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [errorMessage, setErrorMessage] = useState<string | undefined>();
    const [loading, setLoading] = useState(false);

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    /** ✅ Automatically shifts focus when typing or backspacing */
    const handleChange = (index: number, value: string) => {
        console.log("value", value);
        if (!value.match(/^[0-9]$/)) return; // Only allow single digit

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next field
        if (value && index < otp.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    /** ✅ Handles backspace */
    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLDivElement>) => {
        console.log(index, e.key)
        if (e.key === "Backspace") {
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);

            // Move to previous field
            if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        } else if(otp[index]) {
            // go type in the next input
            if (index < otp.length - 1) {
                // inputRefs.current[index + 1]?.focus();
                handleChange(index + 1, e.key);
            }
        }
    };

    // Extract key and value from verification data
    const { origin, value } = useMemo(() => {
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
            <Box>
                <Box className={"card-container-style"}>
                    <Typography className={styles.subtitle}>Please check your {origin}.</Typography>
                    <Typography className={styles.description}>
                        We've sent a code to <b>{value}</b>
                    </Typography>

                    <Box className={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <WYTextField
                                key={index}
                                value={digit}
                                inputRef={(el) => (inputRefs.current[index] = el)}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
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

                <NavigationButtons
                    nextLabel={"Next"}
                    backLabel={"Back"}
                    nextStep={() => {
                        //if we have other page
                        //nextStep()
                    }}
                    prevStep={prevStep}
                />
            </Box>
        </WYSection>
    );
};

export default SubmitConfirmation;
