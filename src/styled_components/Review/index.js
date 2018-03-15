// NPM
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS
import Stars from '../Rating/Stars';

// ACTIONS/CONFIG

// STYLES
const Wrap = styled.div`
  margin-bottom: 25px;
`;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Avatar = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  overflow: hidden;
  border: 2px solid #d7dbdf;
  margin-right: 15px;
`;

const Profile = styled.div`
  display: inline-block;

  span {
    display: block;

    &:last-child {
      padding-top: 5px;
      font-size: 14px;
      color: #6e7885;
    }
  }
`;

const SummaryWrap = styled.div`
  display: flex;
  margin-bottom: 10px;

  span:first-child {
    font-weight: 500;
    margin-right: 15px;
  }
`;

// MODULE
export default function ReviewCart({ review }) {
  return (
    <Wrap>
      <ProfileWrap>
        <Avatar>
          <img src={review.user.avatar} />
        </Avatar>
        <Profile>
          <span>{review.user.name}</span>
          <span>{review.user.location}</span>
        </Profile>
      </ProfileWrap>
      <SummaryWrap>
        <span>{review.summary}</span>
        <Stars rating={review.rating} />
      </SummaryWrap>
      <p>{review.comment}</p>
    </Wrap>
  );
}

// Props Validation
ReviewCart.propTypes = {};
