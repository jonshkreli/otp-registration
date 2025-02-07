// Base API URL (Change this to your actual API URL)
export const API_BASE_URL = ""; // already in proxy

// Authentication Endpoints
export const REGISTER_ENDPOINT = `${API_BASE_URL}/register`;
export const REGISTER_ENDPOINT_ERROR = `${API_BASE_URL}/register-error`;
export const LOGIN_ENDPOINT = `${API_BASE_URL}/login`;
export const FORGOT_PASSWORD_ENDPOINT = `${API_BASE_URL}/auth/forgot-password`;
export const SEND_OTP_ENDPOINT = `${API_BASE_URL}/send-otp`;
export const SEND_OTP_ENDPOINT_ERROR = `${API_BASE_URL}/send-otp-error`;
export const VERIFY_OTP_ENDPOINT = `${API_BASE_URL}/verify-otp`;
export const VERIFY_OTP_ENDPOINT_ERROR = `${API_BASE_URL}/verify-otp-error`;

// User Endpoints
export const USER_PROFILE_ENDPOINT = `${API_BASE_URL}/user/profile`;
export const UPDATE_PROFILE_ENDPOINT = `${API_BASE_URL}/user/update`;
export const DELETE_ACCOUNT_ENDPOINT = `${API_BASE_URL}/user/delete`;
