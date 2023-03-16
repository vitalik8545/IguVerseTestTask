import { Button } from 'react-native';
import useGoogleLogin from "./hooks";

export default function GoogleLoginButton({setAuth}) {
    const {openLoginModal, isLoading} = useGoogleLogin(setAuth)

    return (
        <Button
            disabled={isLoading}
            title={"Google Login"}
            onPress={openLoginModal}
        />
    );
}
