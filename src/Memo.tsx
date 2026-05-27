import type { Memo } from "./types/Memo";
import { useState } from "react";

export const CrudMemo = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const handleAddMemo = () => {
    const newMemo: Memo = {
      id: Date.now(),
      content: inputText,
      replyId: null,
    };
    setMemos([...memos, newMemo]);
    setInputText("");
  };
  const handleDelete = (id: number) => {
    setMemos(memos.filter((m) => m.id !== id))
  };

  return (
    <>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="w-xl h-32 border border-black-300 rounded-md p-4 mb-4"
        placeholder="新しいメモを入力してください"
      ></textarea>
      <button
        type="submit"
        onClick={() => handleAddMemo()}
        className="px-6 py-4 bg-green-600 rounded-md text-white  hover:bg-green-700 transition duration-300"
      >
        送信
      </button>

      <ul>
        {memos.map((m) => (
          <li key={m.id}>
            <ul>{m.id} - {m.content} <button onClick={() => handleDelete(m.id)} className="bg-red-500">削除</button></ul>
          </li>
        ))}
      </ul>
    </>
  );
};
