import React from "react";
import { TextareaAutosize } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageArea = () => {
  return (
    <div className="flex-1 flex flex-col bg-gray-500 text-white">
      <div className="p-4 m-3">
        <div className="bg-gray-700 p-3 m-3 rounded-lg">
          <div className="flex items-center mb-2">
            <img
              src={"/default-user-icon.png"}
              alt=""
              className="w-10 h-10 rounded-full mr-2"
            />
            <div>
              <div className="text-sm font-semibold">unknown</div>
              <div className="text-xs text-gray-400">2014/01/01 00:00:00</div>
            </div>
          </div>
          <p className="text-gray-300">やあ</p>
        </div>
      </div>

      <div className="mt-auto px-4 py-2 bottom-0 bg-gray-900">
        <div className="flex items-center">
          <TextareaAutosize
            placeholder="# randomへメッセージを入力"
            className="flex-1 bg-gray-700 text-white p-2 mx-2 rounded-lg focus:outline-none"
          />
          <button className="text-gray-400 hover:text-white">
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageArea;
