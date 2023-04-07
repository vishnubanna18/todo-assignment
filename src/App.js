import "./App.css";
import { useState } from "react";
import List from "./List";
function App() {
  const [currentItem, setCurrentItem] = useState("");
  const [itemList, updateItemList] = useState([]);
  const [checkItemList, updateCheckItemList] = useState([]);
  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };
  const addItemToList = () => {
    if (currentItem !== "") {
      updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
      setCurrentItem("");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input
              style={{ outline: "none" }}
              placeholder="Add Item"
              value={currentItem}
              onChange={onChangeHandler}
            />

            <button style={{ marginRight: "5px" }} onClick={addItemToList}>
              +
            </button>
          </div>
          <div className="itemcon">
            {itemList.map((itemObj) => {
              return (
                <List key={itemObj.key}
                itemkey={itemObj.key}
                  item={itemObj.item}
                  itemList={itemList}
                  updateItemList={updateItemList}
                  updateCheckItemList={updateCheckItemList}
                  checkItemList={checkItemList}
                />
              );
            })}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
