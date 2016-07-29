import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { increment } from '../action/types';

export default ({ model: { count } }) =>
  <section className="todoapp">
    <h2>
      <span on-click={() => increment(-1)}>{' - '}</span>
      {count}
      <span on-click={() => increment(1)}>{' + '}</span>
    </h2>
    <Header/>
    <Main/>
    <Footer/>
  </section>;
