import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Search from "./components/Search";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Search />
      <Footer />
    </Provider>
  );
}

export default App;
