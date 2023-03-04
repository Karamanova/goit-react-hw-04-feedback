import { useState } from 'react';
import { Section } from 'components/section/Section';
import { FeedbackOptions } from 'components/feedbackoptions/FeedbackOptions';
import { Statistics } from 'components/statistics/Statistics';
import Notification from 'components/notification/Notification';
import {NotificationMessage, Container} from './App.styled';
export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const PositiveFeedbackPercentage = total ? (good * 100) / total : 0;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            PositiveFeedbackPercentage={PositiveFeedbackPercentage.toFixed(0)}
          />
        ) : (
          <NotificationMessage>
            <Notification message="There is no feedback" />
          </NotificationMessage>
        )}
      </Section>
    </Container>
  );
};