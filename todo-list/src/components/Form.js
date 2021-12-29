import React, {useEffect, useState} from "react";
const Form = ({setListTodo, id, type, setShowDetail}) => {
    const [todo, setTodo] = useState({
        id: null,
        title: "",
        description: "",
        dueDate: new Date().toLocaleDateString('en-CA'),
        pritority: "Normal"
    });
    const handleChangeTitle = (e) => {
        setTodo({
            ...todo,
            title: e.target.value
        })
    } 
    const handleChangeDescription = (e) => {
        setTodo({
            ...todo,
            description: e.target.value
        })
    }
    const handleChangeDueDate = (e) => {
        setTodo({
            ...todo,
            dueDate: e.target.value
        });
    }
    const handleChangeSelect = (e) => {
        setTodo({
            ...todo,
            pritority: e.target.value
        })
    }
    const sortTodoListByDate = (todoList) => {
        const sortedTodoList = todoList.sort((a,b) => {
            return new Date(a.dueDate) - new Date(b.dueDate);
        });
        return [...sortedTodoList];
    }
    const handleClickAdd = () => {
        const todoList = JSON.parse(localStorage.getItem("todoList"));
        if(todoList === null || todoList.length === 0){
            const newTodo = {
                id: Math.floor(Math.random() * 100000),
                title: todo.title,
                description: todo.description,
                dueDate: todo.dueDate,
                pritority: todo.pritority
            }
            let newTodoList = [];
            newTodoList.push(newTodo);
            localStorage.setItem("todoList", JSON.stringify(newTodoList));
            setListTodo([...newTodoList]);
        }
        else{
            const newTodo = {
                id: Math.floor(Math.random() * 100000),
                title: todo.title,
                description: todo.description,
                dueDate: todo.dueDate,
                pritority: todo.pritority
            }
            localStorage.setItem("todoList", JSON.stringify(sortTodoListByDate([...todoList, newTodo])));
            setListTodo(sortTodoListByDate([...todoList, newTodo]));
        }
    }
    const handleClickUpdate = () => {
        const todoList = JSON.parse(localStorage.getItem("todoList"));
        const updatedTodoList = [...todoList].filter((e, i) => e.id !== id);
        localStorage.setItem("todoList", JSON.stringify(sortTodoListByDate([...updatedTodoList, todo])));
        setListTodo(sortTodoListByDate([...updatedTodoList, todo]));
    }
    useEffect(() => {
        const todoList = JSON.parse(localStorage.getItem("todoList"));
        console.log(todoList);
        if(id){
            let foundTask = todoList.find(e => e.id === id);
            // for(let i = 0 ; i<todoList.length ; i++){
            //     if(todoList[i].id === id){
            //         foundTask = todoList[i];
            //     }
            // }
            console.log(foundTask);
            setTodo({
                id: id,
                title: foundTask.title,
                description: foundTask.description,
                dueDate: foundTask.dueDate,
                pritority: foundTask.pritority
            })
        }
    }, [id]);
    const styleRoot = type === "update" ? {padding: "5%", border: '1px black solid'} : {};
    const styles = {
        root: {
            padding: "5%"
        },
        header:{
            textAlign: "center"
        },
        title: {
            width: "100%",
            height: "36px",
            marginBottom: "12px",
            paddingLeft: "1%"
        },
        description: {
            width: "100%",
            height: "240px",
        },
        dueDateAndPriority: {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: "10%",
            marginTop: "5%"
        },
        button: {
            width: "100%",
            margin: "20% 0%",
            height: "36px",
            color: "white",
            background: "green",
            borderRadius: "5px",
            border: "none"
        },
        fieldName: {
            fontWeight: "bold"
        }
    }
    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // const convertMonth = (date) => {
    //     let dateArray = date.split('-');
    //     dateArray[1] = months[dateArray[1] - 1];
    //     dateArray.reverse();
    //     return dateArray.join(' ');
    // }
    return (
        <div style={styleRoot}>
            <h2 style={styles.header}>{!type && "New Task"}</h2>
            <input style={styles.title} type="text" placeholder="Add new task" name="title" onChange={handleChangeTitle} value={todo.title}></input>
            <span style={styles.fieldName}>Description</span>
            <textarea style={styles.description} type="text" name="description" onChange={handleChangeDescription} value={todo.description}></textarea>
            <div style={styles.dueDateAndPriority}>
                <div style={{width: "100%"}}>
                    <span style={styles.fieldName}>Due Date</span>
                    <input style={{width: "100%"}} type="date" name="dueDate" min={new Date().toLocaleDateString('en-CA')} onChange={handleChangeDueDate} value={todo.dueDate}></input>
                </div>
                <div style={{width: "100%"}}>
                    <span style={styles.fieldName}>Priority</span>
                    <select style={{width: "102%", height: "24px"}} name="priority" onChange={handleChangeSelect} value={todo.pritority}>
                        <option value="Low">Low</option>
                        <option value="Normal">Normal</option>
                        <option value="High">High</option>
                    </select>
                </div>
            </div>
            {type==="update" ? <button style={styles.button} onClick={handleClickUpdate}>Update</button> : <button style={styles.button} onClick={handleClickAdd}>Add</button>}
        </div>
    );
}

export default Form;