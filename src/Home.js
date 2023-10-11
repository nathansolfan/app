const Home = () => {
  return (
    <div className="fruits">
      <section>
        <label htmlFor="fruit-list">Fruits:</label>
        <ul id="fruit-list" className="fruit-list">
          <li>Banana</li>
          <li>Pear</li>
          <li>Apple</li>
          <li>Kiwi</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
