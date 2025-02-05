import React from "react";
import { TextField, Button, MenuItem, Checkbox, FormControlLabel, Select, InputLabel, FormControl, Box, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationForm: React.FC = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            gender: "",
            residenceCountry: "",
            email: "",
            phone: "",
            agreeToTerms: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            gender: Yup.string().required("Required"),
            residenceCountry: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            phone: Yup.string().required("Required"),
            agreeToTerms: Yup.boolean().oneOf([true], "You must accept terms"),
        }),
        onSubmit: async (values) => {
            try {
                await axios.post("https://your-mockable.io/register", values);
                navigate("/otp-verification");
            } catch (error) {
                console.error("Registration failed", error);
            }
        },
    });

    return (
        <Box sx={{ maxWidth: 500, mx: "auto", p: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h5">Registration</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField fullWidth label="First Name" {...formik.getFieldProps("firstName")} sx={{ my: 2 }} />
                <TextField fullWidth label="Last Name" {...formik.getFieldProps("lastName")} sx={{ my: 2 }} />
                <FormControl fullWidth sx={{ my: 2 }}>
                    <InputLabel>Gender</InputLabel>
                    <Select {...formik.getFieldProps("gender")}>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ my: 2 }}>
                    <InputLabel>Residence Country</InputLabel>
                    <Select {...formik.getFieldProps("residenceCountry")}>
                        <MenuItem value="UAE">UAE</MenuItem>
                        <MenuItem value="USA">USA</MenuItem>
                    </Select>
                </FormControl>
                <TextField fullWidth label="Email" type="email" {...formik.getFieldProps("email")} sx={{ my: 2 }} />
                <TextField fullWidth label="Phone Number" {...formik.getFieldProps("phone")} sx={{ my: 2 }} />
                <FormControlLabel control={<Checkbox {...formik.getFieldProps("agreeToTerms")} />} label="I agree to the terms" />
                <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>Next</Button>
            </form>
        </Box>
    );
};

export default RegistrationForm;
