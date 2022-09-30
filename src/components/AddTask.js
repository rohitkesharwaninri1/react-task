import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function AddTask({ tasks, setTasks, setFilteredTasks }) {
  const [open, setOpen] = useState(false);
  const [titleText, setTitleText] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onAddTask = () => {
    handleClose();
    let uniqueId = uuidv4();
    let addedTask = [...tasks, { id: uniqueId, step: 1, title: titleText }];
    setTasks(addedTask);
    setFilteredTasks(addedTask);
    setTitleText("");
  };
  const onChangeTitle = (e) => {
    setTitleText(e.target.value);
  };
  return (
    <>
      <Button
        sx={{ backgroundColor: "#E4E7EE" }}
        onClick={handleOpen}
        startIcon={<AddIcon />}
      >
        Add Task
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            onClick={handleClose}
            style={{ marginRight: "auto", float: "right" }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            align="center"
            sx={{ mb: 5 }}
          >
            Add Task
          </Typography>
          <TextField
            id="filled-basic"
            label="Add Title"
            variant="filled"
            fullWidth
            sx={{ mb: 5 }}
            value={titleText}
            onChange={onChangeTitle}
          />
          <Button
            sx={{ backgroundColor: "#E4E7EE" }}
            size="large"
            onClick={onAddTask}
          >
            Add Task
          </Button>
        </Box>
      </Modal>
    </>
  );
}
