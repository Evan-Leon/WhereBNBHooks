import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 5,
            body:'',
            reviewed: false,
            errors: false,
            errored: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(e){
        e.preventDefault();
        
        if (!this.props.currentUser) {
            this.props.openModal("login")
        }
        else if (this.state.body===""){
            this.setState({errors: "Review body can not be blank"})
        }else{
            const review = {
                rating: this.state.rating,
                body: this.state.body,
                listing_id: this.props.listing.id,
                guest_id: this.props.currentUser,
            }
            this.props.createReview(review)
                .then(this.setState({body: '', reviewed: true}));
    } 
    }

    componentDidUpdate(prevProps, prevState){
    
        if (prevState.errors !== this.state.errors){
            this.setState({errored: true})
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    update(field, value) {
        return e => {this.setState({[field]: e.target.value})}
    }

    render() {
        if (!this.state.reviewed){
            if (!this.state.errored){
                return (
                    <div className="review-form-container">
                        <h3 className="review-form-box-title">Leave a review:</h3>
                        <form className="review-form" onSubmit={this.handleSubmit}>
                            <div className="rating-container">
                                <label className="rating-title" htmlFor="rating-input" > Rating </label>
                                <input className="rating" id="rating-input" type="number" max='5' min="0" value={this.state.rating} onChange={this.update("rating")} />
                            </div>
                            <div className="review-text-container">
                                <label htmlFor="text-area" className="review-title-box" >Review</label>
                                <textarea id='text-area' className="review-text-area" value={this.state.body} onChange={this.update('body')} cols="30" rows="5"></textarea>

                            </div>
                            <button className="review-sub" >Submit review</button>
                        </form>
                    </div>
                )}else {
                    return (
                        <div className="review-form-container">
                            <h3 className="review-form-box-title">Leave a review:</h3>
                            <form className="review-form" onSubmit={this.handleSubmit}>
                                <div className="rating-container">
                                    <label className="rating-title" htmlFor="rating-input" > Rating </label>
                                    <input className="rating" id="rating-input" type="number" max='5' min="0" value={this.state.rating} onChange={this.update("rating")} />
                                </div>
                                <div className="review-text-container">
                                    <label htmlFor="text-area" className="review-title-box" >Review</label>
                                    <textarea id='text-area' className="review-text-area" value={this.state.body} onChange={this.update('body')} cols="30" rows="5"></textarea>
                                    
                                </div>
                                <p className="errors">{this.state.errors}</p>
                                <button className="review-sub" >Submit review</button>
                            </form>
                        </div>
                    )}
            }
        else{
            return (
                <div className="review-form-container">
                    <h3 className="review-form-box-title">Leave a review:</h3>
                    <form className="review-form" onSubmit={this.handleSubmit}>
                        <div className="rating-container">
                            <label className="rating-title" htmlFor="rating-input" > Rating </label>
                            <input className="rating" id="rating-input" type="number" max='5' min="0" value={this.state.rating} onChange={this.update("rating")} />
                        </div>
                        <div className="review-text-container">
                            <label htmlFor="text-area" className="review-title-box" >Review</label>
                            <textarea id='text-area' className="review-text-area" value={this.state.body} onChange={this.update('body')} cols="30" rows="5"></textarea>

                        </div>
                        <button className="review-sub" disabled >Reviewed</button>
                    </form>
                </div>
            )
        }
    }
}

export default withRouter(ReviewForm);