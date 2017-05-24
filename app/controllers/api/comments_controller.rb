class Api::CommentsController < ApplicationController

  def index
    @comments = Song.find_by(id: params[:song_id]).comments.includes(:user)
    render :index
  end

  def update
    @comment = Comment.find_by(id: params[:id])

    if @comment.update_attributes(comment_params)
      render :show
    else
      render json: @comments.errors.full_messages, status: 422
    end
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy! if @comment
    render json: @comment
  end

  private

  def comment_params
    params.require(:comment).permit(:author_id, :song_id, :body)
  end

end
