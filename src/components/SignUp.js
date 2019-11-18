import React from 'react';
import { Card, Form, Header, Checkbox, Button, Label, Input, Image } from 'semantic-ui-react';
import male from '../assets/avatarMale.jpg';

const SignUp = () => {

    const styles = {
        container: {
            padding: '2%',
            width: '100%',
            height: '100%',
            backgroundColor: '#227DA5',
            position: 'fixed'
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
            height: 'auto'
        },
        image: {
            alignSelf: 'center',
            height: '15%',
            width: '8%'
        }
    };

    return (
        <div style={styles.container}>
            <Card style={styles.mainCard}>
                <Header style={styles.header}>RateMyMeal</Header>
                <Image style={styles.image} src={male} size='small' circular/>
                <Card style={styles.subcard}>
                <Form style={styles.form}>
                    <Form.Field>
                        <Label>First name</Label>
                        <Input
                            type='text'
                            icon='user circle'
                            placeholder='First name'
                        />
                    </Form.Field>

                    <Form.Field>
                        <Label>Last name</Label>
                        <Input
                            type='text'
                            icon='user circle'
                            placeholder='Last name'
                        />
                    </Form.Field>

                    <Form.Field>
                        <Label>Email</Label>
                        <Input
                            type='email'
                            icon='mail'
                            placeholder='Email'
                        />
                    </Form.Field>

                    <Form.Field>
                        <Label>Password</Label>
                        <Input
                            type='password'
                            icon='user secret'
                            placeholder='Please type a password'
                        />
                    </Form.Field>

                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>

                    <Button type='submit'>Submit</Button>

                </Form>
                </Card>
            </Card>
        </div>
    );
}

export default SignUp;
