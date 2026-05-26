export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-xl overflow-hidden p-8 text-center">
        <h1 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
          Hello,React + TailWindCss
        </h1>
        <p className="text-gray-600 mb-6">
          この文字が中央でタイトルが青ならOK。
        </p>
        <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300">
          ボタン
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-400">
        画面幅を変えてタイトルの大きさが変われば、レスポンシブ動作OK。
      </p>
    </div>
  );
}
