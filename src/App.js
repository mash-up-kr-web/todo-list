import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
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
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [isShown, setIsShown] = useState(false);

  const inputRef = useRef(null);

  const handleChange = useCallback(event => setValue(event.target.value), []);
  const handleClick = useCallback(() => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: prevTodos.length, content: value },
    ]);
    setValue('');
  }, [value]);

  useEffect(() => {
    if (todos.length === 3) {
      setIsShown(true);
      setTimeout(() => setIsShown(false), 3000);
    }
  }, [todos]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <S.Wrapper>
      <S.Title>Todo List</S.Title>
      <S.Label htmlFor="todo">할 일: </S.Label>
      <S.Input
        ref={inputRef}
        type="text"
        id="todo"
        value={value}
        onChange={handleChange}
      />
      <S.Button type="button" onClick={handleClick}>추가</S.Button>
      <S.TodoList>
        {todos.map(todo => (
          <S.TodoItem key={todo.id}>
            {todo.content}
          </S.TodoItem>
        ))}
      </S.TodoList>
      {isShown && (
        <S.Paragraph>
          오늘 할 일을 3개 등록하셨네요!
        </S.Paragraph>
      )}
    </S.Wrapper>
  )
};

export default App;

