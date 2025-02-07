import React from "react";
import { FormControlLabel, Radio, RadioProps } from "@mui/material";

interface WYRadioProps extends RadioProps {
    label: string;
}

const WYRadio: React.FC<WYRadioProps> = ({ label, ...props }) => {
    return <FormControlLabel control={<Radio {...props} />} label={label} />;
};

export default WYRadio;
