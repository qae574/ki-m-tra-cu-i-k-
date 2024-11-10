// TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleTask, onDeleteTask, onDeleteCompleted, currentTab }) => {
  return (
    <div>
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>

      {/* Chỉ hiển thị nút Xóa tất cả task đã completed ở tab Completed */}
      {currentTab === 'Completed' && (
        <button onClick={onDeleteCompleted} className="delete-all">
          Delete     
        </button>
      )}
    </div>
  );
};

export default TodoList;
