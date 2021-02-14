import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      
      <TodoList title="React Todo List" />
      <TodoList title="Node Todo List" />
    </div>
  );
}

export default App;
