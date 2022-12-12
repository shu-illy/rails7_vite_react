import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Memo } from "../types";
import useSWR from "swr";
import { fetcher } from "../lib/swr";

type Inputs = {
  body: string;
};

export const MemoInput = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { data, mutate } = useSWR<Memo[]>("/api/memos", fetcher);
  const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
    const response = await axios.post<Memo>("/api/memos", inputs);
    const memo = response.data;
    mutate([...(data ?? []), memo]);
  };

  return (
    <div className="md:w-2/3 w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="contents">
        <div className="my-8">
          <div className="flex mt-4">
            <input
              {...register("body")}
              className="block shadow rounded-md border border-gray-200 outline-none mr-4 px-3 py-2 w-full"
            />
            <input
              value="Create Memo"
              type="submit"
              className="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
