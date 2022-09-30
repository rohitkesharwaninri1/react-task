import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox({ filteredTasks, setFilteredTasks, tasks }) {
  const [searchText, setSearchText] = useState("");

  const onFilter = (value) => {
    if (value !== "") {
      const newTasksList = tasks.filter((data) => {
        return data.title.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredTasks(newTasksList);
    } else {
      setFilteredTasks(tasks);
    }
  };

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: "2px 4px",
        backgroundColor: "#E4E7EE",
        display: "flex",
        alignItems: "center",
        width: 300,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "Search" }}
        value={searchText}
        onChange={(e) => onChangeSearch(e)}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={onFilter}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
