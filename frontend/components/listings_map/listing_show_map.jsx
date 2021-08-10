import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../utils/marker_manager';

const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
})

const mapOptions = {
    center: {
        lat: 40.730610,
        lng: -73.935242
    },
    zoom: 10
}

class ListingShowMap extends React.Component {

    componentDidMount() {
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        if (this.props.singleListing) {
            this.props.fetchListing(this.props.listingId)
        } else {
            
            this.registerListeners();
            this.MarkerManager.updateMarkers(this.props.listings);
        }
    }

    componentDidUpdate() {
        if (this.props.singleListing) {
            
            // const targetListingKey = Object.keys(this.props.listings)[0];
            // const targetListing = this.props.listings[targetListingKey];
            const mapLoc = {
                lat: this.props.listing.latitude,
                lng: this.props.listing.longitude
            }

            this.map.setCenter(mapLoc);
            this.map.setZoom(13);
            this.MarkerManager.updateMarkers([this.props.listing]);
        } else {

            this.MarkerManager.updateMarkers(this.props.listings)

        }
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateFilter('bounds', bounds);
        });
    }
    // google.maps.event.addListener(this.map, 'click', (e) => {
    //     const coords = getCoordsObj(e.latLng);
    //     this.handleClick(coords);
    // });

    // }

    handleMarkerClick(listing) {
        this.props.history.push(`listings/${listing.id}`);
    }

    render() {


        return (
            <div id='map-container' className="show-map" ref={map => this.mapNode = map}>

            </div>
        )
    }
}

export default withRouter(ListingShowMap);