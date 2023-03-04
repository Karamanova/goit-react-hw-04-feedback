import PropTypes from 'prop-types';
import { OptionButtons } from './FeedbackOptions.styled';
import { useState } from 'react';

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  const [buttonState, setButtonState] = useState(0);
  
  const handleButtonClick = () => {
    setButtonState(buttonState + 1);
    onLeaveFeedback(feedback, buttonState);
  };

  return (
    <OptionButtons
      type="button"
      data-feedback={feedback}
      onClick={handleButtonClick}
    >
      {feedback}
    </OptionButtons>
  );
};

FeedbackButton.propTypes = {
  feedback: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackButton;