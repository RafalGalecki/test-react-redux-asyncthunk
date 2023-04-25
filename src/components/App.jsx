import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "redux/selectors";
import {fetchTasks} from "redux/operations"



export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchTasks());
}, [dispatch])

  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div>
  );
};

