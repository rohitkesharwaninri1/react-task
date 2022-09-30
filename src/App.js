import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import SearchBox from "./components/SearchBox";
import AddTask from "./components/AddTask";
import TaskCard from "./components/TaskCard";

export default function App() {
  const initialData = [
    {
      id: "b202592f-50fd-4bc7-a087-2363635c691c",
      title: "Task 1",
      step: 1,
    },
    {
      id: "b202592f-50fd-4bc7-a087-2363635c622c",
      title: "Task 2",
      step: 2,
    },
    {
      id: "b202592f-50fd-4bc7-a087-2363635c623c",
      title: "Task 3",
      step: 3,
    },
    {
      id: "b202592f-50fd-4bc7-a087-2363635c422c",
      title: "Task 4",
      step: 4,
    },
    {
      id: "b202592f-50fd-5bc7-a087-2363635c622c",
      title: "Task 5",
      step: 4,
    },
    {
      id: "b202592f-57fd-4bc7-a087-2363635c622c",
      title: "Task 6",
      step: 2,
    },
    {
      id: "b202592f-50fd-4bc7-a087-2363585j622c",
      title: "Task 7",
      step: 1,
    },
  ];
  const steps = [
    {
      step: 1,
    },
    {
      step: 2,
    },
    {
      step: 3,
    },
    {
      step: 4,
    },
  ];
  const [tasks, setTasks] = useState(initialData);
  const [filteredTasks, setFilteredTasks] = useState(initialData);

  const handleRightBtn = (task) => {
    const updatedTask = tasks.map((obj) =>
      obj.id === task.id ? { ...obj, step: task.step + 1 } : obj
    );
    setTasks(updatedTask);
    setFilteredTasks(updatedTask);
  };
  const handleLeftBtn = (task) => {
    const updatedTask = tasks.map((obj) =>
      obj.id === task.id ? { ...obj, step: task.step - 1 } : obj
    );
    setTasks(updatedTask);
    setFilteredTasks(updatedTask);
  };
  const deleteTask = (id) => {
    let filteredData = tasks.filter((item) => item.id !== id);
    setTasks(filteredData);
    setFilteredTasks(filteredData);
  };
  console.log("tasks", tasks);
  return (
    <Box
      sx={{
        width: "100wh",
        height: "100%",
        p: 5,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SearchBox
          filteredTasks={filteredTasks}
          setFilteredTasks={setFilteredTasks}
          tasks={tasks}
        />
        <AddTask
          tasks={tasks}
          setTasks={setTasks}
          setFilteredTasks={setFilteredTasks}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {steps.map((step, id) => {
          return (
            <div
              key={id}
              style={{
                backgroundColor: "#E4E7EE",
                padding: "20px 10px",
                width: "300px",
                margin: "50px 0",
                borderRadius: "5px",
                minHeight: "600px",
              }}
            >
              <Typography variant="h5" sx={{ mb: 2 }}>
                STEP {step.step}
              </Typography>
              {filteredTasks.map((task, id) => {
                if (task.step !== step.step) return null;
                return (
                  <TaskCard
                    task={task}
                    key={id}
                    handleRightBtn={handleRightBtn}
                    handleLeftBtn={handleLeftBtn}
                    deleteTask={deleteTask}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </Box>
  );
}
