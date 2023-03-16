import {Button, StyleSheet, Text, View} from "react-native";
import useGoogleInfo from "./hooks";

const styles = StyleSheet.create({
    userInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginBottom: 5
    }
});

const GoogleInfo = ({auth, logout:logoutMain}) => {
    const {email,logout} = useGoogleInfo(auth, logoutMain)

    return (
        <View style={styles.userInfo}>
            <Text style={styles.text}>{email}</Text>
            <Button onPress={logout} title={"Logout"}/>
        </View>
    );
}

export default GoogleInfo
