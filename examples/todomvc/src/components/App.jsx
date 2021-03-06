import Footer from './Footer';
import Header from './Header';
import Main from './Main';

export default ({ todos, app }) =>
  <section className="todoapp">
    <Header {...app}/>
    <Main {...{ todos }}/>
    <Footer/>
  </section>;
