import React, { useState } from 'react';

const withTaskHandler = (WrappedComponent) => {
  return (props) => {
    const [editingTask, setEditingTask] = useState(null);

    const handleEdit = (task) => {
      setEditingTask(task);
    };

    const handleClearEdit = () => {
      setEditingTask(null);
    };

    return (
      <WrappedComponent 
        {...props} 
        editingTask={editingTask} 
        onEdit={handleEdit} 
        onClearEdit={handleClearEdit} 
      />
    );
  };
};

export default withTaskHandler;
