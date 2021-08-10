import React from 'react';
import { withRouter } from 'react-router-dom';

class EditReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review:{
            rating: 5,
            body: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.update = this.update.bind(this);

    }

    componentDidMount(){
        
        let index = this.props.reviewId.length
        this.setState({ review: this.props.reviews[Number(this.props.reviewId[index-1])] })
            
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const review = {
            id: this.state.review.id,
            rating: this.state.review.rating,
            body: this.state.review.body,
            listing_id: this.state.review.listing.id,
            guest_id: this.state.review.guest.id,
        }
        this.props.updateReview(review)
            .then(() => this.props.deleteReview(review.id))
            .then(this.props.closeModal())
            .then(this.props.removeFilter())
            .then(this.props.history.push(`/listings/${this.state.review.listing.id}`))
        
    }

    updateBody(e) {
    
        let review = {...this.state.review}
        review.body = e.target.value; 
        
        this.setState({review})
    }

    updateRating(e) {
        
        let review = { ...this.state.review }
        review.rating = e.target.value;
        
        this.setState({ review })
    }

    render() {
        let {review} = this.state;
        
        if (!review) return null
        
        return (
            <div className="edit-review-form-container">
                <h3 className="edit-review-form-box-title">Edit your review:</h3>
                <form className="edit-review-form" onSubmit={this.handleSubmit}>
                    <div className="rating-container">
                        <label className="rating-title" htmlFor="rating-input" > Rating </label>
                        <input className="rating" id="rating-input" type="number" max='5' min="0" value={review.rating} onChange={e => this.updateRating(e)} />
                    </div>
                    <div className="review-text-container">
                        <label htmlFor="text-area" className="review-title-box" >Review</label>
                        <textarea id='text-area' className="review-text-area" value={review.body} onChange={e => this.updateBody(e)} cols="30" rows="5"></textarea>

                    </div>
                    <button className="review-sub" >Edit review</button>
                </form>
            </div>
        )
    }
}

export default withRouter(EditReview);