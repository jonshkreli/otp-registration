import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectProps, Tooltip } from "@mui/material";
import styles from "../WYTextField/WYTextField.module.scss";
import { InfoOutlined } from "@mui/icons-material";
import {Country} from "../../models/Country";

interface WYSelectProps extends Omit<SelectProps, "children"> {
    labelText: string;
    required?: boolean;
    tooltipText?: string;
    placeholder?: string;
    options: {value: string, label: string}[];
}

const WYSelect: React.FC<WYSelectProps> = ({
                                               labelText, options, required, tooltipText, placeholder, value, ...props
                                           }) => {
    return (
        <FormControl fullWidth>
            {/* Label and Tooltip */}
            <div className={styles.labelContainer}>
        <span>
          {labelText} {required && <span className={styles.required}>*</span>}
        </span>
                {tooltipText && (
                    <Tooltip title={tooltipText} arrow>
                        <InfoOutlined className={styles.infoIcon} />
                    </Tooltip>
                )}
            </div>

            {/* Select Input */}
            <Select {...props} value={value || ""} displayEmpty>
                {placeholder && (
                    <MenuItem value="" disabled>
                        {placeholder}
                    </MenuItem>
                )}
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default WYSelect;
