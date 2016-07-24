export default (props = { name: 'World' }) =>
  <section className="todoapp">
    <h1>{`Hello ${props.name}!`}</h1>
  </section>;
