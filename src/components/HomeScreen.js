import React, { useState } from 'react';
import { 
Card, 
Grid, 
Segment, 
Header, 
GridColumn, 
Button, 
Form, 
FormField,
Input, 
Image,
Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import burrito from '../assets/beef.jpg';


const HomeScreen = () => {

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
        },
        subCard: {
            backgroundColor: '#227DA5',
            border: 'none',
            marginTop: '0.7%',
            marginLeft: '5%',
            marginRight: '5%',
            marginBottom: '5%',
            width: '90%',
            height: '80%',
            flexDirection: 'row',
        },
        footerCard: {
            position: 'absolute',
            bottom: '0',
            backgroundColor: '#F0F3F7',
            width: '100%',
            marginBottom: 'auto',
            textAlign: 'center',
            paddingTop: '1%',
        },
        header: {
            marginTop: '0.5%',
            marginLeft: '15%',
            fontFamily: 'Sacramento, cursive',
            fontSize: '5vw',
            color: '#227DA5',
        },
        textFooter: {
            fontFamily: 'Sacramento, cursive',
            fontSize: '1.5vw',
            padding: '0.2%'
        },
        text: {
            fontFamily: 'Sacramento, cursive',
            fontSize: '2vw',
        },
        textSignUp: {
            fontFamily: 'Sacramento, cursive',
            fontSize: '2vw'
        },
        grid: {
            marginTop: '1%',
            marginLeft: '6%',
            marginRight: '1%',
            marginBottom: '1%',
            height: 'auto',
            padding: '4%',
            width: '60%',
        },
        form: {
            margin: 'auto'
        },
        button: {
            backgroundColor: '#227DA5',
            color: '#ffffff'
        },
        image: {
            margin: 'auto',
            width: '30%',
            height: 'auto',
            border: '2px solid #227DA5',
        },
        social: {
            display: 'inline',
            margin: '1%'
        }
    };

    // State 
    const [ currentUser, setCurrentUser ] = useState({});
    
    const facebook = () => {
    window.location.href = 'https://www.facebook.com/';
    };
    const twitter = () => {
    window.location.href = 'https://www.twitter.com/';
    };
    const instagram = () => {
    window.location.href = 'https://www.instagram.com/';
    };
        

    // LifeCycle 
    const sendChange = () => {
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ autho: currentUser })
        }).then(response => response.json())
            .then(user => {
                if (user.errors) {
                    alert(user.errors);
                } else {
                    localStorage.setItem("user", JSON.stringify(user));
                    window.location.href = '/dashboard';
                }
            });
        };

    // Functions
    const inputChange = (e) => {
        switch (e.target.name) {
            case 'email':
                setCurrentUser({ ...currentUser, email: e.target.value });
                break;
            case 'password':
                setCurrentUser({ ...currentUser, password: e.target.value });
                break;
            default:
                return currentUser;
        }
    };

    const checkUser = () => {
            sendChange();
        };


    return (
        <div style={styles.container}>
            <Card style={styles.mainCard}>
                <Header style={styles.header}>RateMyMeal</Header>
            <Card style={styles.subCard} >
                <Segment style={styles.grid} placeholder>
                    <Grid columns={2} stackable textAlign='center' divided>
                        <Grid.Row>
                            <GridColumn>
                                 <Header style={styles.text}>Login</Header>
                                <Form style={styles.form}>
                                    <FormField>
                                        <Label pointing='below'>Please type your email</Label>
                                        <Input 
                                        type='text'
                                        icon='user circle' 
                                        placeholder='Please type your email'
                                        name='email'
                                        onChange={(e) => inputChange(e)}
                                        />
                                    </FormField>
                                    <FormField>
                                        <Input 
                                        type='password'
                                        icon='user secret' 
                                        placeholder='Please type your password'
                                        name='password'
                                        onChange={(e) => inputChange(e)}
                                        />
                                        <Label pointing='above'>Please type your password</Label>
                                    </FormField>
                                </Form>
                                    <Link to="/signup" style={styles.textSignUp}>
                                        New member, sign up!
                                </Link>  
                            </GridColumn>
                            <GridColumn>
                                <Header style={styles.text}>Let's start to rate!</Header>
                                <Button onClick={checkUser} style={styles.button}>Login</Button>
                                <Header style={styles.text}>Follow us </Header>
                                        <Button style={styles.social} onClick={facebook}circular color='facebook' icon='facebook' />
                                    <Button style={styles.social} onClick={twitter} circular color='twitter' icon='twitter' />
                                    <Button style={styles.social} onClick={instagram} circular color='instagram' icon='instagram' />
                            </GridColumn>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Image style={styles.image} src={burrito} />
            </Card>
              <Card style={styles.footerCard}>
                    <Header style={styles.textFooter}>Vytautas Klimavicius©2019</Header>
              </Card>
            </Card>
        </div>
        
    );
}

export default HomeScreen;
