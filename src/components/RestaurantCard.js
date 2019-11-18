import React from 'react';
import { Card, CardContent, CardMeta, Icon, Image, Header, Button} from 'semantic-ui-react';
import sardis from '../assets/sardis.jpg';
import Review from './Reviews.js';
import male from '../assets/avatarMale.jpg';
import female from '../assets/avatarFemale.jpg';

const RestaurantCard = (prop) => {

    // Style

    const styles = {
        card: {
            marginTop: '5%',
            marginLeft: '6%',
            width: '85%',
            height: 'auto',
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
            margin: '0 auto',
        }
    };

    return (

             <Card style={styles.card}>
                <Image  style={styles.image} src={sardis}  size='medium' rounded/>
                    <CardContent>
                        <Card.Header>Sardis</Card.Header>
                        <Header as='h4'>Specialty: Continental</Header>
                        <CardMeta>Joined in 2019</CardMeta>
                        <Header as='h4' dividing>Reviews</Header>
                        <Review avatar={male} />
                        <Review avatar={female} />
                        <Review avatar={male} /> 
                        <Review avatar={female} />
                    </CardContent>
                    <CardContent>
                        <Icon name='star' color='yellow'/>
                        5 star
                    </CardContent>
                    <Button 
                    onClick={prop.comment}>
                    Add a Review
                    </Button>
            </Card> 
    );
}

export default RestaurantCard;

/* <Header style={styles.header} as='h2'>First Card</Header>
<Placeholder style={styles.imagePlaceHolder}>
<Placeholder.Image />
</Placeholder> */
// {/* <Card.Content>
//     <Card.header>Restaurant name</Card.header>
//     <Card.Meta>Joined in 2019</Card.Meta>
//     <Card.Description>The review will go here</Card.Description>
// </Card.Content>
// <Card.Content extra>
//     {/* <Icon name='like' />
//     10 likes */}
// {/* </Card.Content> */}