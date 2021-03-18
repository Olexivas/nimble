function App() {
  return (
    <div className="App">
      <header className="header"><h1 className="header__logo">Tracker</h1></header>
      <input
        type="text"
        placeholder="Enter tracker name"
        className="search"
      />
      <div className="item">
        <h2 className="item__title">No name tracker #1</h2>
        <p className="item__timer">00:01:23</p>
        <button className="item__btn item__btn_play">
          Play/Stop
        </button>
        <button className="item__btn item__btn_delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default App;
