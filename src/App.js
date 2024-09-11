import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTaskPage from './pages/AddTaskPage';

const App = () => {
  const navigate = useNavigate();

  const handleEdit = (task) => {
    navigate('/edit-task', { state: { task } });
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>
      <TaskList onEdit={handleEdit} />
      <button
        onClick={() => navigate('/add-task')}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add New Task
      </button>

      <Routes>
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/edit-task" element={<AddTaskPage />} />
      </Routes>
    </div>
  );
};

export default App;
