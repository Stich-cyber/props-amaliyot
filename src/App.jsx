import "./App.css";
import Card from "./assets/compo/card/card";
import Btn from "./assets/compo/btn/btn";
function App() {
  return (
    <>
      <div className="contanier">
        <p className="t1">Products</p>
        <div className="cards">
          <Card color="#cbcbcb">
            <Btn bg="#727272" />
          </Card>
          <Card color="#5CA7FF">
            <Btn bg="#FFC700" />
          </Card>
          <Card color="#D083FF">
            <Btn bg="#00FFB2" />
          </Card>
          <Card color="#FF99E2">
            <Btn bg="#FFF500" />
          </Card>
          <Card color="#C5C1C7">
            <Btn bg="#00FFB2" />
          </Card>
          <Card color="#5CFF62">
            <Btn bg="#FFC700" />
          </Card>
        </div>
      </div>
    </>
  );
}
export default App;
