import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  background: linear-gradient(to left, #654ea3, #eaafc8);
  color: #00e5ffe6;

  border-radius: 8px;
  gap: 5px;
  list-style: none;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  border: 1px solid #654ea3;
  border-radius: 8px;
  padding: 10px;
`;
