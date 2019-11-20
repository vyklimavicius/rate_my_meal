import React from 'react';
import { Card, Header, Image } from 'semantic-ui-react';
import glass from '../../src/assets/magnifying.jpg';

const NotFound = () => {

    const styles= {

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
        header: {
            marginTop: '2%',
            marginLeft: '15%',
            fontFamily: 'Sacramento, cursive',
            fontSize: '5vw',
            color: '#227DA5',
        },
        image: {
                margin: 'auto',
                width: '30%',
                height: 'auto',
                borderRadius: '20%',
        }
    }


    return (
        <div style={styles.container}>
            <Card style={styles.mainCard}>
                <Header style={styles.header}>oops...</Header>
                <Header style={styles.header} as='h3'>404 Page not found</Header>
                <Image src={glass} style={styles.image}/>
            </Card>
        </div>
    );
}

export default NotFound;
