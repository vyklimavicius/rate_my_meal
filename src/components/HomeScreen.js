import React from 'react';
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
import burger from '../assets/main.jpg';


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
            margin: '5%'
        },
        button: {
            backgroundColor: '#227DA5',
            color: '#ffffff'
        },
        image: {
            margin: '1% auto',
            width: '30%',
            height: 'auto',
            border: '2px solid #227DA5',
        },
        social: {
            display: 'inline',
            margin: '1%'
        }
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
                                        />
                                    </FormField>
                                    <FormField>
                                        <Input 
                                        type='password'
                                        icon='user secret' 
                                        placeholder='Please type your password'
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
                                <Button style={styles.button}>Login</Button>
                                <Header style={styles.text}>Follow us </Header>
                                        <Button style={styles.social} circular color='facebook' icon='facebook' />
                                        <Button style={styles.social} circular color='twitter' icon='twitter' />
                                        <Button style={styles.social} circular color='instagram' icon='instagram' />
                            </GridColumn>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Image style={styles.image} src={burger} />
            </Card>
              <Card style={styles.footerCard}>
                    <Header style={styles.textFooter}>Vytautas Klimavicius©2019</Header>
              </Card>
            </Card>
        </div>
        
    );
}

export default HomeScreen;
