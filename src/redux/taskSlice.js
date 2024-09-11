import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        priority: action.payload.priority,
      };
      state.push(newTask);
    },
    editTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
