// App.jsx
import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [currentTab, setCurrentTab] = useState('All');  // Quản lý tab hiện tại
  const [newTask, setNewTask] = useState('');  // Quản lý giá trị nhập Task mới
  const [todos, setTodos] = useState([]);  // Quản lý danh sách todos

  // Thêm task mới
  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTodo = {
        id: Date.now(),
        text: newTask,
        active: true,  // Tạo task mới với trạng thái active mặc định là true
      };
      setTodos([...todos, newTodo]);
      setNewTask('');
    }
  };

  // Đổi trạng thái task (Active <=> Completed)
  const handleToggleTask = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, active: !todo.active } : todo
    ));
  };

  // Xóa task
  const handleDeleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Xóa tất cả các task đã hoàn thành
  const handleDeleteCompletedTasks = () => {
    setTodos(todos.filter(todo => todo.active));
  };

  // Lọc todo theo tab (All, Active, Completed)
  const filteredTodos = todos.filter(todo => {
    if (currentTab === 'All') return true;
    return currentTab === 'Active' ? todo.active : !todo.active;
  });

  return (
    <div className="todo-container">
      <h2 className='top'>#todo</h2>
      <header className="header">
        <button onClick={() => setCurrentTab('All')} className={currentTab === 'All' ? 'active' : ''}>All</button>
        <button onClick={() => setCurrentTab('Active')} className={currentTab === 'Active' ? 'active' : ''}>Active</button>
        <button onClick={() => setCurrentTab('Completed')} className={currentTab === 'Completed' ? 'active' : ''}>Completed</button>
      </header>

      {/* Form thêm task chỉ hiển thị ở tab "All" và "Active" */}
      {(currentTab === 'All' || currentTab === 'Active') && (
        <div className="todo-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="add detail"
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      )}

      {/* Todo list */}
      <TodoList
        todos={filteredTodos}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
        onDeleteCompleted={handleDeleteCompletedTasks}
        currentTab={currentTab}
      />
    </div>
  );
};

export default App;
