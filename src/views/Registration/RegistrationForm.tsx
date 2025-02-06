import React from "react";
import { Box, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import WYButton from "../../components/WYButton/WYButton";
import WYTextField from "../../components/WYTextField/WYTextField";
import WYSelect from "../../components/WYSelect/WYSelect";
import WYCheckbox from "../../components/WYCheckbox/WYCheckbox";
import { RegistrationFormModel } from "../../models/RegistrationForm.model";
import "../../styles.scss";

const RegistrationForm: React.FC = () => {
    const formik = useFormik<RegistrationFormModel>({
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
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Box className="container">
            <Typography variant="h4" fontWeight={600} marginBottom={2} textAlign="center">
                Registration
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" marginBottom={3} textAlign="center">
                Please enter your information to create your account.
            </Typography>

            <Typography variant="h6" fontWeight={600} marginBottom={1}>
                Personal Info
            </Typography>

            <form onSubmit={formik.handleSubmit} className="form-container">
                <WYTextField label="First Name" {...formik.getFieldProps("firstName")} sx={{ my: 2 }} />
                <WYTextField label="Last Name" {...formik.getFieldProps("lastName")} sx={{ my: 2 }} />

                <WYSelect
                    label="Gender"
                    options={[
                        { value: "Male", label: "Male" },
                        { value: "Female", label: "Female" },
                    ]}
                    {...formik.getFieldProps("gender")}
                    sx={{ my: 2 }}
                />

                <WYSelect
                    label="Your Residence Country"
                    options={[
                        { value: "UAE", label: "United Arab Emirates" },
                        { value: "USA", label: "United States" },
                        { value: "UK", label: "United Kingdom" },
                    ]}
                    {...formik.getFieldProps("residenceCountry")}
                    sx={{ my: 2 }}
                />

                <Typography variant="h6" fontWeight={600} marginBottom={1}>
                    Contact Details
                </Typography>

                <WYTextField label="Email" type="email" {...formik.getFieldProps("email")} sx={{ my: 2 }} />
                <WYTextField label="Phone Number" {...formik.getFieldProps("phone")} sx={{ my: 2 }} />

                <WYCheckbox
                    label="I agree to the terms and conditions and privacy policy"
                    {...formik.getFieldProps("agreeToTerms")}
                    checked={formik.values.agreeToTerms}
                    sx={{ my: 2 }}
                />

                <Box className="button-container">
                    <WYButton type="submit">NEXT</WYButton>
                </Box>
            </form>
        </Box>
    );
};

export default RegistrationForm;
