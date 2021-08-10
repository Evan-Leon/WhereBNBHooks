class Api::ListingsController < ApplicationController

    def index 
      @listings = Listing.all 
      render "api/listings/index"
    end

    def show 
      @listing = Listing.find(params[:id])
      render :show
    end

    def search_index 
      
      @listings = Listing.search_results(params[:searchString])
      render "api/listings/index"
    end

end