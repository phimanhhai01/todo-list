import React, {useState} from 'react';
import Form from '../Form';
const AccordionTask = ({title, id, checkedList, setCheckedList, listTodo, setListTodo }) => {
    const styles={
        root: {
            margin: "5% 0%",
            width: "100%"
        },
        todoBar: {
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid black",
            width: "100%",
            padding: "2%"
        },
        checkboxField: {
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
        },
        buttonDetail: {
            color: "white",
            background: "rgb(86 188 212)",
            width: "96px",
            height: "24px",
            border: "none",
            borderRadius:  "5px",
        },
        buttonRemove: {
            color: "white",
            background: "rgb(217 83 79)",
            width: "96px",
            height: "24px",
            border: "none",
            borderRadius:  "5px",
            marginLeft: "12px"
        }
    }
    const [showDetail, setShowDetail] = useState(false);
    const showDetailClick = () => {
        setShowDetail(!showDetail);
    }
    const handleClick = (e) => {
        console.log(e.target.checked)
        if(e.target.checked){
            setCheckedList([...checkedList, id]);
        }
        else{
            setCheckedList(checkedList.filter(e => e !== id));
        }
    }
    const handleRemove = () => {
        const localListTodo = JSON.parse(localStorage.getItem("todoList"));
        const newlistTodo = localListTodo.filter((e, i) =>  e.id !== id);
        localStorage.setItem("todoList", JSON.stringify(newlistTodo));
        setListTodo(listTodo.filter((e, i) =>  e.id !== id));
        setCheckedList(checkedList.filter((e, i) => e !== id));
    }
    return (
        <div style={styles.root}>
            <div style={styles.todoBar}>
                <div style={styles.checkboxField}>
                    <input type="checkbox" onChange={handleClick} checked={checkedList.includes(id)} ></input>
                    <span>{title}</span>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <button style={styles.buttonDetail} onClick={showDetailClick}>Detail</button>
                    <button style={styles.buttonRemove} onClick={handleRemove}>Remove</button>
                </div>
            </div>
            {showDetail && <div>
                <Form setShowDetail={setShowDetail} setListTodo={setListTodo} type="update" id={id} />
            </div>}
        </div>
    );
}
export default AccordionTask;