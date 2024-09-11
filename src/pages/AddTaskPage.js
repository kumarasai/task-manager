import React from 'react';
import TaskForm from '../components/TaskForm';
import { useLocation } from 'react-router-dom';

const AddTaskPage = () => {
  const location = useLocation();
  const task = location.state?.task || null;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{task ? 'Edit Task' : 'Add Task'}</h1>
      <TaskForm task={task} isEditMode={!!task} />
    </div>
  );
};

export default AddTaskPage;
