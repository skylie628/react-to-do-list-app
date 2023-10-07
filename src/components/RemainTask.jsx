import { Avatar, List } from "antd";
import { CheckCircleOutlined, DeleteOutlined } from "@ant-design/icons";
export default function RemainTask({ todos, handleComplete, handleDelete }) {
  return (
    <List
      bordered
      header={<div className="text-xl">Remaining Task</div>}
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item
          rowKey={todo.id}
          actions={[
            <CheckCircleOutlined
              key="list-loadmore-edit"
              className="text-blue-300 cursor-pointer hover:text-blue-600"
              onClick={() => handleComplete(todo.id)}
            />,
            <DeleteOutlined
              key="list-loadmore-more"
              className="text-red-300 cursor-pointer hover:text-red-600"
              onClick={() => handleDelete(todo.id)}
            />,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar className="bg-blue-500">{todo.id[5]}</Avatar>}
            title={todo.value}
          />
        </List.Item>
      )}
    />
  );
}
