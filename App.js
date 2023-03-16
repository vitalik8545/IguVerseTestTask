import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import GoogleLoginButton from "./components/googleLoginButton";
import GoogleInfo from "./components/googleInfo";
import FacebookLoginButton from "./components/facebookLoginButton";
import FacebookInfo from "./components/facebookInfo";

WebBrowser.maybeCompleteAuthSession();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 5
  }
});

export default function App() {
  const [authGoogle, setAuthGoogle] = useState();
  const [authFacebook, setAuthFacebook] = useState();

  const setAuth = async (auth, type) => {
    await AsyncStorage.setItem("auth", JSON.stringify(auth));
    await AsyncStorage.setItem("type", type);
    if(type==="facebook") setAuthFacebook(auth)
    else setAuthGoogle(auth)
  };

  const setGoogleAuth = async (auth) => setAuth(auth, "google")

  const setFacebookAuth = async (auth) => setAuth(auth, "facebook")

  useEffect(() => {
    const getPersistedAuth = async () => {
      const authJson = await AsyncStorage.getItem("auth");
      const typeJson = await AsyncStorage.getItem("type");
      if (authJson !== null && typeJson === "google") {
        const authFromJson = JSON.parse(authJson);
        setAuthGoogle(authFromJson);
      } else if (authJson !== null && typeJson === "facebook") {
        const authFromJson = JSON.parse(authJson);
        setAuthFacebook(authFromJson);
      }
    };
    getPersistedAuth();
  }, []);

  const logout = async () => {
    setAuthGoogle(null);
    setAuthFacebook(null);
    await AsyncStorage.removeItem("auth");
    await AsyncStorage.removeItem("type");
  };

  if(authGoogle)
    return (
        <GoogleInfo auth={authGoogle} logout={logout} />
    )

  if(authFacebook)
    return (
        <FacebookInfo auth={authFacebook} logout={logout} />
    )

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <GoogleLoginButton setAuth={setGoogleAuth}/>
      </View>
      <FacebookLoginButton setAuth={setFacebookAuth}/>
    </View>
  );
}
