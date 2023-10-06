import { Avatar, List, Typography } from "antd";
export default function CompleteTask({ todos = [] }) {
  return (
    <List
      header={<div className="text-xl">Completed Task</div>}
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item rowKey={todo.id}>
          <List.Item.Meta
            avatar={<Avatar className="bg-green-500">{todo.id[5]}</Avatar>}
          />
          <Typography>{todo.value}</Typography>
        </List.Item>
      )}
    />
  );
}
