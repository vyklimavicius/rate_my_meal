import React from 'react';
import { Placeholder } from 'semantic-ui-react';

const PlaceHolder = () => {

    const styles = {
        placeholder: {
            margin: '3% auto',
            width: 'auto',
            height: 'auto'
        }
    };

    return (
        <Placeholder style={styles.placeholder}>
            <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
            </Placeholder.Paragraph>
        </Placeholder>
    );
}

export default PlaceHolder;
