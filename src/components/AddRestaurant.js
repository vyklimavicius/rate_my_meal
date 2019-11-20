import React, { useState } from 'react';
import { Card, Form, Label, Input, Button, Header, Message } from 'semantic-ui-react';

const AddRestaurant = (props) => {

    // Style

    const styles  = {
        card: {
            position: 'fixed',
            overflowX: 'auto',
            alignSelf: 'center',
            zIndex: '2',
            padding: '1%',
            margin: '1% auto',
            width: '80%',
            height: '50%',
            
            boxShadow: '4px 4px 1px #227DA5',
            border: '2px solid #227DA5',
            // fontFamily: 'Ibarra Real Nova, serif'
        },
        header: {
            alignSelf: 'center'
        },
        message: {
                width: '80',
                alignSelf: 'center',
                margin: '1%',
        }
    };

    // State 
    const [ newRestaurant, setNewRestaurant ] = useState({});


    // Function 
    const restaurantForm = () => {
        sendChange();
        props.addRestaurantUI();
    };
    
    const sendChange = () => {
        fetch('https://nameless-reaches-84962.herokuapp.com/api/v1/restaurants', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ restaurant: newRestaurant })
        })
    };  

   
    const inputChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setNewRestaurant({...newRestaurant, name: e.target.value});
                break;
            case 'specialty':
                setNewRestaurant({ ...newRestaurant, specialty: e.target.value});
                break;
            case 'url':
                setNewRestaurant({...newRestaurant, image: e.target.value});
                break;
            default:
                return newRestaurant;
        }
    };

    return (
            <Card style={styles.card}>
              <Header style={styles.header}>New Restaurant</Header>
              <Form>
                    <Form.Field>
                        <Label>Name</Label>
                        <Input
                            type='text'
                            icon='food'
                            placeholder='name'
                            name='name'
                            onChange={(e) => inputChange(e)}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Label>Specialty</Label>
                        <Input
                            type='text'
                            icon='bar'
                            placeholder='specialty'
                            name='specialty'
                            onChange={(e) => inputChange(e)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Label>Image</Label>
                        <Input
                            type='url'
                            icon='image'
                            placeholder='image url'
                            name='url'
                            onChange={(e) => inputChange(e)}
                        />
                    </Form.Field>
                    <Button onClick={restaurantForm}>Add</Button>
                <Button onClick={props.addRestaurantUI}>Back</Button>
                <Message style={styles.message} negative>
                    <Message.Header>Next Update</Message.Header>
                    <p>Files will become available to choose!</p>
                </Message>
              </Form>
            </Card>
    );
}

export default AddRestaurant;
