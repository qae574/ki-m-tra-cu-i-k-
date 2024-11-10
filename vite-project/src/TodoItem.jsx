// TodoItem.jsx
import React from 'react';

const TodoItem = ({ todo, onToggleTask, onDeleteTask }) => {
  return (
    <li className={`todo-item ${todo.active ? '' : 'completed'}`}>
      <input
        type="checkbox"
        checked={!todo.active}
        onChange={() => onToggleTask(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.active ? 'none' : 'line-through',
        }}
      >
        {todo.text}
      </span>
      {/* Hiển thị nút xóa chỉ khi task đã hoàn thành */}
      {!todo.active && (
        <button onClick={() => onDeleteTask(todo.id)}>Delete</button>
      )}
    </li>
  );
};

export default TodoItem;
