import PropTypes from 'prop-types';
import { OptionButtons } from './FeedbackOptions.styled';

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
const handleButtonClick = () => {
onLeaveFeedback(feedback);
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