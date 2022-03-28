import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

function WebinarStateButton({ id, isRegistered, onRegisteredClick , onRegisterNowClick }) {
  if (isRegistered) {
    return (
      <Button
        color='info'
        onClick={() => onRegisteredClick(id)}>
        Registered
      </Button>
    );
  }

  return (
    <Button
      color='info'
      onClick={() => onRegisterNowClick(id)}>
      Register Now
    </Button>
  );
}

WebinarStateButton.propTypes = {
  id:PropTypes.string.isRequired, 
  isRegistered:PropTypes.bool.isRequired,
  onRegisteredClick: PropTypes.func.isRequired,
  onRegisterNowClick: PropTypes.func.isRequired,
};

export default WebinarStateButton;
