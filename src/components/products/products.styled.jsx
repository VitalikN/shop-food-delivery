import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  align-items: center;

  border-radius: 8px;
  gap: 5px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  background: #fff;
  border-radius: 8px;
  padding: 10px;
`;
