import React from 'react'

const TodoList = ({ todoList, doneTodo }) => {
    return (
        <>
            {todoList && todoList.filter((item) => !item.done).map((todo, index) => (
                <tr key={index} id={`todo-${index}`}>
                    <td className="text-left">
                        {todo.text}
                    </td>
                    <td>
                        <button 
                            className="btn btn-outline-success btn-sm"
                            id={todo._id}
                            cy-data={`todo-${index}`}
                            onClick={e => doneTodo(e)}
                        >
                            Done
                        </button>
                    </td>
                </tr>
            ))}
        </>
    )
}

export default TodoList
