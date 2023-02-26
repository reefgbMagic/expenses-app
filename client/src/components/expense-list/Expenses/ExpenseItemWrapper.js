import styled from "styled-components";

const ExpenseTitle = styled.h2`
  flex: 1;
  font-size: 1rem;
  margin: 0 1rem;
  color: white;
`;

const ExpenseListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px auto;
`;

export { ExpenseTitle, ExpenseListItem}