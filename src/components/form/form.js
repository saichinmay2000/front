import React from 'react'
import axios from '../../axios'; 
function Form() {

    const handlesubmit = (e) => {
            e.preventDefault();
         const { body,name,loc } = e.target.elements;
        axios.post('/Movie_update', {
                MovieId: body.value,
                MovieName: name.value,
                Location: loc.value,
                
            })
            .then(function (response) {
                console.log("done");
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return(
        <div className="form-main">
            <form onSubmit={handlesubmit}>
                        <input type="text" name="body" placeholder="Movie ID"/>
                        <input type="text" name="name" placeholder="Movie Name"/>
                        <input type="text" name="loc" placeholder="Movie Location"/>
                        <input type="submit" value="Submit"/>
                        <input type="reset" value="Reset"/>
            </form>
        </div>
    )
}

export default Form