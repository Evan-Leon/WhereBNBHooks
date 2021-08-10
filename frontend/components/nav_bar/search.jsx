import React from 'react';
import {withRouter} from 'react-router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(){
        
       return e => this.setState({search: e.currentTarget.value })
    }

    handleSubmit(e){
        
        e.preventDefault();
        
        let search = this.state.search ;
        search = search.toLowerCase();
        this.setState({search: ''});
    
        this.props.history.push(`/search/${search}`)
        
    }

    render(){
        
        return(
            <div className="search-bar-box">
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input type="text" className="search-text" placeholder="Start your search" value={this.state.search} onChange={this.update()} />
                    <button type='submit' className="search-btn"><FontAwesomeIcon className="search" icon={faSearch}  /></button>
                   
                </form>
            </div>
        )
    }
}

export default withRouter(Search);