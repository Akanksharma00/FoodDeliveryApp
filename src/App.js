import React,{useState} from 'react';
import Header from './components/Layout/Header'; 
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  const [showCart,setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
};

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <React.Fragment>
      {showCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}>ReactMeals</Header>
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
