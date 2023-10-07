import { useState } from "react";
import { Input, Form } from "antd";
export default function TodoForm({ handleEnter }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const validateInput = (value) => {
    setError(value.length < 5);
  };
  return (
    <Form className="w-10/12">
      <Form.Item
        validateStatus={error ? "error" : "validating"}
        help={error && "Must have at least 5 characters"}
      >
        <Input
          className="w-full"
          value={value}
          onChange={(e) => {
            validateInput(e.target.value);
            setValue(e.target.value);
          }}
          onPressEnter={() => {
            handleEnter(value);
            setValue("");
          }}
          placeholder="press Enter and add regular task"
          id="error"
        />
      </Form.Item>
    </Form>
  );
}
