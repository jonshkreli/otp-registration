import React, { useState } from "react";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    RegistrationRequestModel,
    RegistrationResponseModel,
    SendOTPRequestModel
} from "../../../models/Auth.model";
import WYTextField from "../../../components/WYTextField/WYTextField";
import WYSelect from "../../../components/WYSelect/WYSelect";
import WYCheckbox from "../../../components/WYCheckbox/WYCheckbox";
import WYPhoneInput from "../../../components/WYPhoneInput/WYPhoneInput";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import { registerUser } from "../../../api/auth";
import styles from "./UserDetails.module.scss";
import countriesFlags from "../../../constants/countiresFlags";
import { GENDERS } from "../../../constants/other";
import FormErrorText from "../../../components/FormErrorText/FormErrorText";
import { emptyUserRegistrationValues } from "../../../constants/registration";
import WYSection from "../../../components/WYSection/WYSection";
import { translate } from "../../../config/i18n";
import {useTranslation} from "react-i18next";

interface UserDetailsProps {
    nextStep: ({ userData, otpRequestData }: { userData?: RegistrationRequestModel, otpRequestData?: SendOTPRequestModel }) => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ nextStep }) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    const formik = useFormik<RegistrationRequestModel>({
        initialValues: emptyUserRegistrationValues,
        validationSchema: Yup.object({
            firstName: Yup.string().required(translate("registration.UserDetails.errors.firstNameRequired")),
            lastName: Yup.string().required(translate("registration.UserDetails.errors.lastNameRequired")),
            gender: Yup.string().required(translate("registration.UserDetails.errors.genderRequired")),
            residenceCountry: Yup.string().required(translate("registration.UserDetails.errors.countryRequired")),
            email: Yup.string().email(translate("registration.UserDetails.errors.emailInvalid")).required(translate("registration.UserDetails.errors.emailRequired")),
            phone: Yup.string().required(translate("registration.UserDetails.errors.phoneRequired")),
            agreeToTerms: Yup.boolean()
                .oneOf([true], translate("registration.UserDetails.errors.termsRequired"))
                .required(translate("registration.UserDetails.errors.termsRequired")),
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
                    nextStep({ userData: values });
                } else {
                    setErrorMessage(result.message || translate("registration.UserDetails.errors.registrationFailed"));
                }
            } catch (error) {
                console.error("API Error:", error);
                setErrorMessage(translate("registration.UserDetails.errors.general"));
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <Box className={styles.container}>
            <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
                <WYSection sectionTitle={translate("registration.UserDetails.section1.title")}>
                    <Box className={styles.namesContainer}>
                        <Box className={styles.inputGroup}>
                            <WYTextField
                                labelText={translate("registration.UserDetails.section1.firstNameLabel")}
                                placeholder={translate("registration.UserDetails.section1.firstNamePlaceholder")}
                                tooltipText={translate("registration.UserDetails.tooltips.firstNameLabel")}
                                required
                                {...formik.getFieldProps("firstName")}
                            />
                            <FormErrorText error={formik.touched.firstName ? formik.errors.firstName : ""} />
                        </Box>

                        <Box className={styles.inputGroup}>
                            <WYTextField
                                labelText={translate("registration.UserDetails.section1.lastNameLabel")}
                                placeholder={translate("registration.UserDetails.section1.lastNamePlaceholder")}
                                tooltipText={translate("registration.UserDetails.section1.lastNameTooltip")}
                                required
                                {...formik.getFieldProps("lastName")}
                            />
                            <FormErrorText error={formik.touched.lastName ? formik.errors.lastName : ""} />
                        </Box>
                    </Box>

                    <Box className={styles.inputGroup}>
                        <WYSelect
                            labelText={translate("registration.UserDetails.section1.genderLabel")}
                            placeholder={translate("registration.UserDetails.section1.genderPlaceholder")}
                            tooltipText={translate("registration.UserDetails.section1.genderLabel")}
                            name="gender"
                            required
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            options={GENDERS}
                        />
                        <FormErrorText error={formik.touched.gender ? formik.errors.gender : ""} />
                    </Box>

                    <Box className={styles.inputGroup}>
                        <WYSelect
                            labelText={translate("registration.UserDetails.section1.countryLabel")}
                            placeholder={translate("registration.UserDetails.section1.countryPlaceholder")}
                            tooltipText={translate("registration.UserDetails.section1.countryLabel")}
                            name="residenceCountry"
                            required
                            value={formik.values.residenceCountry}
                            onChange={formik.handleChange}
                            options={countriesFlags}
                        />
                        <FormErrorText error={formik.touched.residenceCountry ? formik.errors.residenceCountry : ""} />
                    </Box>

                </WYSection>

                <WYSection sectionTitle={translate("registration.UserDetails.section2.title")}>
                    <Box className={styles.inputGroup}>
                        <WYTextField
                            labelText={translate("registration.UserDetails.section2.emailLabel")}
                            placeholder={translate("registration.UserDetails.section2.emailPlaceholder")}
                            tooltipText={translate("registration.UserDetails.section2.emailLabel")}
                            type="email"
                            required
                            {...formik.getFieldProps("email")}
                        />
                        <FormErrorText error={formik.touched.email ? formik.errors.email : ""} />
                    </Box>

                    <Box className={styles.inputGroup}>
                        <WYPhoneInput
                            labelText={translate("registration.UserDetails.section2.phoneLabel")}
                            placeholder={translate("registration.UserDetails.section2.phonePlaceholder")}
                            placeholderForSearch={translate("registration.UserDetails.phoneSearchPlaceholder")}
                            tooltipText={translate("registration.UserDetails.section2.phoneLabel")}
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
                        label={translate("registration.UserDetails.agreeToTerms")}
                        name="agreeToTerms"
                        checked={formik.values.agreeToTerms}
                        onChange={(event) => formik.setFieldValue("agreeToTerms", event.target.checked)}
                    />
                    <FormErrorText error={formik.touched.agreeToTerms ? formik.errors.agreeToTerms : ""} />
                </Box>

                {errorMessage && <FormErrorText error={errorMessage} />}

                <NavigationButtons
                    nextLabel={loading ? translate("registration.UserDetails.buttons.processing") : translate("registration.UserDetails.buttons.next")}
                    nextStep={formik.handleSubmit}
                />
            </form>
        </Box>
    );
};

export default UserDetails;
