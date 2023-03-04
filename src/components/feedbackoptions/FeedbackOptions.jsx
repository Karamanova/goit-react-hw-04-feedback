import PropTypes from 'prop-types';
import { FeedbackBox } from './FeedbackOptions.styled';
import FeedbackButton from './FeedbackButton';
import { useCallback } from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const onLeaveFeedbackCallback = useCallback(
    (feedback, buttonState) => {
      onLeaveFeedback(feedback, buttonState);
    },
    [onLeaveFeedback]
  );

  return (
    <FeedbackBox>
      {options.map((option, id) => (
        <FeedbackButton
          feedback={option}
          onLeaveFeedback={onLeaveFeedbackCallback}
          key={id}
        />
      ))}
    </FeedbackBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
