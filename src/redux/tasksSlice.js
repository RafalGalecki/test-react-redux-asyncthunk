import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

// The two functions beneath are for builder:
const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

const isRejectAction = action => {
  return action.type.endsWith('/rejected');
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // extraReducers: {
  //   [fetchTasks.pending]: handlePending,
  //   [fetchTasks.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchTasks.rejected]: handleRejected,
  //   [addTask.pending]: handlePending,
  //   [addTask.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.push(action.payload);
  //   },
  //   [addTask.rejected]: handleRejected,
  //   [deleteTask.pending]: handlePending,
  //   [deleteTask.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       task => task.id === action.payload.id
  //     );
  //     state.items.splice(index, 1);
  //   },
  //   [deleteTask.rejected]: handleRejected,
  //   [toggleCompleted.pending]: handlePending,
  //   [toggleCompleted.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       task => task.id === action.payload.id
  //     );
  //     state.items.splice(index, 1, action.payload);
  //   },
  //   [toggleCompleted.rejected]: handleRejected,
  // },

  //beacuse of extraReducers are deprecated, we use builder callback:
  extraReducers: builder => {
    builder
      // .addCase(fetchTasks.pending, handlePending)
      // .addCase(addTask.pending, handlePending)
      // .addCase(toggleCompleted.pending, handlePending)
      // .addCase(fetchTasks.rejected, handleRejected)
      // .addCase(addTask.rejected, handleRejected)
      // .addCase(toggleCompleted.rejected, handleRejected)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items[index].completed = !state.items[index].completed;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state, action) => {
        state.error = 'someone use old function, fix it!';
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
