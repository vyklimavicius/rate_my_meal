import React, { useState } from 'react';
import { Card, Form, Header,  Button, Label, Input } from 'semantic-ui-react';

const Userprofile = () => {

    
    // Styles

    const styles = {
        card: {
            position: 'fixed',
            zIndex: '2',
            alignSelf: 'center',
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
        },
    };
    
    // State
    const currentUser = JSON.parse(window.localStorage.getItem('user'));
    const [newUser, setNewUser] = useState({});
    
    
    // Function 
    
    
    const sendChange = () => {
        fetch(`http://localhost:3000/api/v1/users/${currentUser.id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: newUser })
        }).then(response => {
            if (response.ok === true) {
                window.localStorage.clear();
                window.location.href = '/'
            } else {
                alert('There was an issue!')
            }
        });
    };
    const sendDelete = () => {
        fetch(`http://localhost:3000/api/v1/users/${currentUser.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok === true) {
                window.localStorage.clear();
                window.location.href = '/'
            } else {
                alert('There was an issue!')
            }
        });
    };
    
    const inputChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setNewUser({ ...newUser, name: e.target.value });
                break;
            case 'url':
                setNewUser({ ...newUser, avatar: e.target.value });
                break;
            default:
                return newUser;
        }
    };
    
    console.log(newUser);
    
        
        return (
            <Card style={styles.card}>
                <Header style={styles.header}>Edit Profile</Header>
                <Form>
                    <Form.Field>
                        <Label>Name</Label>
                        <Input
                            type='text'
                            icon='user'
                            placeholder='name'
                            name='name'
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
                        <Button onClick={sendChange}>Edit User</Button>
                        <Button color='red' onClick={sendDelete}>Delete</Button>
                </Form>
            </Card>
        )
};


export default Userprofile;
