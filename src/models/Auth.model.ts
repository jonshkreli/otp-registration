export interface RegistrationRequestModel {
    firstName: string;
    lastName: string;
    gender: "Male" | "Female";
    residenceCountry: string;
    email: string;
    phone: string;
    agreeToTerms: boolean;
}

export interface RegistrationResponseModel {
    message: string;
    userId: string;
}

export interface SendOTPRequestModel {
    email?: string; // Email where OTP should be sent
    phone?: string; // Phone number where OTP should be sent
}

export interface SendOTPResponseModel {
    message: string;
    otpSent: boolean;
}

export interface VerifyOTPRequestModel {
    email: string;
    otp: string; // OTP code entered by the user
}

export interface VerifyOTPResponseModel {
    message: string;
    success: boolean;
    accessToken?: string; // Optional: If OTP verification logs in the user
    refreshToken?: string; // Optional: If OTP verification provides session tokens
}
