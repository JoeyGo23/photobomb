json.array!(@articles) do |article|
  json.extract! article, :id, :content, :title, :user_id
  json.url article_url(article, format: :json)
end
