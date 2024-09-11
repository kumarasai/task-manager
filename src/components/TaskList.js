import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = ({ onEdit }) => {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState('');

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => 
      task.title.toLowerCase().includes(filter.toLowerCase()) ||
      task.priority.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, tasks]);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Filter by title or priority" 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
        className="mb-4 p-2 w-full border border-gray-300 rounded-md"
      />
      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} onEdit={onEdit} />
        ))
      )}
    </div>
  );
};

export default TaskList;
