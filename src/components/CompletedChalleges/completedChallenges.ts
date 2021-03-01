import styled from 'styled-components'

export const CompletedChallengesContainer = styled.div`
.completedChallengesContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 3.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d7d8da;

  font-weight: 500;
}

.completedChallengesContainer span:first-child {
  font-size: 1.25rem;
  color: ${props => props.theme.colors.text.color};
  transition: color 1000ms;
}
.completedChallengesContainer span:last-child {
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text.color};
  transition: color 1000ms;
}
`;