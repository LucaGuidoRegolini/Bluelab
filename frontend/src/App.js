import "./global.css";
import Routes from "./routes";
import Sidebar from "./components/sidebar";
function App() {
  return (
    <div>
      <Sidebar />
      <Routes />
    </div>
  );
}

export default App;
