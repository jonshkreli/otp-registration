import React from "react";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import styles from "./WYRadioGroup.module.scss";

interface WYRadioGroupProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    options: { value: string; label: string }[];
}

const WYRadioGroup: React.FC<WYRadioGroupProps> = ({value, onChange, options, ...props}) => {
    return (
        <FormControl component="fieldset" className={styles.radioGroup}>
            <RadioGroup value={value} onChange={onChange}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            gap: "16px",
                        }}
            >
                {options.map((option) => (
                    <FormControlLabel value={option.value} key={option.value} className={styles.checkboxGroup}
                                      control={<Radio {...props} />} label={option.label}/>
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default WYRadioGroup;
