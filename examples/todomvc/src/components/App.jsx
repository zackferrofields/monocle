import Footer from './Footer';

export default (props = { name: 'World' }) =>
  <section className="todoapp">
    <h1>{`Hello ${props.name}!`}</h1>
    <Footer/>
  </section>;
