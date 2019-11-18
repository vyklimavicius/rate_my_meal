import React from 'react';
import { Comment, CommentAvatar, CommentContent, CommentAuthor, CommentMetadata, CommentText } from 'semantic-ui-react';

const Reviews = ({avatar}) => {

    const styles = {
        space: {
            margin: '1%'
        }
    }
    return (
        <div>
            <Comment style={styles.space}>
                <CommentAvatar src={avatar}></CommentAvatar>
                <CommentContent>
                    <CommentAuthor>Vytautas</CommentAuthor>
                    <CommentMetadata>11/18/19</CommentMetadata>
                    <CommentText>It was a great place!</CommentText>
                </CommentContent>
            </Comment>
        </div>
    );
};

export default Reviews;
