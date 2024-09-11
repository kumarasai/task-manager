import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';

const TaskItem = ({ task, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="bg-gray-100 p-4 rounded mb-2 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-bold">{task.title}</h3>
        <p className="text-sm">{task.priority}</p>
      </div>
      <div>
        <button onClick={() => onEdit(task)} className="mr-2 text-blue-500">Edit</button>
        <button onClick={handleDelete} className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
