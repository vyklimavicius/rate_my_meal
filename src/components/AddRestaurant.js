import React, { useState } from 'react';
import { Card, Form, Label, Input, Button, Header } from 'semantic-ui-react';

const AddRestaurant = (props) => {

    // Style

    const styles  = {
        card: {
            position: 'fixed',
            alignSelf: 'center',
            zIndex: '2',
            padding: '1%',
            margin: '15% auto',
            width: '85%',
            height: 'auto',
            boxShadow: '4px 4px 1px #227DA5',
            border: '2px solid #227DA5',
            // fontFamily: 'Ibarra Real Nova, serif'
        },
        header: {
            alignSelf: 'center'
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
        fetch('http://localhost:3000/api/v1/restaurants', {
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
              </Form>
            </Card>
    );
}

export default AddRestaurant;
