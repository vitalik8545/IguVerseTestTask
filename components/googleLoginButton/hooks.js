import * as Google from "expo-auth-session/providers/google";
import {useEffect} from "react";

const useGoogleLogin = (setAuth) => {
    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: "624607133279-cfi83j4uoitjj1s33jibr39dh682nktd.apps.googleusercontent.com",
        androidClientId: "624607133279-5n397satuh0qte4buvqmv81ik2nn2gn4.apps.googleusercontent.com",
        expoClientId: "624607133279-nm1evc7uokrhjaksov8sb6lj3vfg44cc.apps.googleusercontent.com",
        webClientId: "624607133279-iqmq1p41rkbep0fsc6717moocoqb7gkm.apps.googleusercontent.com",
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

export default useGoogleLogin
