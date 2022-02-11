import QuoteList from '../components/quotes/QuoteList'
const DummyQuotes = [
    {id:'q1', author:'jay', text:'Learning react js'},
    {id:'q2', author:'jay', text:'Learning node js'},
];
const AllQuote = () => {
    return <QuoteList quotes={DummyQuotes}/>
}
export default AllQuote;