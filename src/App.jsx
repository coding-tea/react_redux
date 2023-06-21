//dependencies
import { DECREMENT, INCREMENT } from './Redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

//css
import './app.css';

function App() {

  const the_value = useSelector(state => state.value);
  const dispatch = useDispatch();

  const incremant = () => {
    dispatch({
      type : INCREMENT
    });
  }

  const decremant = () => {
    dispatch({
      type : DECREMENT
    });
  }

  return (
    <div className='app'>
      <header>
          react redux counter app <a href="https://github.com/coding-tea" target='_blank' rel="noreferrer">@codingTea <i class="bi bi-github"></i></a>
      </header>
      <div className="counter">
        <button onClick={incremant} >+</button>
        <div className="value">
          the value is { the_value }
        </div>
        <button onClick={decremant} >-</button>
      </div>
    </div>
  );
}

export default App;
