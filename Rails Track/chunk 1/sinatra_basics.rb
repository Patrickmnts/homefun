require 'sinatra'

#IMPORTANT!!! DONT FORGET THE '/'s BEFORE ANYTHING IN URL!
get '/' do
  "Hello, World!"
end

get '/about' do
  "A Little About Me!"
end

#here we have a route where anything after '/hello/' will be contained in the params array w/ the key :name.
get '/hello/:name' do
  params[:name]
  #params could be incorportated into a string as such.
  "My name is #{params[:name]}!"
  #standard methods apply.
  "Or more properly #{params[:name].capitalize}!"
end

#Multiple query variables...
get '/hello/:name/:age' do
  "I would never believe you were only #{params[:age]}, #{params[:name].capitalize}!"
end

##ERB FORM CREATION

#this will load form.erb from the /views directory.
#.erb files are generally html files with ruby included btwn <% _RUBY HERE_ %>
get '/form' do
  erb :form
end

#this little ditty will display the message from the input on form.erb.
post '/form' do
  "You said '#{params[:message]}'"
end

