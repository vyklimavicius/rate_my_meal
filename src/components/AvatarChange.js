import React from 'react';
import { Card, Input, Button, Message } from 'semantic-ui-react';

const AvatarChange = (props) => {

    const styles ={
        card: {
            alignSelf: 'center',
            position: 'fixed',
            overflowX: 'auto',
            zIndex: '2',
            padding: '1',
            margin: '6% auto',
            width: 'auto',
            height: 'auto',
            boxShadow: '4px 4px 1px #227DA5',
            border: '2px solid #227DA5',
        },
        header: {
            alignSelf: 'center'
        },
        input: {
            margin: '1%',
            width: '50%',
            alignSelf: 'center'
        },
        button: {
            margin: '1%',
            width: 'auto',
            alignSelf: 'center'
        },
        message: {
            width: '80%',
            alignSelf: 'center',
            margin: '1%'
        }
    };

    return (
        <Card style={styles.card}>
            <Input
                style={styles.input}
                required
                type='url'
                icon='image'
                placeholder='Type image URL'
                name='avatar'
                onChange={(e) => props.inputChange(e)}
            />
            <Button style={styles.button} onClick={props.avatarBoolCheck}>Done</Button>
            <Message style={styles.message} negative>
                <Message.Header>Next Update</Message.Header>
                <p>Files will become available to choose!</p>
            </Message>
        </Card>
    );
}

export default AvatarChange;
