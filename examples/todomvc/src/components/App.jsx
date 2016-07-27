import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import increment from '../actions/increment';

export default ({ model: { count } }) =>
  <section className="todoapp">
    <h2 on-click={increment}>{count}</h2>
    <Header/>
    <Main/>
    <Footer/>
  </section>;
