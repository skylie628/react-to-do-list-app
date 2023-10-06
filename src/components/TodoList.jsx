import { Input, Row, Col } from "antd";
import CompleteTask from "./CompleteTask";
import RemainTask from "./RemainTask";
import actions from "../actions/actions";
import { v4 as uuidv4 } from "uuid";
import todoReducer from "../reducer/todoReducer";
import { useState, useReducer } from "react";
export default function TodoList() {
  const [value, setValue] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, []);
  const todosComplete = todos.filter((todo) => todo.isComplete);
  const todosRemain = todos.filter((todo) => !todo.isComplete);
  const handleEnter = () => {
    dispatch({
      payload: { value, isComplete: false, id: uuidv4() },
      actionType: actions.ADD,
    });
  };
  const handleComplete = (id) => {
    dispatch({
      payload: id,
      actionType: actions.COMPLETED,
    });
  };
  const handleDelete = (id) => {
    dispatch({
      payload: id,
      actionType: actions.DELETE,
    });
  };
  return (
    <div className="w-8/12 m-auto flex flex-col items-center justify-center gap-5">
      <div className="text-xl">TodoList</div>
      <Input
        className="w-10/12"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onPressEnter={handleEnter}
      />
      <Row gutter={[16, 16]} className="w-full">
        <Col span={12}>
          <RemainTask
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            todos={todosRemain}
          />
        </Col>
        <Col span={12}>
          <CompleteTask todos={todosComplete} />
        </Col>
      </Row>
    </div>
  );
}
