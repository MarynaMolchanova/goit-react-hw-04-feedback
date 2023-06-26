import PropTypes from 'prop-types';
import { SectionStyle, TitleStyle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <TitleStyle>{title}</TitleStyle>
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
