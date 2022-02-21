import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import RegisterTemplate from './RegisterTemplate';

const RegisterScreen = ({ navigation }) => {
    let [registerScreen, setRegisterScreen] = useState(1);

    const userInfo = {
        name: '',
        email: '',
        password: '',
        c_password: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string().min(3, 'Invalid name !').required('Name is required'),
        email: Yup.string().email('Invalid email !').required('Email is required'),
        password: Yup.string().trim().min(6, 'Password is too short !').required('Password is required'),
        c_password: Yup.string().equals([Yup.ref('password'), null], 'Password does not match')
    })


    function ConditionalPageRendering(handleChange, values, errors, validateField) {
        switch (registerScreen) {
            case 1:
                return (
                    <RegisterTemplate
                        navigation={navigation}
                        registerScreen={registerScreen}
                        setRegisterScreen={setRegisterScreen}
                        formData={values}
                        value={values.email}
                        handleChange={handleChange}
                        fieldToUpdate='email'
                        errorMessage={errors.email}
                        validateField={validateField}
                        imgSrc={require('../../../assets/email_icon.png')}
                        headingText1="What's your email?"
                        headingText2="We'll check if you have an account"
                        inputLabel="Email"
                        inputPlaceholder="xyz@gmail.com"
                    />
                )
                break;

            case 2:
                return (
                    <RegisterTemplate
                        navigation={navigation}
                        registerScreen={registerScreen}
                        setRegisterScreen={setRegisterScreen}
                        formData={values}
                        value={values.name}
                        handleChange={handleChange}
                        fieldToUpdate='name'
                        errorMessage={errors.name}
                        validateField={validateField}
                        imgSrc={require('../../../assets/user_icon.png')}
                        headingText1="What's your Name"
                        headingText2="Write your full name"
                        inputLabel="Name"
                        inputPlaceholder="Thomas harry"
                    />
                )
                break;

            case 3:
                return (
                    <RegisterTemplate
                        navigation={navigation}
                        registerScreen={registerScreen}
                        setRegisterScreen={setRegisterScreen}
                        formData={values}
                        value={values.password}
                        handleChange={handleChange}
                        fieldToUpdate='password'
                        errorMessage={errors.password}
                        validateField={validateField}
                        imgSrc={require('../../../assets/lock1_icon.png')}
                        headingText1="Type your password"
                        headingText2="Password must be 6 characters long"
                        inputLabel="Password"
                        inputPlaceholder="password"
                    />
                )
                break;

            case 4:
                return (
                    <RegisterTemplate
                        navigation={navigation}
                        registerScreen={registerScreen}
                        setRegisterScreen={setRegisterScreen}
                        formData={values}
                        value={values.c_password}
                        handleChange={handleChange}
                        fieldToUpdate='c_password'
                        errorMessage={errors.c_password}
                        validateField={validateField}
                        imgSrc={require('../../../assets/lock2_icon.png')}
                        headingText1="Confirm your password"
                        headingText2="Re type your password"
                        inputLabel="Confirm password"
                        inputPlaceholder="confirm password"
                    />
                )
                break;
            default:
                return (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Error (no Screen)</Text>
                    </View>
                );
        }
    }

    return (
        <Formik initialValues={userInfo} validationSchema={validationSchema}>
            {({ values, handleChange, errors, validateField }) => {
                const { name, email, password, c_password } = values;
                return (ConditionalPageRendering(handleChange, values, errors, validateField))
            }}
        </Formik>
    )
}

export default RegisterScreen

