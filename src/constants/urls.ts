// Base API URL (Change this to your actual API URL)
export const API_BASE_URL = "https://api.example.com";

// Authentication Endpoints
export const REGISTER_ENDPOINT = `${API_BASE_URL}/auth/register`;
export const LOGIN_ENDPOINT = `${API_BASE_URL}/auth/login`;
export const FORGOT_PASSWORD_ENDPOINT = `${API_BASE_URL}/auth/forgot-password`;
export const SEND_OTP_ENDPOINT = `${API_BASE_URL}/auth/send-otp`;
export const VERIFY_OTP_ENDPOINT = `${API_BASE_URL}/auth/verify-otp`;

// User Endpoints
export const USER_PROFILE_ENDPOINT = `${API_BASE_URL}/user/profile`;
export const UPDATE_PROFILE_ENDPOINT = `${API_BASE_URL}/user/update`;
export const DELETE_ACCOUNT_ENDPOINT = `${API_BASE_URL}/user/delete`;
