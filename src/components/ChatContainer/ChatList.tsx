import React from "react";

const ChatList = () => {
  return (
    <div className="w-64 bg-gray-800">
      <div className="px-4 py-3 mb-4 border-b border-gray-700">
        <span className="font-bold text-gray-300">チャンネル</span>
      </div>

      <div className="overflow-y-auto">
        <div className="px-4 py-1 hover:bg-gray-700">
          <div className="text-gray-300 hover:text-white"># Random</div>
        </div>
      </div>
      <div className="px-4 py-2">
        <button className="text-gray-300 hover:text-white">
          + チャンネルを追加する
        </button>
      </div>
    </div>
  );
};

export default ChatList;
