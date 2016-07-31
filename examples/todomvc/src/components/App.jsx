import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import actions from '../actionTypes';

export default ({ model: { count, todos } }) =>
  <section className="todoapp">
    <h2>
      <span on-click={() => actions.increment(-1)}>{' - '}</span>
      {count}
      <span on-click={() => actions.increment(1)}>{' + '}</span>
    </h2>
    <Header/>
    <Main {...{ todos }}/>
    <Footer {...{ todos }}/>
  </section>;
