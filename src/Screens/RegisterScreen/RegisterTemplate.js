import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { updateUserDetails } from '../../Redux/Slices/userDetailsSlice';
import { Input, Icon } from 'react-native-elements';
import { registerUser } from '../../Firebase/functions/registerUser';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;


const RegisterTemplate = ({ navigation, registerScreen, setRegisterScreen, formData, value, handleChange, fieldToUpdate, errorMessage, validateField, imgSrc, headingText1, headingText2, inputLabel, inputPlaceholder }) => {
    let dispatch = useDispatch()


    function nextScreen() {
        validateField(fieldToUpdate);
        if (!errorMessage && value !== '') {
            if (registerScreen < 4)
                setRegisterScreen(++registerScreen)
            else
                registerUser(formData, navigation, dispatch, updateUserDetails);
        }
    }

    function backScreen() {
        setRegisterScreen(--registerScreen)
    }

    return (
        <View style={styles.mainContainer(windowHeight)}>
            <View style={styles.navigationContainer}>
                <View style={styles.navigationRow}>
                    <Icon
                        name='arrow-back'
                        type='material'
                        color='#000'
                        iconStyle={{ display: (registerScreen !== 1) ? 'flex' : 'none' }}
                        onPress={() => backScreen()} />
                    <TouchableOpacity onPress={() => { nextScreen() }}><Text style={styles.navigationText}>Continue</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={imgSrc} />
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText1}>{headingText1}</Text>
                <Text style={styles.headerText2}>{headingText2}</Text>
            </View>
            <View style={styles.inputContainer}>
                <Input

                    label={inputLabel}
                    labelStyle={{ paddingBottom: '3%', paddingLeft: '1%' }}
                    placeholder={inputPlaceholder}
                    inputContainerStyle={{ paddingLeft: '3%', borderColor: 'rgba(0,0,0,0.6)', borderWidth: 1, borderBottomWidth: 1, borderRadius: 10 }}
                    containerStyle={{ width: '90%' }}
                    value={value}
                    onChangeText={handleChange(fieldToUpdate)}
                    errorMessage={errorMessage}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={() => { nextScreen() }}>
                    <Text style={styles.loginButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RegisterTemplate

const styles = StyleSheet.create({
    mainContainer: function (windowHeight) {
        return {
            // backgroundColor: 'yellow',
            // flex: 1
            height: windowHeight
        }
    },
    navigationContainer: {
        flex: 0.1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    navigationRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    navigationText: {
        color: 'rgb(1,87,155)',
        fontWeight: '800'
    },
    imageContainer: {
        // backgroundColor: 'purple',
        flex: 0.2,
        paddingLeft: '10%',
        justifyContent: 'flex-end'
    },
    image: {
        // backgroundColor: 'yellow',
        flex: 0.9,
        width: '30%',
        resizeMode: 'contain',
        opacity: 0.8
    },
    headerContainer: {
        // backgroundColor: 'pink',
        flex: 0.08,
        justifyContent: 'center'
    },
    headerText1: {
        fontSize: 25,
        fontWeight: '700',
        color: 'rgba(0,0,0,0.7)',
        paddingLeft: '5%'
    },
    headerText2: {
        fontSize: 15,
        fontWeight: '300',
        color: 'rgba(0,0,0,0.7)',
        paddingLeft: '6%'
    },
    inputContainer: {
        // backgroundColor: 'green',
        flex: 0.4,
        alignItems: 'center',
        paddingTop: '7%'
    },
    buttonContainer: {
        // backgroundColor: 'yellow',
        flex: 0.17,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '85%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'rgba(1,87,155,1)',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 22
    }
})

