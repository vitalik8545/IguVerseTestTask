import {Button, StyleSheet, Text, View} from "react-native";
import useFacebookInfo from "./hooks";

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

const FacebookInfo = ({auth, logout:logoutMain}) => {
    const {email,logout} = useFacebookInfo(auth, logoutMain)

    return (
        <View style={styles.userInfo}>
            <Text style={styles.text}>{email}</Text>
            <Button onPress={logout} title={"Logout"}/>
        </View>
    );
}

export default FacebookInfo
