import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./Editform";

function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEditing, editTodo }) {
  return todo.isEditing ? (
    <EditForm todo={todo} editTodo={editTodo}/>
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          toggleCompleted(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <MdEdit style={{ cursor: "pointer" }} onClick={()=>{toggleIsEditing(todo.id)}}/>
        <MdDelete
          onClick={() => {
            deleteTodo(todo.id);
          }}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        />
      </div>
    </div>
  );
  // 若isEditing為true，就回傳EditForm組件，若為false就回傳後面的html
}

export default Todo;
