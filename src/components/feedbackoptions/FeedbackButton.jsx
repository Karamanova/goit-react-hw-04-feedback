import PropTypes from 'prop-types';
import { OptionButtons } from './FeedbackOptions.styled';

const FeedbackButton = ({ feedback, onLeaveFeedback, id }) => {
return (
<OptionButtons
   key={id}
   type="button"
   data-feedback={feedback}
   onClick={onLeaveFeedback}
 >
{feedback}
</OptionButtons>
);
};

FeedbackButton.propTypes = {
feedback: PropTypes.string.isRequired,
onLeaveFeedback: PropTypes.func.isRequired,
id: PropTypes.number.isRequired,
};

export default FeedbackButton;