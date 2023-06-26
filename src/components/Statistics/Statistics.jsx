import PropTypes from 'prop-types';

import { TextStyle, SpanStyle } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <TextStyle>
        Good : <SpanStyle>{good}</SpanStyle>
      </TextStyle>
      <TextStyle>
        Neutral : <SpanStyle>{neutral}</SpanStyle>
      </TextStyle>
      <TextStyle>
        Bad : <SpanStyle>{bad}</SpanStyle>
      </TextStyle>
      <TextStyle>
        Total : <SpanStyle>{total}</SpanStyle>
      </TextStyle>
      <TextStyle>
        Positive feedback : <SpanStyle>{positivePercentage}%</SpanStyle>
      </TextStyle>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
