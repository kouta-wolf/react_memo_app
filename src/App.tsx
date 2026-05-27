export default function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        シンプルメモアプリ（非保存）
      </h1>
      <textarea
        className="w-xl h-32 border border-black-300 rounded-md p-4 mb-4"
        placeholder="新しいメモを入力してください"
      ></textarea>
      <button
        type="submit"
        className="px-6 py-4 bg-green-600 rounded-md text-white  hover:bg-green-700 transition duration-300"
      >
        送信
      </button>
    </div>
  );
}
