import Footer from './Footer';
import Header from './Header';
import Main from './Main';

export default ({ model: { todos, app } }) =>
  <section className="todoapp">
    <Header {...app}/>
    <Main {...{ todos }}/>
    <Footer {...{ todos }}/>
  </section>;
