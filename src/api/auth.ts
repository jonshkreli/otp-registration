import axios from "axios";
import {
    RegistrationRequestModel,
    RegistrationResponseModel,
    SendOTPRequestModel,
    SendOTPResponseModel,
    VerifyOTPRequestModel,
    VerifyOTPResponseModel,
} from "../models/Auth.model";
import {
    FORGOT_PASSWORD_ENDPOINT,
    REGISTER_ENDPOINT,
    REGISTER_ENDPOINT_ERROR,
    SEND_OTP_ENDPOINT,
    VERIFY_OTP_ENDPOINT
} from "../constants/urls";

export const registerUser = async (data: RegistrationRequestModel): Promise<RegistrationResponseModel> => {
    if(data.residenceCountry !== "AE") {
        const response = await axios.post<RegistrationResponseModel>(REGISTER_ENDPOINT_ERROR, data);
        return response.data;
    } else {
        const response = await axios.post<RegistrationResponseModel>(REGISTER_ENDPOINT, data);
        return response.data;
    }
};

export const sendOTP = async (data: SendOTPRequestModel): Promise<SendOTPResponseModel> => {
    const response = await axios.post<SendOTPResponseModel>(SEND_OTP_ENDPOINT, data);
    return response.data;
};

export const verifyOTP = async (data: VerifyOTPRequestModel): Promise<VerifyOTPResponseModel> => {
    const response = await axios.post<VerifyOTPResponseModel>(VERIFY_OTP_ENDPOINT, data);
    return response.data;
};
