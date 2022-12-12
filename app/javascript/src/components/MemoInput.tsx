import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  body: string;
};

export const MemoInput = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // TODO
    console.log(data);
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
