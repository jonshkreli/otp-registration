import React from "react";
import {Box} from "@mui/material";
import WYButton from "../../../components/WYButton/WYButton";
import styles from "./NavigationButtons.module.scss";

interface SendConfirmationProps {
    nextLabel: string;
    backLabel: string;
    nextStep?: () => void;
    prevStep?: () => void;
}

const SendConfirmation: React.FC<SendConfirmationProps> = ({ prevStep, nextStep, nextLabel, backLabel }) => {

    return (
        <Box className={styles.buttonContainer}>
            {prevStep && <WYButton onClick={prevStep} variant="outlined" >{backLabel}</WYButton>}
            {nextStep && <WYButton onClick={nextStep} variant="contained" >{nextLabel}</WYButton>}
        </Box>
    );
};

export default SendConfirmation;
