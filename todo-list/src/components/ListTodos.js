import React, {useState, useEffect} from 'react';
import AccordionTask from './todoList/AccordionTask';
import BulkAction from './todoList/BulkAction';
import SearchBar from './todoList/SearchBar';
const ListTodo = ({listTodo, setListTodo}) => {
    const styles={
        root: {
            width: "100%"
        },
        header:{
            textAlign: "center"
        },
    }
    const [checkedList, setCheckedList] = useState([]);

    return (
        <div style={styles.root}>
            <h2 style={styles.header}>To Do List</h2>
            <SearchBar listTodo={listTodo} setListTodo={setListTodo} />
            {listTodo && listTodo.map((element, index) => {
                return <AccordionTask
                            checkedList={checkedList}
                            setCheckedList={setCheckedList}
                            listTodo={listTodo}
                            setListTodo={setListTodo}
                            key={index}
                            id={element.id}
                            title={element.title}
                        />
            })}
            {(checkedList.length > 0 && listTodo.length > 0) && <BulkAction listTodo={listTodo} checkedList={checkedList} setCheckedList={setCheckedList} setListTodo={setListTodo} />}
        </div>
    )
}

export default ListTodo;