import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateUserDetails } from '../../Redux/Slices/userDetailsSlice';
import { Input } from 'react-native-elements';
import { loginUser } from '../../Firebase/functions/loginUser';
import { Formik } from 'formik';
import * as Yup from 'yup';


const LoginScreen = ({ navigation }) => {
    let dispatch = useDispatch();
    let [keyboardOpen, setKeyboardOpen] = useState(false);
    let [loginErr, setLoginErr] = useState('');

    const credentials = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email !').required('Email is required'),
        password: Yup.string().trim().min(6, 'Password is too short !').required('Password is required'),
    })

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => { setKeyboardOpen(true) });
        Keyboard.addListener('keyboardDidHide', () => { setKeyboardOpen(false) });

    }, []);

    return (
        <Formik initialValues={credentials} validationSchema={validationSchema} validateOnChange={true}>
            {({ values, handleChange, errors, validateForm }) => {
                // const { email, password } = values;
                return (
                    <View enabled={false} style={styles.mainContainer}>
                        <View style={keyboardOpen ? styles.bannerContainer_hide : styles.bannerContainer} >
                            <Image style={styles.bannerIcon} source={require('../../../assets/banner_icon.png')} />
                            <Text style={styles.bannerText}> Tracking App </Text>
                        </View>
                        <View style={styles.loginContainer(keyboardOpen)}>
                            <View style={styles.headingContainer}>
                                <Text style={styles.headingText}>Welcome</Text>
                            </View>
                            <View style={styles.registerContainer}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.registerText}>Don't have an account? </Text>
                                    <TouchableOpacity onPress={() => { navigation.navigate('RegisterScreen') }}>
                                        <Text style={{ color: 'red' }}>Register</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.inputsContainer}>
                                <Input
                                    label='Email'
                                    placeholder='email@address.com'
                                    leftIcon={{ type: 'font-awesome', name: 'envelope', size: 23, marginRight: 7, color: 'rgb(1, 87, 155)' }}
                                    inputContainerStyle={{ borderBottomColor: 'rgb(1, 87, 155)' }}
                                    onChangeText={handleChange('email')}
                                    errorMessage={errors.email}
                                />
                                <Input
                                    label='Password'
                                    placeholder='password'
                                    leftIcon={{ type: 'font-awesome', name: 'lock', size: 24, marginRight: 7, color: 'rgb(1, 87, 155)' }}
                                    inputContainerStyle={{ borderBottomColor: 'rgb(1, 87, 155)' }}
                                    onChangeText={handleChange('password')}
                                    errorMessage={errors.password}
                                />
                            </View>
                            <View style={styles.buttonContainer}>
                                <Text style={styles.errorText}>{loginErr}</Text>
                                <TouchableOpacity style={styles.loginButton} onPress={() => { loginUser(email, password, navigation, setLoginErr, dispatch, updateUserDetails) }}>
                                    <Text style={styles.loginButtonText}>Log in</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )
            }}

        </Formik>
    )
}
export default LoginScreen;

const styles = StyleSheet.create({
    mainContainer: {
        // backgroundColor: 'yellow',
        flex: 1,
    },
    bannerContainer: {
        backgroundColor: 'rgb(1, 87, 155)',
        opacity: 0.9,
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    bannerContainer_hide: {
        display: 'none'
    },
    bannerIcon: {
        height : '30%',
        width: '30%',
        marginBottom: '3%',
        resizeMode: 'contain'
    },
    bannerText: {
        fontSize: 30,
        fontWeight: '100',
        color: 'white'
    },
    loginContainer: function (keyboardOpen) {
        return {
            // backgroundColor: 'yellow',
            flex: (keyboardOpen) ? 1 : 0.6,
        }
    },
    headingContainer: {
        // backgroundColor: 'pink',
        flex: 0.2,
        justifyContent: 'flex-end',
        paddingLeft: '10%',
    },
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.8)'
    },
    registerContainer: {
        // backgroundColor: 'purple',
        flex: 0.1,
        paddingLeft: '10%',
    },
    registerText: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(0,0,0,0.8)'
    },
    inputsContainer: {
        // backgroundColor: 'orange',
        flex: 0.4,
        justifyContent: 'space-around',
        paddingHorizontal: '10%'
    },
    buttonContainer: {
        // backgroundColor: 'green',
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText: {
        color: 'red',
        fontSize: 17,
        paddingBottom: '3%',
        width: '100%',
        textAlign: 'center'
    },
    loginButton: {
        width: '75%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'rgb(1, 87, 155)',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 22
    }
});