import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMeta, Image, Header, Button} from 'semantic-ui-react';
import Review from './Reviews.js';
import AddReview from './AddReview.js';

const RestaurantCard = ({ user, restaurant }) => {

    // Style

    const styles = {
        card: {
            margin: '3% auto',
            width: '70%',
            height: '40',
            padding: '0',
            boxShadow: '4px 4px 1px #227DA5',
            border: '2px solid #227DA5',
            // fontFamily: 'Ibarra Real Nova, serif'
        },
        header: {
            textAlign: 'center'
        },
        imagePlaceHolder: {
            width: '50%',
            height: '50%',
            margin: 'auto'
        },
        image: {
            width: '50%',
            height: '50%',
            margin: '0 auto',
        }
    };
    
    // State
    const [commentBool, setCommentBool] = useState(false);
    const [reviews, setReviews] = useState([]);
    let filterReviews;

    // Cycle First Mount 
    useEffect(() => {
        const result = fetch('https://nameless-reaches-84962.herokuapp.com/api/v1/reviews')
        result
            .then(response => response.json())
            .then(json => {
                setReviews(json);
            })
    }, [reviews]);

    // functions

    const filter = (reviews) => {
        filterReviews = reviews.filter( review => {
            return review.restaurant_id === restaurant.id
        });
    };

    const changeCommentBool = () => {
        if (commentBool === false) {
            setCommentBool(true);
        } else {
            setCommentBool(false);
        };
    };

    
    filter(reviews);

    return (
                <Card style={styles.card}>
                    <Image  style={styles.image} src={restaurant.image}  size='medium' rounded/>
                        <CardContent>
                            <Card.Header>{restaurant.name.toUpperCase()}</Card.Header>
                            <Header as='h4'>Specialty: {restaurant.specialty}</Header>
                            <CardMeta>Joined in 2019</CardMeta>
                            <Header as='h4' dividing>Reviews</Header>
                            { reviews.length > 0 ? filterReviews.map( review => {
                                   let newDate = review.created_at.slice(0,10)
                                   return <Review key={review.id} 
                                   rating={review.rating_id}
                                   avatar={review.avatar} 
                                   name={review.name} 
                                   post={review.post} 
                                   date={newDate}/>}) 
                                   : null }
                        </CardContent>
                        <Button 
                         onClick={changeCommentBool}>
                        Add a Review
                        </Button>
                     {commentBool === true ? <AddReview user={user} restaurant={restaurant} bool={changeCommentBool}/> : null}
               </Card>              
    );
}

export default RestaurantCard;
