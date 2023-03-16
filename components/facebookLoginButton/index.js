import { Button } from 'react-native';
import useFacebookLogin from "./hooks";

export default function FacebookLoginButton({setAuth}) {
    const {openLoginModal, isLoading} = useFacebookLogin(setAuth)

    return (
        <Button
            disabled={isLoading}
            title={"Facebook Login"}
            onPress={openLoginModal}
        />
    );
}
