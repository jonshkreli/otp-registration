import React, {useState} from "react";
import {Box} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {RegistrationRequestModel, RegistrationResponseModel, SendOTPRequestModel} from "../../../models/Auth.model";
import WYTextField from "../../../components/WYTextField/WYTextField";
import WYSelect from "../../../components/WYSelect/WYSelect";
import WYCheckbox from "../../../components/WYCheckbox/WYCheckbox";
import WYPhoneInput from "../../../components/WYPhoneInput/WYPhoneInput";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import {registerUser} from "../../../api/auth";
import styles from "./UserDetails.module.scss";
import countriesFlags from "../../../constants/countiresFlags";
import {GENDERS} from "../../../constants/other";
import FormErrorText from "../../../components/FormErrorText";
import {emptyUserRegistrationValues} from "../../../constants/registration";
import WYSection from "../../../components/WYSection/WYSection";

interface UserDetailsProps {
    nextStep: ({userData, otpRequestData}: {userData?: RegistrationRequestModel,otpRequestData?: SendOTPRequestModel}) => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ nextStep }) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const formik = useFormik<RegistrationRequestModel>({
        initialValues: emptyUserRegistrationValues,
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required"),
            gender: Yup.string().required("Gender is required"),
            residenceCountry: Yup.string().required("Country of residence is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            phone: Yup.string().required("Phone number is required"),
            agreeToTerms: Yup.boolean()
                .oneOf([true], "You must accept terms")
                .required("You must accept terms"),
        }),
        validateOnMount: true,
        onSubmit: async (values) => {
            console.log("Form Submission Triggered", values);
            setLoading(true);
            setErrorMessage(null);
            try {
                const result: RegistrationResponseModel = await registerUser(values);
                console.log("API Response:", result);
                if (result.userId) {
                    nextStep({userData: values});
                } else {
                    setErrorMessage(result.message || "Registration failed. Please try again.");
                }
            } catch (error) {
                console.error("API Error:", error);
                setErrorMessage("An error occurred. Please try again.");
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <Box className={styles.container}>
            <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
                <WYSection sectionTitle={"User Details"}>
                    <Box className={styles.namesContainer}>
                        <Box className={styles.inputGroup}>
                            <WYTextField
                                labelText="First Name"
                                placeholder="Enter first name"
                                tooltipText="Your name"
                                required
                                {...formik.getFieldProps("firstName")}
                            />
                            <FormErrorText error={formik.touched.firstName ? formik.errors.firstName : ""} />
                        </Box>

                        <Box className={styles.inputGroup}>
                            <WYTextField
                                labelText="Last Name"
                                placeholder="Enter last name"
                                tooltipText="Your name"
                                required
                                {...formik.getFieldProps("lastName")}
                            />
                            <FormErrorText error={formik.touched.lastName ? formik.errors.lastName : ""} />
                        </Box>
                    </Box>

                    <Box className={styles.inputGroup}>
                        <WYSelect
                            labelText="Gender"
                            name="gender"
                            required
                            placeholder="Select gender..."
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            options={GENDERS}
                        />
                        <FormErrorText error={formik.touched.gender ? formik.errors.gender : ""} />
                    </Box>

                    <Box className={styles.inputGroup}>
                        <WYSelect
                            labelText="Your Residence Country"
                            name="residenceCountry"
                            required
                            placeholder="Select residence country..."
                            value={formik.values.residenceCountry}
                            onChange={formik.handleChange}
                            options={countriesFlags}
                        />
                        <FormErrorText error={formik.touched.residenceCountry ? formik.errors.residenceCountry : ""} />
                    </Box>

                </WYSection>

                <WYSection sectionTitle={"Contact Details"}>
                    <Box className={styles.inputGroup}>
                        <WYTextField labelText="Email" type="email" required {...formik.getFieldProps("email")} />
                        <FormErrorText error={formik.touched.email ? formik.errors.email : ""} />
                    </Box>

                    <Box className={styles.inputGroup}>
                        <WYPhoneInput
                            labelText="Phone Number"
                            name="phone"
                            required
                            value={formik.values.phone}
                            onChange={(value) => formik.setFieldValue("phone", value)}
                        />
                        <FormErrorText error={formik.touched.phone ? formik.errors.phone : ""} />
                    </Box>
                </WYSection>

                <Box className={styles.inputGroup}>
                    <WYCheckbox
                        label="I agree to the terms and conditions and privacy policy"
                        name="agreeToTerms"
                        checked={formik.values.agreeToTerms}
                        onChange={(event) => formik.setFieldValue("agreeToTerms", event.target.checked)}
                    />
                    <FormErrorText error={formik.touched.agreeToTerms ? formik.errors.agreeToTerms : ""} />
                </Box>

                {errorMessage && <FormErrorText error={errorMessage} />}

                <NavigationButtons
                    nextLabel={loading ? "Processing..." : "Next"}
                    backLabel="Back"
                    nextStep={formik.handleSubmit}
                />
            </form>
        </Box>
    );
};

export default UserDetails;
