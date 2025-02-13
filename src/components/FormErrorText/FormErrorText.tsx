import React from "react";
import {Typography} from "@mui/material";
import styles from "./FormErrorText.module.scss";

interface FormErrorTextProps {
    error?: string;
}

const FormErrorText: React.FC<FormErrorTextProps> = ({ error }) => {
    if (!error) return null; // If no error, don't render anything

    return <Typography className={styles.errorText}>{error}</Typography>;
};

export default FormErrorText;
