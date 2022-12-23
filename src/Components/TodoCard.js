import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../JS/Action/Action";
import EditModal from "./EditModal";
import "./ToDoListStyle.css";
const TodoCard = ({ task, number }) => {
  const dispatch = useDispatch();

  return (
    <div className="thecard">
      <Card border="warning" style={{ width: "18rem" }}>
        <Card.Header className="cardHeader">
          <h5>{number === 0 ? number + 1 : number + 1}</h5>
          <Button
            variant="outline-danger"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            Delete
          </Button>
          <EditModal task={task} />
          <Button
            onClick={() => dispatch(doneTask(task.id))}
            variant="outline-success"
          >
            {task.isDone ? "UnDone" : "Done"}
          </Button>
        </Card.Header>
        <Card.Body>
          <Card.Title>{task.text}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TodoCard;
