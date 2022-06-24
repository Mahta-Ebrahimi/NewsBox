import MainRouter from "./components/MainRouter";
import Provider from "./context/Provider";



function App() {
  return (
    <Provider >
      <MainRouter />
    </Provider>
  );
}

export default App;
