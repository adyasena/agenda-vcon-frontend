import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer";

export const useLogin = (redirectEndpointFallback = "/") => {
    const navigate = useNavigate();

    const redirect = () => {
        navigate(redirectEndpointFallback, {replace: true});
    };

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            redirect();
            return;
        }

        const payloadB64 = accessToken.split(".")[1];
        const payloadBuffer = Buffer.from(payloadB64, "base64");
        const payload = JSON.parse(payloadBuffer.toString("utf-8"));

        const expDate = new Date(payload.exp * 1000);
        const now = new Date();

        if (expDate < now) {
            redirect();
        }
    }, []);
};