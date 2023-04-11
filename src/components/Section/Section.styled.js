import styled from 'styled-components';

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  /* background-color: #fff; */
  padding: 20px;
  margin: 0 auto;
  transition: 1.5s;
  color: #000;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
  background-color: #fff;

  & > h2 {
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #000;
    text-shadow: 1px 1px #d9dae0;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin: 0 auto;
  margin-bottom: 25px;
  font-size: 30px;
  border-bottom: 1px solid black;
  padding: 20px;
`;
