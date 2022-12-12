module Api
  class MemosController < ApplicationController

    # GET /memos or /memos.json
    def index
      memos = Memo.all
      render json: memos
    end

  end

end
