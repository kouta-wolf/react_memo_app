import type { Memo } from "./types/Memo";
import { useState } from "react";

export const CrudMemo = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");
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
    setMemos(memos.filter((m) => m.id !== id));
  };
  const handleEdit = (id: number, content: string) => {
    setEditingId(id);
    setEditingText(content);
  };
  const handleUpdateMemo = () => {
    setMemos(
      memos.map((m) => {
        if (m.id === editingId) {
          return { ...m, content: editingText };
        } else {
          return m;
        }
      }),
    );
    setEditingId(null);
    setEditingText("");
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
            {editingId === m.id ? (
              <div>
                <input
                  className="bg-amber-200"
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />{" "}
                <button onClick={() => handleUpdateMemo()}>保存</button>
              </div>
            ) : (
              <div>
                {m.content}{" "}
                <button onClick={() => handleEdit(m.id, m.content)}>
                  編集
                </button>{" "}
                <button onClick={() => handleDelete(m.id)}>削除</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
