import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import actions from '../action/types';

export default ({ model: { count } }) =>
  <section className="todoapp">
    <h2>
      <span on-click={() => actions.increment(-1)}>{' - '}</span>
      {count}
      <span on-click={() => actions.increment(1)}>{' + '}</span>
    </h2>
    <Header/>
    <Main/>
    <Footer/>
  </section>;
