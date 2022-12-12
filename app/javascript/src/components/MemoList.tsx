import React, { FC } from "react";
import { Memo } from "../types";

type Props = {
  memos: Memo[];
};

export const MemoList: FC<Props> = ({ memos }) => {
  return (
    <div id="memos" className="min-w-full">
      {memos.map((memo) => (
        <div id="<%= dom_id memo %>" className="my-4">
          <div className="flex justify-between">
            <p className="my-5">{memo.body}</p>

            <a href="#" className="rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium">
              Show this memo
            </a>
            <a href="#" className="rounded-lg py-3 ml-2 px-5 bg-gray-100 inline-block font-medium">
              Edit this memo
            </a>
          </div>
          <hr className="mt-2" />
        </div>
      ))}
    </div>
  );
};
