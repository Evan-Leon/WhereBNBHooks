import React from 'react';
import ListingIndexItem from './listing_index_item';
import ListingMap from '../listings_map/listing_map';
import {Link} from 'react-router-dom'
import { fetchListing } from '../../actions/listing_actions';

function ListingsIndex(){
   

    // componentDidMount() {
        
    //     this.props.fetchListings();
    // }


    return(
        //  const {listings} = this.props;
        
        // if (!listings) return null;
        // return(
            
            <div className="listings-index-box">
                <div className="listings-inner">
                    <h2 className="main-index-title">All Listings</h2>
                    <ul className="list-indexes">
                        {
                            listings.map((listing, i) => (
                               <Link key ={i} to={`/listings/${listing.id}`} style={{ textDecoration: 'none' }}> <ListingIndexItem 
                                    listing= {listing}
                                    key={listing.id}
                                />
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                
                <div className='map-index-box'>
                    <ListingMap 
                    listings={listings}
                    // listingId={listing.id}
                    singleListing={false}
                    // fetchListing = {fetchListing}
                    updateFilter = {this.props.updateFilter}
                    fetchListings = {this.props.fetchListings} />
                </div>
            </div>
        )
    // )


}

export default ListingsIndex;

