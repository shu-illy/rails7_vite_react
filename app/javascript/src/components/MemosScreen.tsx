import React, { createContext, FC, useState } from "react";
import { Memo } from "../types";
import { MemoInput } from "./MemoInput";
import { MemoList } from "./MemoList";

type MemosContextType = {
  memos: Memo[];
  setMemos: (memos: Memo[]) => void;
};

export const MemosContext = createContext<MemosContextType>({
  memos: [],
  setMemos: () => {},
});

export const MemosScreen: FC = () => {
  const notice = null;
  const [memos, setMemos] = useState<Memo[]>([]);
  return (
    <>
      {notice && <div id="flash">{notice}</div>}

      <div className="flex justify-between items-start">
        <h1 className="font-bold text-4xl">Memos</h1>
      </div>

      <MemosContext.Provider value={{ memos, setMemos }}>
        <MemoInput />
        <MemoList />
      </MemosContext.Provider>
    </>
  );
};
