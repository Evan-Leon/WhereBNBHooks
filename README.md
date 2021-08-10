# WhereBNB
A clone of the site www.airbnb.com/ allowing users to create an account, browse through several listings, via map or index of listings to find more details about the listings they are interested in. Logged in users can book stays at their favorite listing as well as write reviews. All bookings and reviews can be edited or deleted from the 'My Reviews' or 'My Bookings' pages. Furthermore users can edit or delete their own reviews directly on the listing show page.  

## Come for a visit at https://wherebnb-app.herokuapp.com/#/

## Technologies Used

* Ruby
* Rails
* Javascript
* React-Redux
* React
* Heroku
* CSS
* HTML
* SASS
* Webpack

## Features

### Reviews Feature
When logged in, a user can review their favorite listings directly on the listing's show page. Once reviewed, the review can instantly be edited or deleted. This was accomplished utilizing 2 React components, a review display component and a review form component. The review display component displays all reviews for a listing, as well as check if the review author is the current user. If the review is from the current user an edit and delete button will appear which trigger thunk actions, to either, delete the post straight-away or to trigger a modal to pop up to edit the comment.


![reviews](https://user-images.githubusercontent.com/78226696/127342207-95830a45-8ebb-4ee3-a4d6-69224364a760.gif)

### Reviews Code Snippet
Code that maps through all reviews for a listing, then does a check to see if the current user is the author of the review, will activate edit/delete buttons accordingly.
```js
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
  ```


### Search Feature
Users can search all listings, from any page, at any time and receive all listing titles or locations that match the search. All listings are indexed and pins applied to the map. This was done by creating a custom search route, first in React, then sending the text of the search, via Ajax request to the custom search Rails route. The text is parsed and an Active Record request is made to search all listings, then these results are returned to the front end.

![search](https://user-images.githubusercontent.com/78226696/127343997-b35f31f1-a698-4fee-a1bd-0a849d80a7ab.gif)

### Search Code Snippet
Code that first isolates the search term from the url, then sends a thunk action, receiving listings, then setting the components state to those listings.
```js
componentDidMount() {
        
        this.props.fetchSearch(this.props.match.params.searchString)
            .then(listings => this.setState(listings))
    }
```

### Modals, Modals, Modals
Much akin to Airbnb, WhereBNB utilizes many modals to aid in user experience. Whether it is for booking a stay, editing a booking or review, logging in or signing up, modals are a lovely tool to keep users engage and cut down on problems. Utilizing Redux to set the present modal to a ui slice of state and then using a JS switch statement to detect which modal is open, then setting the necessary React component to render.

![modals](https://user-images.githubusercontent.com/78226696/127345674-0d06eedb-f8a0-49e4-a8a6-60ff6f5d15d4.gif)


### Modals Code Snippet
Code that uses a JS switch statement to see which modal is active, then display that React component in modal form. If no modal is active, no modal will display.
```js
  function Modal({modal, closeModal, removeFilter}) {
    if (!modal){
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = < LoginFormContainer/>;
            break;
        case 'signup':
            component = <SignupFormContainer/>;
            break;
        case 'edit-review':
            component = <EditReviewContainer />;
            break;
        case 'edit-booking':
            component = <EditBookingContainer />;
            break;
        case 'booking-confirm':
            component = <BookingConfirmContainer />;
            break;
        case 'review-display-edit-container':
            component = <ReviewDisplayEditContainer/>;
            break;
        default:
            return null;
    }
```


