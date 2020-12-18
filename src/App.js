import React from "react";
import Review from "./Components/Review"
import ViewReviews from "./Components/ViewReviews"
import Products from "./Components/Products"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function OliverTakeHome() {
  return (
    <Router>
      <div>
      <Products />
        <Switch>
          <Route exact path="/ViewReviews" component={ViewReviews}/>
          <Route exact path="/Review" component={Review}/>
            <Review />
        </Switch>
      </div>
    </Router>
  );
}
// NOTES OF WHAT I WOULD HAVE DONE IF GRANTED MORE TIME
// Set up routes for the review inputs to be avaliable when product 1 is clicked 
//Styled my components 
// Use e.target.value to target the input values and save them in state 
// Then send the information stored in state to the backend to store the users input
// Set up post request to store created reviews 
// Set up axios request to fetch the stored products and reviews 