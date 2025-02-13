import React from "react";
import {TextField, TextFieldProps, Tooltip} from "@mui/material";
import {InfoOutlined} from "@mui/icons-material";
import clsx from "clsx";
import styles from "./WYTextField.module.scss";

type WYTextFieldProps = TextFieldProps & {
    labelText?: string;
    required?: boolean;
    tooltipText?: string;
    placeholder?: string;
    otpStyle?: boolean
};

const WYTextField: React.FC<WYTextFieldProps> = ({ labelText, required, tooltipText, placeholder, otpStyle, ...props }) => {
    return (
        <div className={styles.wyTextFieldContainer}>
            {/* Label with Required Indicator & Tooltip */}
            {labelText && <div className={styles.labelContainer}>
                <span>{labelText} {required && <span className={styles.required}>*</span>}</span>
                {tooltipText && (
                    <Tooltip title={tooltipText} arrow>
                        <InfoOutlined className={styles.infoIcon}/>
                    </Tooltip>
                )}
            </div>}

            {/* Input Field with Placeholder */}
            <TextField
                InputProps={{
                    className: clsx(styles.inputField, { [styles.otpInput]: otpStyle }),
                }}
                inputProps={{
                    maxLength: otpStyle ? 1 : undefined,
                }}
                fullWidth
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

export default WYTextField;
