import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faClipboardList, faHandSparkles, faStar, faMedal, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { format, formatDistanceStrict, addDays } from 'date-fns';

class ReviewDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: '',
            newRev: false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount(){
        
        this.props.fetchListingReviews(this.props.listingId)
            .then(reviews => this.setState({reviews}))

    }

    componentDidUpdate(prevProps, prevState){
        
       
        if (prevState.reviews.length !== this.state.reviews.length){
            this.setState({
                reviews: this.state.reviews
            })
        } else if (prevProps.reviews.length !== this.props.reviews.length) {
            this.props.fetchListingReviews(this.props.listingId)
                .then(reviews => this.setState({ reviews }))
        }
    }

    handleDelete(e) {
        e.preventDefault()

        this.props.deleteReview(e.target.value)
            // .then(this.props.fetchListingReviews(this.props.listingId))
            // .then(reviews => this.setState({ reviews }))
    }

    handleEdit(e) {
        e.preventDefault();

        this.props.updateFilter('review-display-edit-container', [e.target.value])
        this.props.openModal('review-display-edit-container')
    }

    

    render(){
        
        
        let { reviews } = this.state.reviews;
        
        if (!reviews) return null;
        
;        return(
            <div className="review-container">
                <h3 className="review-title">  <FontAwesomeIcon icon={faStar} className="star"/> {this.props.roundRating} ({this.props.reviewNum} reviews)</h3>
               
                <div className='actual-reviews'>
                        { 
                            Object.values(reviews).map((review, i) => (
                                <div className="review-display-container" key={i}>
                                    <div className="user-title-container">
                                        <li className="user-rev" ><FontAwesomeIcon className="rev-user-icon"  icon={faUserCircle}  />{review.guest.first_name} </li>
                                        <li className="rev-date">{format(new Date(review.createdAt),'MMMM yyyy' )}</li>
                                    </div>
                                    <li > {review.body} </li>
                                    {this.props.currentUser === review.guest.id && (
                                        
                                        <div className="edit-delete-btns-container">
                                            <button className="edit-delete-review-btns" value={review.id} onClick={this.handleDelete}>Delete </button>
                                            <button className="edit-delete-review-btns" value={review.id} onClick={this.handleEdit}>Edit </button>
                                        </div>
                                    
                                    )}
                                </div>
                            ))
                        }
                    
                </div>
            </div>
        )
    }


}

export default ReviewDisplay;