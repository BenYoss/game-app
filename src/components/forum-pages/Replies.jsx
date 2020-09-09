import React, { } from 'react';
import {} from 'react-hook-form';
import {
} from 'react-bootstrap';
import PropTypes from 'prop-types';

//------------------------------------------------------------
// Methodologies!
// const forEachReply = () => {
// const replyData = [
//   {
//     idReply: 2,
//     text: 'ME',
//     idThread: 3,
//     createdAt: '2020-09-07T15:48:02.208Z',
//     idUser: 4,
//     idDiscord: '45678',
//     username: 'Connor',
//     profilePhotoUrl: 'https://avatars1.githubusercontent.com/u/60720268?s=400&u=2236cf34f7c8010753eea568f245a80d9bd77b03&v=4',
//     location: 'NOLA',
//   }
// ]};

const Replies = ({ threadId }) => {
  console.log('THREAD ID IN REPLIES', threadId);
  return (
    <div>
      REPLIES
    </div>
  );
};

Replies.propTypes = {
  threadId: PropTypes.element.isRequired,
};

export default Replies;
