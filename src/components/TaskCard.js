import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

export default function TaskCard({
  task,
  handleRightBtn,
  handleLeftBtn,
  deleteTask,
}) {
  return (
    <Card variant="outlined" sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            {task.title}
          </Typography>
          <Button
            color="error"
            startIcon={<DeleteOutlineIcon />}
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </Button>
        </div>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
        {task.step !== 1 && (
          <IconButton
            size="small"
            onClick={() => handleLeftBtn(task)}
            style={{ marginRight: "auto" }}
          >
            <ArrowCircleLeftOutlinedIcon />
          </IconButton>
        )}
        {task.step !== 4 && (
          <IconButton
            size="small"
            onClick={() => handleRightBtn(task)}
            style={{ marginLeft: "auto" }}
          >
            <ArrowCircleRightOutlinedIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
