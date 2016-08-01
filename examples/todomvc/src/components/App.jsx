import Footer from './Footer';
import Header from './Header';
import Main from './Main';

export default ({ model: { todos } }) =>
  <section className="todoapp">
    <Header/>
    <Main {...{ todos }}/>
    <Footer {...{ todos }}/>
  </section>;
