import Display from "./components/Display/Display";
import Info from "./components/Info/Info";
import Keyboard from "./Keyboard/Keyboard";

const App = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <Info />
        <main className="phone">
          <Keyboard />
          <div className="actions">
            <Display />

            <a href="call" className="call">
              Call
            </a>

            <a href="hang-up" className="hang active">
              Hang up
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
