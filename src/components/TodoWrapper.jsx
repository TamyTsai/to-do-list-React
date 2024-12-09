import CreateForm from "./CreateForm";

function TodoWrapper() {
  // 組件名 慣例 與 檔名相同
  return (
    <dev className="wrapper">
      <h1>待辦事項</h1>
      <CreateForm />
    </dev>
  );
}

export default TodoWrapper;
