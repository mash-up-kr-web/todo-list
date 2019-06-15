import React, { useState } from 'react';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
  `,
  Title: styled.h1`
  `,
  Label: styled.label``,
  Input: styled.input``,
  Button: styled.button``,
  TodoList: styled.ul``,
  TodoItem: styled.li``,
  Paragraph: styled.p``,
};

const App = () => {
  return (
    <S.Wrapper>
      <S.Title>Todo List</S.Title>
      <S.Label htmlFor="todo">할 일: </S.Label>
      <S.Input type="text" id="todo" />
      <S.Button type="button">추가</S.Button>
      <S.TodoList>
      </S.TodoList>
      <S.Paragraph>
        오늘 할 일을 3개 등록하셨네요!
      </S.Paragraph>
    </S.Wrapper>
  )
};

export default App;
