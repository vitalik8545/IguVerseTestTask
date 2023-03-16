import {useEffect, useState} from "react";

const useGoogleInfo = (auth, logoutMain) => {
    const [email, setEmail] = useState()
    useEffect(()=>{
        const getUserData = async () => {
            console.log("auth", auth)
            let userInfoResponse = await fetch(
                `https://graph.facebook.com/me?access_token=${auth.accessToken}&fields=email`
            );

            userInfoResponse.json().then(data => {
                console.log("data", data)
                setEmail(data.email);
            });
        };

        getUserData();
    }, [auth])

    return {
        email,
        logout: logoutMain,
    }
}

export default useGoogleInfo
