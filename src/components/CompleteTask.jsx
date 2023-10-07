import { Avatar, List } from "antd";
export default function CompleteTask({ todos = [] }) {
  return (
    <List
      bordered
      header={<div className="text-xl">Completed Task</div>}
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item rowKey={todo.id}>
          <List.Item.Meta
            avatar={<Avatar className="bg-green-500">{todo.id[5]}</Avatar>}
            title={todo.value}
            description={todo.completedTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          />
        </List.Item>
      )}
    />
  );
}
