import React, { useState } from 'react';
import { Card, TextArea, Header, Button, Rating } from 'semantic-ui-react';

const AddReview = ({ user, restaurant, bool }) => {

    const styles = {
        card: {
            margin: '0%',
            display: 'inline-block',
            width: '100%',
            height: '100%',
            padding: '1%',
            overflowY: 'auto',
        },
        header: {
            fontFamily: 'Abril Fatface, cursive'
        },
        form: {
            margin: '1% auto',
            width: '100%'
        },
        button: {
            margin: '1% auto',
            backgroundColor: '#227DA5',
            color: '#ffffff'
        }
    };

    // State
    const [review, setReview] = useState({}); 

    // Cycle
    const sendChange = () => {
        fetch('http://localhost:3000/api/v1/reviews', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ review: { ...review, restaurant_id: restaurant.id, user_id: user.id, name: user.name, avatar: user.avatar}})
        }).then( bool());
    };  
    
    const inputChangeRating = (e, data) => {
        setReview({ ...review, rating_id: data.rating});
    };
    
    
    const inputTextArea =   (e, data)  => {
        setReview({ ...review, post: data.value});
    };
    
    console.log(review);
    

    return (
        <Card style={styles.card}>
            <Header style={styles.header}>Add a review</Header>
            <Rating 
            onRate={(e, data) => inputChangeRating(e, data)}
            icon='star' 
            defaultRating={1} 
            maxRating={5} 
            name='rating' />
                <TextArea 
                    style={styles.form}
                    onChange={inputTextArea}
                    name='post'
                    placeholder='Write a review' />
                <Button onClick={sendChange} style={styles.button}>Add!</Button>
        </Card>
    );
};

export default AddReview;
