import type { Memo } from "./types/Memo";
import { useState } from "react";

export const CrudMemo = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");
  const [replyId, setReplyId] = useState<number | null>(null);
  const [replyText, setReplyText] = useState<string>("");
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
  const submitReply = (id: number) => {
    const newReply: Memo = {
      id: Date.now(),
      content: replyText,
      replyId: id,
    };
    setMemos([...memos, newReply]);
    setReplyId(null);
    setReplyText("");
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
        {memos
          .filter((m) => m.replyId === null)
          .map((m) => (
            <li key={m.id} className="mb-4 p-4 border rounded shadow-sm">
              {editingId === m.id ? (
                <div>
                  <input
                    className="bg-amber-200 p-1"
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  <button onClick={handleUpdateMemo}>保存</button>
                </div>
              ) : (
                <div>
                  <span className="font-bold">{m.content}</span>
                  <button
                    className="ml-2 text-blue-500"
                    onClick={() => handleEdit(m.id, m.content)}
                  >
                    編集
                  </button>
                  <button
                    className="ml-2 text-red-500"
                    onClick={() => handleDelete(m.id)}
                  >
                    削除
                  </button>
                  <button
                    className="ml-2 text-green-500"
                    onClick={() => setReplyId(m.id)}
                  >
                    返信
                  </button>
                </div>
              )}

              {replyId === m.id && (
                <div className="mt-2 ml-8">
                  <input
                    className="border-b-2 border-green-500 outline-none"
                    placeholder="返信を入力..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  />
                  <button
                    className="bg-green-500 text-white px-2 ml-2 rounded"
                    onClick={() => submitReply(m.id)}
                  >
                    返信を送る
                  </button>
                  <button
                    className="ml-2 text-gray-500"
                    onClick={() => setReplyId(null)}
                  >
                    キャンセル
                  </button>
                </div>
              )}

              <ul className="ml-8 mt-2 border-l-2 border-gray-200 pl-4">
                {memos
                  .filter((child) => child.replyId === m.id) 
                  .map((child) => (
                    <li key={child.id} className="text-sm text-gray-600 my-1">
                      └ {child.content}
                      <button
                        className="ml-2 text-red-300"
                        onClick={() => handleDelete(child.id)}
                      >
                        削除
                      </button>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
};
