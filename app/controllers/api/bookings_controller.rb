class Api::BookingsController < ApplicationController
    before_action :ensure_logged_in

    def index 
        user = current_user
        @bookings = user.bookings

        render '/api/bookings/index'
    end

    def show 
        @booking = Booking.find(params[:id])

        render 'api/bookings/show'
    end

    def update 
        
        @booking = Booking.find(params[:id])

        if @booking.update_attributes(booking_params)
            render '/api/bookings/show'
        else
            render json: ["Could not update booking, try again!"], status: 404
        end
    end

    def destroy 
        @booking = Booking.find(params[:id])
        @booking.destroy
        render 'api/bookings/show'
    end

    def create 
        @booking = Booking.new(booking_params)
        
        if @booking.save! 
            render 'api/bookings/show'
        else  
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def booking_params
        params.require(:booking).permit(:check_in, :check_out, :listing_id, :guest_id, :num_guests) 
    end

end