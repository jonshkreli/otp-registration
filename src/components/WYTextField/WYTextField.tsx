import React from "react";
import { TextField, TextFieldProps, Tooltip } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import styles from "./WYTextField.module.scss";

type WYTextFieldProps = TextFieldProps & {
    labelText: string;
    required?: boolean;
    tooltipText?: string;
    placeholder?: string;
};

const WYTextField: React.FC<WYTextFieldProps> = ({ labelText, required, tooltipText, placeholder, ...props }) => {
    return (
        <div className={styles.wyTextFieldContainer}>
            {/* Label with Required Indicator & Tooltip */}
            <div className={styles.labelContainer}>
                <span>{labelText} {required && <span className={styles.required}>*</span>}</span>
                {tooltipText && (
                    <Tooltip title={tooltipText} arrow>
                        <InfoOutlined className={styles.infoIcon} />
                    </Tooltip>
                )}
            </div>

            {/* Input Field with Placeholder */}
            <TextField
                className={styles.inputField}
                fullWidth
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

export default WYTextField;
