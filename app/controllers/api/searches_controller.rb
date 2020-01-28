class Api::SearchesController < ApplicationController
    def show
        @query = ''
        @businesses = Business.all
        render 'api/searches/search'
    end
    
    def search
        @query = params[:query].downcase
        @businesses = Business.where('lower(name) like ? or lower(neighborhood) like ?',  "%#{@query}%", "%#{@query}%")
        render 'api/searches/search'
    end
    
end