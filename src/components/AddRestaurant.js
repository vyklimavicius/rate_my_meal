import React from 'react';
import { Card, Form, Label, Input, Button, Header } from 'semantic-ui-react';

const AddRestaurant = () => {

    const styles  = {
        card: {
            position: 'fixed',
            zIndex: '2',
            padding: '1%',
            margin: '5%',
            width: '85%',
            height: '50%',
            boxShadow: '4px 4px 1px #227DA5',
            border: '2px solid #227DA5',
            // fontFamily: 'Ibarra Real Nova, serif'
        },
        form: {
            
        },
        header: {
            alignSelf: 'center'
        }
    };

    return (
        <div style={styles.container}>
            <Card style={styles.card}>
              <Header style={styles.header}>New Restaurant</Header>
              <Form style={styles.form}>
                    <Form.Field>
                        <Label>Name</Label>
                        <Input
                            type='text'
                            icon='food'
                            placeholder='name'
                        />
                    </Form.Field>

                    <Form.Field>
                        <Label>Specialty</Label>
                        <Input
                            type='text'
                            icon='bar'
                            placeholder='specialty'
                        />
                    </Form.Field>
                    <Form.Field>
                        <Label>Image</Label>
                        <Input
                            type='url'
                            icon='image'
                            placeholder='image url'
                        />
                    </Form.Field>
                    <Button>Submit</Button>
              </Form>
            </Card>
        </div>
    );
}

export default AddRestaurant;
