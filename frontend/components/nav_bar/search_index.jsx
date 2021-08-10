import React from 'react';
import ListingIndexItem from '../listings_index/listing_index_item';
import ListingMap from '../listings_map/listing_map';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';


class SearchIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listings: '',
            search: this.props.match.params.searchString,
            searched: false
        }
    }

    componentDidMount() {
        
        this.props.fetchSearch(this.props.match.params.searchString)
            .then(listings => this.setState(listings))
    }

    componentDidUpdate(prevProps){
       
        if (prevProps.location.pathname !== this.props.location.pathname){
            this.props.fetchSearch(this.props.match.params.searchString)
                .then(listings => this.setState(listings))
        }
    }

    render(){
        
        
        const {listings} = this.props;
        if (!listings) return null;
        
        return(
            
            <div className="listings-index-box">
                <div className="listings-inner">
                    <h2 className="main-index-title">Stays like: '{this.props.match.params.searchString}'</h2>
                    <ul className="list-indexes">
                        {
                    
                            Object.values(listings).map((listing, i) => (
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
    }


}

export default withRouter(SearchIndex);