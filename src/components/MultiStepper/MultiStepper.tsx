import React from "react";
import {Box} from "@mui/material";
import StepperHeader from "./StepperHeader/StepperHeader";

export interface MultiStepperProps {
    pageTitle: string;
    stepsDetails: StepConfig[];
    components: React.ReactNode[]
    activeStep: number;
}

const MultiStepper: React.FC<MultiStepperProps> = ({ pageTitle, stepsDetails, components, activeStep }) => {
    const totalSteps = components.length;

    return (
        <Box
             sx={{
                 display: "flex",
                 flexDirection: "column",
                 justifyContent: "center",
                 minHeight: "100vh",
                 px: { xs: 2, sm: 4, md: 6 },
                 maxWidth: { xs: "100%", sm: "600px", md: "800px" },
                 mx: "auto",
                 backgroundColor: "background.default",
             }}
        >

            <StepperHeader currentStep={activeStep} totalSteps={totalSteps} pageTitle={pageTitle} description={stepsDetails[activeStep-1].description} />

            <Box sx={{ mt: 4 }}>{components[activeStep-1]}</Box>
        </Box>
    );
};

export interface StepConfig {
    step: number;
    description: string;
}



export default MultiStepper;
