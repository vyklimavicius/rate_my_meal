import React from 'react';
import { Comment, CommentAvatar, CommentContent, CommentAuthor, CommentMetadata, CommentText, Rating } from 'semantic-ui-react';

const Reviews = ({avatar, name, post, date, rating }) => {

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
                <CommentAuthor>{name}</CommentAuthor>
                    <CommentMetadata>{date}</CommentMetadata>
                    <CommentText>{post}</CommentText>
                </CommentContent>
                <Rating icon='star' color='yellow' defaultRating={rating} maxRating={5} disabled />
            </Comment>
        </div>
    );
};

export default Reviews;
