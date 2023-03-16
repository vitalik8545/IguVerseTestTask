import * as Facebook from "expo-auth-session/providers/facebook";
import {useEffect} from "react";

const useFacebookLogin = (setAuth) => {
    const [request, response, promptAsync] = Facebook.useAuthRequest({
        clientId: "1322259044452040",
    });

    useEffect(() => {
        if (response?.type === "success") {
            setAuth(response.authentication);
        }
    }, [response]);

    const openLoginModal = ()=>promptAsync({ useProxy: false, showInRecents: true });

    return {
        openLoginModal,
        isLoading: !request
    }
}

export default useFacebookLogin
