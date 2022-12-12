import React, { FC } from "react";
import { Memo } from "../types";
import { MemoInput } from "./MemoInput";
import { MemoList } from "./MemoList";

export const MemosScreen: FC = () => {
  const notice = null;
  return (
    <>
      {notice && <div id="flash">{notice}</div>}

      <div className="flex justify-between items-start">
        <h1 className="font-bold text-4xl">Memos</h1>
      </div>

      <MemoInput />
      <MemoList />
    </>
  );
};
