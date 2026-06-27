import { useState } from "react";
export default function App() {
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    let idt = new Date();
    let itext = document.getElementById("task_input").value;
    if (itext != "") {
      const newItem = { id: idt.getTime(), text: itext, done: false };
      setItems([...items, newItem]);
    } else {
      alert("Please type task before adding");
    }
  };
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleDone = (id) => {
    setItems(
      items.map((item) => {
        if (item.id == id) {
          return { ...item, done: !item.done };
        }
        return item;
      }),
    );
  };

  return (
    <>
      <div>Todo List</div>
      <br />
      <label>
        Enter task You want to add: <input type="text" id="task_input" />
        <button onClick={handleAdd}>Add Task</button>
      </label>
      <table>
        <thead>
          <tr key="0">
            <th>Task</th>
            <th className="donebtn">Done Button</th>
            <th className="rmvbtn">Remove Button</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td
                  style={{
                    textDecoration: item.done ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </td>
                <td>
                  <button onClick={() => handleDone(item.id)}>
                    {item.done ? "Undo" : "Done"}
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>
                    Remove Task
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
