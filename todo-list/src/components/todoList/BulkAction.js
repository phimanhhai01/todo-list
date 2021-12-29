import React, { useEffect } from 'react';
const BulkAction = ({listTodo, checkedList, setCheckedList, setListTodo}) => {
    const styles = {
        root: {
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid black",
            borderRadius: "10px",
            height: "auto",
            margin: "3% 0",
            padding: "5%",
            background: "#b5b8bd"
        },
        buttonDone: {
            color: "white",
            background: "#34baeb",
            width: "96px",
            height: "24px",
            border: "none",
            borderRadius:  "5px",
        },
        buttonRemove: {
            color: "white",
            background: "#c23e5f",
            width: "96px",
            height: "24px",
            border: "none",
            borderRadius:  "5px",
            marginLeft: "12px"
        }
    }
    const handleRemoveAll = () => {
        let currentListTodo = [...listTodo];
        let localListTodo = JSON.parse(localStorage.getItem("todoList"));
        for (let i = 0 ; i<checkedList.length ; i++){
            localListTodo = localListTodo.filter(e => e.id !== checkedList[i]);
            currentListTodo = currentListTodo.filter(e => e.id !== checkedList[i]);
        }
        localStorage.setItem("todoList", JSON.stringify(localListTodo));
        setListTodo([...currentListTodo]);
        setCheckedList([]);
    }
    return (
        <div style={styles.root}>
            <span>Bulk: Action</span>
            <div style={{display: "flex"}}>
                <button style={styles.buttonDone}>Done</button>
                <button style={styles.buttonRemove} onClick={handleRemoveAll} >Remove All</button>
            </div>
        </div>
    )
}

export default BulkAction;