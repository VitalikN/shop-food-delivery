import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  border: 1px solid #1976d2;
  border-radius: 8px;

  gap: 10px;
  padding: 10px 20px;

  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  border: 1px solid #1976d2;
  border-radius: 8px;
  padding: 10px;
`;