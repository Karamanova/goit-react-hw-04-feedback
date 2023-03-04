import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  const memoizedTitle = useMemo(() => {
    return title;
  }, [title]);

  return (
    <section>
      <Title>{memoizedTitle}</Title>
      <div>{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
