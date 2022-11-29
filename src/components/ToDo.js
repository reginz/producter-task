import { useEffect, useState } from "react";

export default function ToDo(props) {
  const [task, setTask] = useState();
  const tasks = [
    { name: "task 1", complete: true, id: "task 1" },
    { name: "task 2", complete: false, id: "task 2" },
    { name: "task 3", complete: false, id: "task 3" },
  ];
  var [complete, setComplete] = useState(0);

  useEffect(() => {
    tasks.map((task) => {
      if (task.complete === true) {
    
      }else{
        return
      }
    });
  });

  const handleChange = (e) => {
    e.preventDefault();
    setTask(e.target.value);
    console.log(task);
  };

  const addTask = (e) => {
    e.preventDefault();
    tasks.push(task);
    console.log(tasks);
  };
  console.log(complete);

  return (
    <div className="todoapp stack-large">
      {tasks.map((task) => {
        return (
          <div>
            <ul>
              <li>{task.name}</li>
            </ul>
          </div>
        );
      })}
      <button onClick>Delete Completed Tasks</button>
      {}
    </div>
  );
}
