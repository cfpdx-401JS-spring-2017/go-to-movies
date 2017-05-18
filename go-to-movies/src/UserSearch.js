import React from 'react';
import './App.css';


function UserSearch(props) {
    return(
        <div>
            <form onSubmit={event => {
                event.preventDefault();
                props.search(event.target.elements.search.value);
            }}>
                <label className="search_label">Title: <input className="search_bar" name="search" /></label> {/*what is the purpose of this input?*/}
                <button className="search_button" type="submit">Search</button>
            </form>
        </div>

    )


}

export default UserSearch;