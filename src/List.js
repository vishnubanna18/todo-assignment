import "./List.css";
import { AiFillDelete } from "react-icons/ai";
import { FiSquare } from "react-icons/fi";
import { TbCheckbox } from "react-icons/tb";
function List(props) {
  const deleteItemFromList = (key) => {
    const newList = props.itemList.filter((itemObj) => {
      return itemObj.key !== key;
    });
    props.updateItemList(newList);
  };
  const checkItem = () => {
    let checked = props.checkItemList.filter((element) => {
      return element === props.item;
    });

    if (checked[0] !== undefined) {
      const index = props.checkItemList.indexOf(props.item);
      console.log(props.item, index);
      props.checkItemList.splice(index, 1);
      let b = props.checkItemList;
      console.log(b);

      props.updateCheckItemList(b);
    } else props.updateCheckItemList([...props.checkItemList, props.item]);
  };
  let checked = props.checkItemList.filter((element) => {
    return element === props.item;
  });

  return (
    <div className="Item">
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={checkItem}
        >
          {checked[0] !== undefined ? <TbCheckbox /> : <FiSquare />}
        </div>
        <p>{props.item}</p>
      </div>
      <button onClick={() => deleteItemFromList(props.itemkey)}>
        <AiFillDelete />
      </button>
    </div>
  );
}

export default List;
