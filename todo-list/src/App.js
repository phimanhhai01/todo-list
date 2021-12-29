import React, {useEffect, useState} from 'react';
import Form from './components/Form';
import ListTodos from './components/ListTodos';
function App() {
  const styles={
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10%",
      width: "80%",
      minWidth: "300px",
      margin: "5% 10%",
      padding: "3%",
      border: "1px solid black"
    },
    formField: {
      width: "40%",
      flexgrow: "1",
      minWidth: "300px"
    },
    todoListField: {
      width: "40%",
      flexgrow: "1",
      minWidth: "300px",
    }
  }
  const [listTodo, setListTodo] = useState([]);
  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    if(todoList)
    setListTodo([...todoList])
  }, []);
  return (
    <div style={styles.root}>
      <div style={styles.formField}>
        <Form setListTodo={setListTodo} />
      </div>
      <div style={styles.todoListField}>
        <ListTodos listTodo={listTodo} setListTodo={setListTodo} />
      </div>
    </div>
  );
}

export default App;
