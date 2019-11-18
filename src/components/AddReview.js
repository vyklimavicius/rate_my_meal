import React from 'react';
import { Card, TextArea, Header, Form, Button, Rating } from 'semantic-ui-react';

const AddReview = () => {

    const styles = {
        card: {
            margin: '0',
            display: 'inline-block',
            width: '100%',
            height: '100%',
            padding: '1%',
            // border: '2px solid #227DA5',
            overflowY: 'auto',
        },
        header: {
            fontFamily: 'Abril Fatface, cursive'
        },
        form: {
            margin: '1%',
        },
        button: {
            margin: '1% auto',
            backgroundColor: '#227DA5',
            color: '#ffffff'
        }
    };

    return (
        <Card style={styles.card}>
            <Header style={styles.header}>Add a review</Header>
            <Rating icon='star' defaultRating={1} maxRating={5} />
            <Form style={styles.form}>
                <TextArea placeholder='Write a review' />
                <Button style={styles.button}>Add!</Button>
            </Form>
        </Card>
    );
};

export default AddReview;
