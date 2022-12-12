import React, { FC, useContext } from "react";
import { fetcher } from "../lib/swr";
import { Memo } from "../types";
import useSWR from "swr";
import { MemosContext } from "./MemosScreen";

export const MemoList: FC = () => {
  const { memos, setMemos } = useContext(MemosContext);
  const { data, error } = useSWR<Memo[]>("/api/memos", fetcher);
  console.log(data);
  if (error) return <div>error</div>;
  if (!data) return <div>loading</div>;
  setMemos(data);
  return (
    <div id="memos" className="min-w-full">
      {memos.map((memo) => (
        <>
          <div key={memo.id} className="my-4">
            <div className="flex justify-between">
              <p className="my-5">{memo.body}</p>
              <div>
                <a href="#" className="rounded-lg py-3 ml-2 px-5 bg-gray-100 inline-block font-medium">
                  Show this memo
                </a>
                <a href="#" className="rounded-lg py-3 ml-2 px-5 bg-gray-100 inline-block font-medium">
                  Edit this memo
                </a>
              </div>
            </div>
            <hr className="mt-2" />
          </div>
        </>
      ))}
    </div>
  );
};
