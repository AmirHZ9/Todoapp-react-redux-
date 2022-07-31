import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import TaskFilter from "./components/shared/TaskFilter";
function App() {
  return (
    <Provider store={store}>
      <>
        <Routes>
          <Route path="/filterTodos/:id" element={<TaskFilter />} />
          <Route path="/" element={<Navigate to="/filterTodos/allTodos" />} />
        </Routes>
      </>
    </Provider>
  );
}

export default App;
