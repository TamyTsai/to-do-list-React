import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  // 組件名 慣例 與 檔名相同
  const [todos, setTodos] = useState([
    {content: '打掃廁所', id: Math.random(), isCompleted: false, isEditing: false},
    {content: '寫作業', id: Math.random(), isCompleted: true, isEditing: false},
  ]);
  // 複數的命名方式，表示裡面為陣列
  // 確保state被放在需要用到這個state的最上層組件，因為props只能由上到下傳遞溝通
  // 理論上可以把所有state寫在最上層組件，這樣所有組件都能取用到這個state，但是會造成props drilling（將props一層一層往下傳），往下傳遞的過程中，有些組件根本用不到這些state，但還是會經過他們
  // 想要讓一個state在任何組件都可以用，可用context來創建全域的props
  // id可用資料庫的id

  const addTodo = (content) => {
    setTodos([...todos, {content: content, id: Math.random(), isCompleted: false, isEditing: false},]);
  };
  // 每當執行addTodo函式，新Todos陣列就會被產生出來
  // 裡面包含舊的todos陣列，與新的todo
  // 然後用setTodos函式更新state
  // ... 為 其餘運算子，可將 陣列 或 物件 裡的資料展開
  // content: content 屬性名與變數名相同時，可以只寫一次

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => {
      return todo.id !== id;
      // 點擊刪除鍵時，會傳入被刪除項目的id，所以回傳過濾掉該id，只保留沒有該id的陣列
    }));
  };

  const toggleCompleted = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ?
      {...todo, isCompleted: !todo.isCompleted} : todo;
      // 將id相同的部分（點擊到的那個id 的isCompleted屬性值反轉），其餘維持原狀
    }))
  }

  const toggleIsEditing = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ?
      {...todo, isEditing: !todo.isEditing} : todo;
    }));
  };

  const editTodo = (id, newContent) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ?
      {...todo, content: newContent, isEditing: false} : todo;
    }))
  }

  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateForm addTodo={addTodo}/>
      {todos.map((todo) => {
        return (
        <Todo 
          todo={todo} 
          key={todo.id} 
          // 不要把Math.random()寫在這，因為這會導致Todo組件重新渲染時，Math.random()都會再執行一次，key變得不一樣，react察覺key有變動，就會重新創建新組件，導致網頁變得很慢
          deleteTodo={deleteTodo} 
          toggleCompleted={toggleCompleted} 
          toggleIsEditing={toggleIsEditing}
          editTodo={editTodo}
        />
        // map可將一個陣列，轉換為另一個陣列
        );
      })}
    </div>
  );
}

export default TodoWrapper;
