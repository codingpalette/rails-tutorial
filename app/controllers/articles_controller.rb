class ArticlesController < ApplicationController
  def index
      print "Hello World"
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end
end
