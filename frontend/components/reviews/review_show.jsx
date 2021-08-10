import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCity, faCalendarAlt, faClipboard, faHandSparkles, faStar, faMedal, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { format, formatDistanceStrict, addDays } from 'date-fns';

class ReviewShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: ''
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        
    }

    componentDidMount(){
        
        this.props.fetchUserReviews()
            .then(reviews => this.setState({reviews}))

    }

    componentDidUpdate(prevProps, prevState) {
        

        if (prevState.reviews.length !== this.state.reviews.length) {
            this.setState({
                reviews: this.state.reviews
            })
        } else if (prevProps.reviews.length !== this.props.reviews.length) {
            this.props.fetchUserReviews(this.props.listingId)
                .then(reviews => this.setState({ reviews }))
        }
    }
   

    handleDelete(e){
        e.preventDefault()
        
        this.props.deleteReview(e.target.value)
        .then(() => this.props.fetchReviews(this.props.currentUser))
        this.setState({deleted:true})
    }

    handleEdit(e){
        e.preventDefault();
        
        this.props.updateFilter('edit-review', [e.target.value])
        this.props.openModal('edit-review')
    }

    render(){
        
        let {reviews} = this.state.reviews;

        if (!reviews) return null;
        
;        return(

                <div className="review-show-out-container">
                     <h1 className="review-show-title">{this.props.userName.firstName} {this.props.userName.lastName} Reviews</h1>
                    <div className="review-show-container">
                    
                    {Object.values(reviews).map((rev, i) =>(
                        <div key={i} className="review-show-box">
                            <div className="user-title-container">
                                <li className="listing-title-rev">{rev.listing.title}</li>
                                <div className="rev-title-show">
                                    <li><FontAwesomeIcon className="city-icon" icon={faCity} /> </li>
                                    <li>{rev.listing.city}</li>
                                </div>
                                <div className="rev-date-show-container">
                                    <li><FontAwesomeIcon className="calendar-icon" icon={faCalendarAlt} /> </li>
                                    <li className="rev-date-show">{format(new Date(rev.createdAt), 'MMMM yyyy')}</li>
                                </div>

                                <div className="rev-date-show-container">
                                    <li><FontAwesomeIcon className="star-icon" icon={faStar} /> </li>
                                    <li className="rev-rating-show">{rev.rating}</li>
                                </div>
                    
                                <li className="rev-body-show" > {rev.body} </li>
                                
                                       
                                        
                                 <div className="edit-delete-btns-container">
                                         <button className="edit-delete-btns" value={rev.id} onClick={this.handleDelete}>Delete Review</button>
                                     <button className="edit-delete-btns" value={reviews.indexOf(rev)} onClick={this.handleEdit}>Edit Review</button>
                                 </div>
                                </div>
                                    
                        </div>
                    ) )}
                     </div>
                </div>
               
            // <div className="review-container">
            //     <h3 className="review-title">  <FontAwesomeIcon icon={faStar} className="star"/> {this.props.roundRating} ({this.props.reviewNum} reviews)</h3>
            //     {/* <div className="review-box">
            //         <div className='act-review'>
            //             <h4 className="title-review"> <FontAwesomeIcon className="user-rev" icon={faUserCircle}  /> Amazing Home</h4>
            //             <p className="review-body">Loved it! Everything about it was just perfect and the host and the location were great!</p>
            //         </div>
            //     </div> */}
            //     <div className='actual-reviews'>
                    
                    
                        
            //             {
                            
            //                 Object.values(reviews).map((review, i) => (
            //                     <div className="review-display-container" key={i}>
            //                         <div className="user-title-container">
            //                             <li className="user-rev" ><FontAwesomeIcon className="rev-user-icon"  icon={faUserCircle}  />{review.guest.first_name} </li>
            //                             <li className="rev-date">{format(new Date(review.createdAt),'MMMM yyyy' )}</li>
            //                         </div>
            //                         <li > {review.body} </li>
            //                     </div>
            //                 ))
            //             }
                    
            //     </div>
            // </div>
        )
    }


}

export default ReviewShow;