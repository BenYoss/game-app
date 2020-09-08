import React, { } from 'react';
import {} from 'react-hook-form';
import {
} from 'react-bootstrap';
import PropTypes from 'prop-types';

//------------------------------------------------------------
// Methodologies!
const forEachReply = () => {
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

  // console.log('THREADS IN REPLIES.JSX forEachReply: ', threads);
  const storage = [];
  for (let i = 0; i < replyData.length; i += 1) {
    storage.push(
      <div
        className="bg-dark inline-block"
        id="GeneralDisussion"
        style={{ padding: '20px' }}
      >
        <div
          className={`profile-picture${i} panel-body text-left inline-block`}
          style={{
            backgroundColor: '#D6DBDF', minWidth: '800px', marginLeft: '100px',
          }}
        >
          <div className="bg-secondary" style={{ display: 'inline-block', minWidth: '360px' }}>
            <img className="d-print-inline-block" src={replyData[i].profilePhotoUrl} height="100px" width="100px" alt="" style={{ display: 'inline-block' }} />
            <div className={`username${i} panel-body text-left inline-block`} style={{ display: 'inline-block' }}>
              <h5 style={{ marginLeft: '20px', marginRight: '20px', minWidth: '80px' }}>{replyData[i].username}</h5>
            </div>
            <div className={`date${i} panel-body text-left inline-block`} style={{ display: 'inline-block' }}>
              <span style={{ marginRight: '20px' }}>{replyData[i].createdAt.split('T')[0]}</span>
            </div>
          </div>
          <h4 style={{ display: 'inline-block', marginLeft: '20px' }}>{replyData[i].text}</h4>
        </div>
      </div>,
    );
  }
  return storage;
};

//------------------------------------------------------------
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => { alert(data); };
const Replies = ({ discussion }) => (
  <div>
    {discussion[0]}
    <div style={{ padding: '20px' }}>
      <div className="card text-white bg-secondary mb-3">
        <h2 className="card-header">
          Replies
        </h2>
      </div>
    </div>
    <div className="Replies-Body">
      {forEachReply()}
    </div>
  </div>
);
Replies.propTypes = {
  discussion: PropTypes.element.isRequired,
};

export default Replies;
