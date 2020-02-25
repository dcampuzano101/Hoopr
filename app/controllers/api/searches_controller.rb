class Api::SearchesController < ApplicationController
    def show
        @query = ''
        @businesses = Business.all
        render 'api/searches/search'
    end
    
    def search
        @query = params[:query].downcase
        @businesses = Business.where('lower(borough) like ? or lower(neighborhood) like ? or lower(name) like ?',  "%#{@query}%", "%#{@query}%", "%#{@query}%")
        render 'api/searches/search'
    end

    def borough

        @borough = params[:borough].downcase
        @businesses = Business.where('lower(borough) like ? or lower(neighborhood) like ?',  "%#{@borough}%", "%#{@borough}%")
        render 'api/searches/borough'

    end
    
end