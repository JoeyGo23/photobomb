json.array!(@photos) do |photo|
  json.extract! photo, :id, :user_id, :photo, :title
  json.url photo_url(photo, format: :json)
end
