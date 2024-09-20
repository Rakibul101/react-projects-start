import './App.css'

function App() {
  

  return (
    <>
      <h1>Vite + React</h1>
      <label className="swap swap-flip text-9xl">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />

  <div className="swap-on">😈</div>
  <div className="swap-off">😇</div>
</label>
    </>
  )
}

export default App
