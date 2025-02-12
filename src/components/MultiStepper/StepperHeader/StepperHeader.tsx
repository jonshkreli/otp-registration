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
                <p className={styles.title}>{pageTitle}</p>
                <p className={styles.stepIndicator}>
                    Step {currentStep} of {totalSteps}
                </p>
            </div>
            <p className={styles.description}>
                {description}
            </p>
        </div>
    );
};

export default StepperHeader;
