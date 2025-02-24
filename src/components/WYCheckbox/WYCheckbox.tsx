﻿import React from "react";
import {Checkbox, CheckboxProps, FormControlLabel} from "@mui/material";

interface WYCheckboxProps extends CheckboxProps {
  label: string;
}

const WYCheckbox: React.FC<WYCheckboxProps> = ({ label, ...props }) => {
  return <FormControlLabel control={<Checkbox {...props} />} label={label} />;
};

export default WYCheckbox;
