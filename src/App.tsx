import { CrudMemo } from "./Memo";

export default function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        シンプルメモアプリ（非保存）
      </h1>
      <CrudMemo />
    </div>
  );
}
