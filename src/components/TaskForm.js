import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/taskSlice';

const TaskForm = ({ task, isEditMode }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [priority, setPriority] = useState(task ? task.priority : 'Low');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      alert('Title cannot be empty');
      return;
    }
    if (isEditMode) {
      dispatch(editTask({ id: task.id, title, priority }));
    } else {
      dispatch(addTask({ title, priority }));
    }
    setTitle('');
    setPriority('Low');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Priority</label>
        <select 
          value={priority} 
          onChange={(e) => setPriority(e.target.value)} 
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        {isEditMode ? 'Edit Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
