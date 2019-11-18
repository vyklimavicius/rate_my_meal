import React, { useState } from 'react';
import { Menu, Dropdown, DropdownMenu, DropdownItem, Card, Header, Image } from 'semantic-ui-react';
import RestaurantCard from './RestaurantCard.js';
import AddReview from './AddReview.js';
import male from '../assets/avatarMale.jpg';

const UserDashboard = () => {

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
        section: {
            margin: '2%',
            overflowY: 'auto'
        },
        header: {
            margin: '1% auto',
            fontFamily: 'Sacramento, cursive',
            fontSize: '4vw',
            color: '#227DA5',
        },
        navbar: {
            // fontFamily: 'Ubuntu, sans-serif'
            // fontFamily: 'Ibarra Real Nova, serif',
            fontFamily: 'Abril Fatface, cursive'
        },
        avatar: {
            width: '5%',
            height: '5%',
            margin: '1%',
        },
        username: {
            alignSelf: 'center',
            margin: '1%'
        }
    };

    // State
    const [commentBool, setCommentBool] = useState(false);

    // Functions
    const changeCommentBool = () => {
        if (commentBool === false) {
            setCommentBool(true);
        } else {
            setCommentBool(false);
        };
    };

    
    
    console.log(commentBool);
    
    return (
        <div style={styles.container}>
            <Card style={styles.mainCard}>
                <header>
                    <nav>
                        <Menu style={styles.navbar} pointing>
                            <Dropdown item text='User'>
                                <DropdownMenu>
                                    <DropdownItem>Profile</DropdownItem>
                                    <DropdownItem>Settings</DropdownItem>
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown item text='Restaurants'>
                                <DropdownMenu>
                                    <DropdownItem>Add</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        <Image style={styles.avatar} src={male} avatar />
                        <Header style={styles.username}>Vytautas</Header>
                        </Menu>
                    </nav>
                </header>
                    <Header style={styles.header}>RateMyMeal</Header>
                <section style={styles.section}>
                    <RestaurantCard comment={changeCommentBool}/>
                    <RestaurantCard comment={changeCommentBool}/>
                    <RestaurantCard comment={changeCommentBool}/>
                </section>
            { commentBool === true ? <AddReview /> : null}
            </Card>
        </div>
    );
}

export default UserDashboard;
