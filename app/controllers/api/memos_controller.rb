module Api
  class MemosController < ApplicationController

    # GET /memos or /memos.json
    def index
      memos = Memo.all
      render json: memos
    end

    def create
      memo = Memo.create(body: params[:body])
      render json: memo
    end

  end

end
