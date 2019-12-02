import React, { useState, useEffect } from 'react';
import { Menu, Dropdown, DropdownMenu, DropdownItem, Card, Header, Image, Placeholder } from 'semantic-ui-react';
import Userprofile from './Userprofile.js';
import RestaurantCard from './RestaurantCard.js';
import AddRestaurant from './AddRestaurant.js';
import PlaceHolder from './PlaceHolder.js'

const UserDashboard = () => {

    const styles = {

        container: {
            padding: '2%',
            width: '100%',
            height: '100%',
            backgroundColor: '#227DA5',
            position: 'fixed',
            // overflowX: 'auto'
        },
        mainCard: {
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
        },
        section: {
            margin: '1%',
            overflowX: 'auto'
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
            margin: '2% 2%',
        },
        username: {
            alignSelf: 'center',
           margin: '1%'
        },
        placeholder: {
            margin: 'auto',
            width: 'auto',
            height: 'auto'
        }
    };

    // State

    const [addRestaurantBool, setAddRestaurantBool] = useState(false);
    const [profile, setProfile] = useState(false)
    const [restaurants, setRestaurants] = useState([]);
    let currentUser = JSON.parse(window.localStorage.getItem('user'));
    

    // Cycle First Mount 
    useEffect(() => {
        const abortController = new AbortController();
        const result = fetch('https://nameless-reaches-84962.herokuapp.com/api/v1/restaurants')
        result
        .then(response => response.json())
        .then( json => {
            setRestaurants(json);
        });
        return () => {
            abortController.abort();
        };
    },[restaurants]);

    const addRestaurantUI = () => {
        if (addRestaurantBool === false) {
            setAddRestaurantBool(true);
        } else {
            setAddRestaurantBool(false);
        };
    };

    const userProfile = () => {
        if ( profile === false) {
            setProfile(true);
        } else {
            setProfile(false);
        };
    };

    const logOut = () => {
        window.localStorage.clear();
        currentUser = null;
        window.location.href = '/'
    };

    if (currentUser !== null) {
        return (
            <div style={styles.container}>
                <Card style={styles.mainCard}>
                    <header>
                        <nav>
                            <Menu style={styles.navbar} pointing>
                                <Dropdown item text='User'>
                                    <DropdownMenu>
                                        <DropdownItem onClick={userProfile}>Profile</DropdownItem>
                                        <DropdownItem onClick={logOut}>Logout</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Dropdown item text='Restaurants'>
                                    <DropdownMenu>
                                        <DropdownItem onClick={addRestaurantUI}>Add</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            <Image style={styles.avatar} src={currentUser.avatar} avatar />
                            <Header style={styles.username}>{currentUser.name}</Header>
                            </Menu>
                        </nav>
                    </header>
                        { profile === true ? <Userprofile user={currentUser} bool={userProfile} /> : null}
                        <Header style={styles.header}>RateMyMeal</Header>
                        {addRestaurantBool === true ? <AddRestaurant  addRestaurantUI={addRestaurantUI} /> : null}
                    <section style={styles.section}>
                        { restaurants.length > 0 ? restaurants.map( restaurant => {
                            return <RestaurantCard key={restaurant.id} user={currentUser} restaurant={restaurant} />
                        }) : 
                            <div>
                                <PlaceHolder /> 
                                <PlaceHolder /> 
                                <PlaceHolder />
                            </div>
                        }
                    </section>
                    
                </Card>
            </div>
        );

    } else {
        window.location.href = '/'
    }
    
}

export default UserDashboard;
