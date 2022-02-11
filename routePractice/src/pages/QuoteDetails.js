import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DummyQuotes = [
    {id:'q1', author:'jay', text:'Learning react js'},
    {id:'q2', author:'jay', text:'Learning node js'},
];

const QuoteDetails = () => {
    const params = useParams();

    const quote = DummyQuotes.find(quote => quote.id===params.quotesID);
    if(!quote){
        return <p>no quote found</p>
    }
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            {/* <h1>this is  Quote Details</h1>
            <p>{params.quotesID}</p> */}
            <Route path={`/quotes/${params.quotesID}/comments`}>
                <Comments/> 
            </Route>
        </Fragment>
    );
}
export default QuoteDetails;