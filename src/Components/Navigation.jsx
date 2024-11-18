import '../App.css';



function Navigation({ setPage }) {
  return (
    <nav className="navigationbar">
      <button onClick={() => setPage('home')}>Homepage</button>
      <button onClick={() => setPage('about')}>About</button>
      <button onClick={() => setPage('certification')}>Certification</button>
      <button onClick={() => setPage('portfolio')}>Portfolio</button>
    </nav>
  );
}

export default Navigation;
