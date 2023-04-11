import propTypes from 'prop-types';
import { SectionWrapper } from './Section.styled';

//створюємо компонент Section, який буде відображати секції
export function Section({ title, children }) {
  return (
    <SectionWrapper>
      <h2>{title}</h2>
      {children}
    </SectionWrapper>
  );
}

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node,
};
