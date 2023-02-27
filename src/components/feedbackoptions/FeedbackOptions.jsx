import PropTypes from 'prop-types';
import { FeedbackBox } from './FeedbackOptions.styled';
import FeedbackButton from './FeedbackButton';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
return (
<FeedbackBox>
{options.map((option, id) => (
<FeedbackButton
       feedback={option}
       onLeaveFeedback={onLeaveFeedback}
       id={id}
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