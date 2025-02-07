import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./StepperHeader.module.scss";

interface StepperHeaderProps {
    currentStep: number;
    totalSteps: number;
    pageTitle: string;
    description: string;
}

const StepperHeader: React.FC<StepperHeaderProps> = ({ currentStep, totalSteps, description, pageTitle }) => {
    return (
        <div className={styles.container}>
            <div className={styles.row1}>
                <Typography variant="h4" className={styles.title}>{pageTitle}</Typography>
                <Typography variant="body1" className={styles.stepIndicator}>
                    Step {currentStep} of {totalSteps}
                </Typography>
            </div>
            <Typography variant="body2" className={styles.description}>
                {description}
            </Typography>
        </div>
    );
};

export default StepperHeader;
