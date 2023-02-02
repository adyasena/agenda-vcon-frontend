import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = (redirectEndpointFallback = "/vcon-login") => {
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
    }, []);
};