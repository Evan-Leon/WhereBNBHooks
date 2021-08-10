import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewDisplayEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: {
                rating: 5,
                body: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.update = this.update.bind(this);

    }

    componentDidMount() {

        this.setState({ review: this.props.reviews.filter(review => review.id === Number(this.props.reviewId)) })

    }

    handleSubmit(e) {
        e.preventDefault();

        const review = {
            id: this.state.review[0].id,
            rating: this.state.review[0].rating,
            body: this.state.review[0].body,
            listing_id: this.state.review[0].listing.id,
            guest_id: this.state.review[0].guest.id,
        }
        this.props.updateReview(review)
            
            .then(this.props.closeModal())
            .then(this.props.removeFilter())
            

    }

    updateBody(e) {

        let review = { ...this.state.review }
        review[0].body = e.target.value;

        this.setState({ review })
    }

    updateRating(e) {

        let review = { ...this.state.review }
        review[0].rating = e.target.value;

        this.setState({ review })
    }

    render() {
        let { review } = this.state;
        
        if (review.body === '') return null;

        return (
            <div className="edit-review-form-container">
                <h3 className="edit-review-form-box-title">Edit your review:</h3>
                <form className="edit-review-form" onSubmit={this.handleSubmit}>
                    <div className="rating-container">
                        <label className="rating-title" htmlFor="rating-input" > Rating </label>
                        <input className="rating" id="rating-input" type="number" max='5' min="0" value={review[0].rating} onChange={e => this.updateRating(e)} />
                    </div>
                    <div className="review-text-container">
                        <label htmlFor="text-area" className="review-title-box" >Review</label>
                        <textarea id='text-area' className="review-text-area" value={review[0].body} onChange={e => this.updateBody(e)} cols="30" rows="5"></textarea>

                    </div>
                    <button className="review-sub" >Edit review</button>
                </form>
            </div>
        )
    }
}

export default withRouter(ReviewDisplayEdit);