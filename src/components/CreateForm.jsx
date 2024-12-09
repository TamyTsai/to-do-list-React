import { useState } from "react";

function CreateForm({addTodo}) {

  const [content, setContent] = useState('');
  // 要給初始值，初始值設定為空字串（輸入框內容為空）
  // useState函數會回傳一個陣列，第一個元素是 要改變的內容（state），第二個元素是 用來改變內容的函數
  // 使用 解構賦值 來取用變數
  const handleSubmit = (e) => {
    // 函數的參數為 事件物件
    e.preventDefault();
    addTodo(content);
    setContent("");
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="輸入待辦事項" value={content} onChange={(e) => {setContent(e.target.value);}}/>
      {/* onChange 會在 input的值發生改變時 執行 */}
      {/* 事件物件（event object） 裡面 存放用戶所輸入的資訊 */}
      {/* 用戶所輸入的資訊 存放於 e.target.value */}
      {/* 輸入的資訊會被儲存在 content這個state 裡面 */}
      {/* 這裡將state與input綁在一起，是一種雙向綁定 */}
      {/* 雙向綁定（two-way binding）當UI發生改變時，state會跟著改變，反之亦然 */}
      <button type="submit">加入</button>
      {/* 雖然沒有建立onClick屬性，但因為此按鈕type為submit，所以可以在form標籤建立onSubmit屬性，來達成相同效果 */}
    </form>
  );
}

export default CreateForm;