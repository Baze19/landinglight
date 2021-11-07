import Navbar from './components/navbar/navbar';
import './App.css';
import Payment from './components/payment/Payment';
import CardContainer from './components/cardContainer/CardContainer';
import Subtotal from './components/subTotal/Subtotal';
import CompletePayment from './components/completePayment/CompletePayment';

function App() {

    return (

        <div class="">
            <Navbar />
            <hr className='hr container' />
            <Payment />
            <div className="container">
                <CardContainer />
            </div>
            <hr className='hrs container' />
            <Subtotal />
            <hr className='hrr container' />
            <CompletePayment />
        </div>

    )
}

export default App
