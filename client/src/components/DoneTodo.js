import React from 'react'

const DoneTodo = ({ todoList, undoDoneTodo }) => {
    return (
        <>
            {todoList && todoList.filter((item) => item.done).map((todo, index) => (
                <tr key={index}>
                    <td>{todo.text}</td>
                    <td>
                        <button 
                            className="btn btn-outline-warning btn-sm"
                            id={todo._id}
                            cy-data={`todo-${index}`}
                            onClick={() => undoDoneTodo(todo._id)}
                        >
                            Undo
                        </button>
                    </td>
                </tr>
            ))}
        </>
    )
}

export default DoneTodo
