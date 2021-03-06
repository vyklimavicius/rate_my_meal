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
// Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import burrito from '../assets/burrito.jpg';


const HomeScreen = () => {

    const styles = {

        container: {
            // margin: '0',
            padding: '2%',
            width: '100%',
            height: '100%',
            backgroundColor: '#227DA5',
            // position: 'fixed',
            overflowX: 'auto'
        },
        mainCard: {
            boxSizing: 'border-box',
            alignSelf: 'center',
            width: '100%',
            // margin: '30px 5px',
            height: '900px',
        },
        subCard: {
            backgroundColor: '#227DA5',
            border: 'none',
            marginTop: '0.7%',
            marginLeft: '5%',
            marginRight: '5%',
            marginBottom: '5%',
            width: 'auto',
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
            marginTop: '0.2%',
            marginLeft: '5%',
            fontFamily: 'Sacramento, cursive',
            fontSize: '50px',
            color: '#227DA5',
        },
        textFooter: {
            fontFamily: 'Roboto, sans- serif',
            fontSize: '15px',
            padding: '0.2%'
        },
        text: {
            fontFamily: 'Roboto, sans- serif',
            fontSize: '15px',
        },
        textSignUp: {
            marginTop: '10%',
            fontFamily: 'Roboto, sans- serif',
            fontSize: '15px'
        },
        grid: {
            // margin: '1% 1%',
            height: '100%',
            // padding: '1%',
            width: '100%',
        },
        form: {
            margin: '5%',
        },
        button: {
            backgroundColor: '#227DA5',
            color: '#ffffff'
        },
        image: {
            margin: 'auto',
            width: '40%',
            height: '60%',
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
        fetch('https://nameless-reaches-84962.herokuapp.com/api/v1/login', {
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
                let input = e.target.value.toLowerCase();
                setCurrentUser({ ...currentUser, email: input });
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
                {/* <Image style={styles.image} src={burrito} /> */}
            </Card>
              <Card style={styles.footerCard}>
                    <Header style={styles.textFooter}>Vytautas Klimavicius©2019 v1.0.1</Header>
              </Card>
            </Card>
        </div>
        
    );
}

export default HomeScreen;
