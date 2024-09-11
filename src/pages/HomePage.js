import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from '../components/TaskList';
import withTaskHandler from '../hoc/withTaskHandler';

const HomePage = ({ editingTask, onEdit }) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <TaskList onEdit={onEdit} />
      <div className="mt-4">
        <Link to="/add-task" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
          Add New Task
        </Link>
      </div>
    </div>
  );
};

export default withTaskHandler(HomePage);
