import React, {useEffect, useState} from "react";
import {Autocomplete, Box, IconButton, TextField, Tooltip} from "@mui/material";
import styles from "./WYPhoneInput.module.scss";
import countriesFlags from "../../constants/countiresFlags";
import {ArrowDropDown, InfoOutlined, QuestionMark, Search} from "@mui/icons-material";
import {Country} from "../../models/Country";

interface WYPhoneInputProps {
    labelText: string;
    name: string;
    required?: boolean;
    value: string;
    onChange: (value: string) => void;
    tooltipText?: string;
}

const WYPhoneInput: React.FC<WYPhoneInputProps> = ({ labelText, name, required, value, onChange, tooltipText }) => {
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(countriesFlags.find(c => c.value === (value)) || countriesFlags[0]); // 🇦🇪 Default: UAE
    const [showCountrySelect, setShowCountrySelect] = useState(false);

    useEffect(() => {
        if (value.startsWith("+")) {
            const phoneCode = value.split(" ")[0].replace("+", ""); // Extract country code
            const matchingCountry = countriesFlags.find(country => country.phone === phoneCode) || null;

            // if (matchingCountry && matchingCountry.code !== selectedCountry?.code) {
                setSelectedCountry(matchingCountry);
            // }
        }
    }, [value]);


    const handleCountryChange = (country: Country | null) => {
        setSelectedCountry(country);
        setShowCountrySelect(false);

        if (country) {
            onChange(`+${country.phone} `);
        }
    };

    return (
        <Box className={styles.phoneInputContainer}>
            <div className={styles.labelContainer}>
                <span>{labelText} {required && <span className={styles.required}>*</span>}</span>
                {tooltipText && (
                    <Tooltip title={tooltipText} arrow>
                        <InfoOutlined className={styles.infoIcon}/>
                    </Tooltip>
                )}
            </div>
            <TextField
                fullWidth
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter phone number"
                className={styles.phoneField}
                InputProps={{
                    startAdornment: (
                        <IconButton onClick={() => setShowCountrySelect(true)} className={styles.flagButton}>
                            {selectedCountry ?
                                <img
                                    src={selectedCountry.flag}
                                    alt="flag"
                                    className={styles.flagIcon}
                                /> :
                                <QuestionMark/>
                            }

                            <ArrowDropDown/>
                        </IconButton>
                    ),
                }}
            />

            {showCountrySelect && (
                <Box className={styles.countrySelectContainer}>
                    <Autocomplete
                        options={countriesFlags}
                        getOptionLabel={(option) => `${option.label} (+${option.phone})`}
                        value={selectedCountry || null}
                        onChange={(_, newValue) => handleCountryChange(newValue)}
                        open={showCountrySelect}
                        renderOption={(props, option) => (
                            <li {...props} key={option.value}>
                                <img src={option.flag} alt="" style={{ width: 24, height: 16, marginRight: 8 }} />
                                {option.label} (+{option.phone})
                            </li>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder={"Search"}
                                variant="outlined"
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: <>
                                        <Search/>
                                    </>,
                                }}
                            />
                        )}
                    />
                </Box>
            )}
        </Box>
    );
};


export default WYPhoneInput;

