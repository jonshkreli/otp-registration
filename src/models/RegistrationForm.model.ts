export interface RegistrationFormModel {
    firstName: string;
    lastName: string;
    gender: "Male" | "Female" | "";  // Enums can be used here as well
    residenceCountry: string;
    email: string;
    phone: string;
    agreeToTerms: boolean;
}
