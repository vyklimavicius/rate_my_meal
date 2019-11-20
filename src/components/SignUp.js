import React, { useState } from 'react';
import { Card, Form, Header, Checkbox, Button, Label, Input, Image } from 'semantic-ui-react';
import male from '../assets/avatarMale.jpg';
import AvatarChange from './AvatarChange.js';

const SignUp = () => {

    const styles = {
        container: {
            padding: '1%',
            width: '100%',
            height: '850px',
            backgroundColor: '#227DA5',
            // position: 'fixed'
            // overflow: 'auto',
            overflowX: 'auto',
            margin: '5% auto',
        },
        mainCard: {
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            padding: '1%',
        },
        subcard: {
            width: '100%',
            margin: '1%',
            alignSelf: 'center',
        },
        header: {
                marginTop: '0%',
                display: 'inline-block',
                marginLeft: '5%',
                width: '40%',
                fontFamily: 'Sacramento, cursive',
                fontSize: '5vw',
                color: '#227DA5',
        },
        form: {
            margin: '0.5%',
            width: '98%',
            height: '100vh'
        },
        image: {
            alignSelf: 'center'
        }
    };

    // State
    const [ newUser, setNewUser ] = useState({});
    const [ terms, setTerms ] = useState(false);
    const [ avatarCheck, setAvatarCheck ] = useState(false);
    const [ avatar, setAvatar ] = useState(male);

    // Function 
    const newUserForm = () => {
        if (terms === false) {
            alert('Please accept the Terms and Conditions.');
        } else if (newUser.password.length < 5){
            return 
        } else {
            sendChange();
        };
    };

    const sendChange = () => {
        fetch('https://nameless-reaches-84962.herokuapp.com/api/v1/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: newUser })
        }).then( response => {
            if (response.ok === true){
                window.location.href = '/'; 
            } else {
                alert('The email is already on database.')
            }}); 
    };

    const termsCheck = () => {
        if (terms === false) {
            setTerms(true);
        } else {
            setTerms(false);
        };
    };

    const avatarBoolCheck = () => {
        if (avatarCheck === false) {
            setAvatarCheck(true);
        } else {
            setAvatarCheck(false);
        };
    };


    const inputChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setNewUser({ ...newUser, name: e.target.value });
                break;
            case 'lastname':
                setNewUser({ ...newUser, lastname: e.target.value });
                break;
            case 'email':
                setNewUser({ ...newUser, email: e.target.value });
                break;
            case 'password':
                setNewUser({ ...newUser, password: e.target.value });
                break;
            case 'avatar':
                setNewUser({ ...newUser, avatar: e.target.value });
                setAvatar(e.target.value);
                break;
            default:
                return newUser;
        }
    };

    return (
        <div style={styles.container}>
            <Card style={styles.mainCard}>
                <Header style={styles.header}>RateMyMeal</Header>
                <Image onClick={avatarBoolCheck} style={styles.image} src={avatar} size='small' circular/>
                {avatarCheck === false ? null : <AvatarChange inputChange={inputChange} avatarBoolCheck={avatarBoolCheck} />}
                <Card style={styles.subcard}>
                <Form style={styles.form}>
                    <Form.Field>
                        <Label>First name</Label>
                        <Input
                            required
                            type='text'
                            icon='user circle'
                            placeholder='First name'
                            name='name'
                            onChange={(e) => inputChange(e)}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Label>Last name</Label>
                        <Input
                            required
                            type='text'
                            icon='user circle'
                            placeholder='Last name'
                            name='lastname'
                            onChange={(e) => inputChange(e)}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Label>Email</Label>
                        <Input
                            required
                            type='email'
                            icon='mail'
                            placeholder='Email'
                            name='email'
                            onChange={(e) => inputChange(e)}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Label>Password</Label>
                        <Input
                            required
                            minLength='5'
                            type='password'
                            icon='user secret'
                            placeholder='Please type a password'
                            name='password'
                            onChange={(e) => inputChange(e)}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Checkbox onClick={termsCheck} label='I agree to the Terms and Conditions' />
                    </Form.Field>

                    <Button onClick={newUserForm}>Submit</Button>
                </Form>
                </Card>
            </Card>
        </div>
    );
}

export default SignUp;
