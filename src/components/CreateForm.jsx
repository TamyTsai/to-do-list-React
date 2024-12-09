function CreateForm() {
  return (
    <form className="create-form">
      <input type="text" placeholder="輸入待辦事項" />
      <button type="submit">加入</button>
    </form>
  );
}

export default CreateForm