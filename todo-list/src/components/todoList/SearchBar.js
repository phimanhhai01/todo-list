import React from 'react';

const SearchBar = ({listTodo, setListTodo}) => {
    const styles = {
        search: {
            width: "100%",
            height: "36px",
            border: "1px black solid",
            paddingLeft: "0.5rem"
        },
    }
    const handleSearch = (e) => {
        setListTodo([...JSON.parse(localStorage.getItem('todoList'))].filter(element => {
            return element.title.search(e.target.value) !== -1
        }));
    }
    return (
            <input style={styles.search} placeholder="Search..." type="text" onChange={handleSearch}></input>
    )
}

export default SearchBar;