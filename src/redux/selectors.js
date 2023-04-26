export const getTasks = state => state.tasks.items;
// items added
export const getStatusFilter = state => state.filters.status;

// The selectors for api ops:

export const getIsLoading = state => state.tasks.isLoading;

export const getError = state => state.tasks.error;
