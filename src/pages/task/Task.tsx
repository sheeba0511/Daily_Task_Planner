import "../../assets/Style/Layout.css";
import { Button, Card, Popconfirm, Table, Typography } from "antd";
import { taskList } from "../../utils/TaskJsonData";

import TaskModal from "./TaskModal";
import { useState } from "react";
import {
  taskStatusLabel,
  priorityStatusLabel,
  ModalType,
} from "../../utils/EnumAndOptions";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { taskOpenModal } from "../../store/taskModalSlice";
import { notification } from "antd";

function Task() {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const { Title, Text } = Typography;
  const [tasks, setTasks] = useState(taskList);

  const handleDelete = (taskId) => {
    const updatedData = tasks.filter((f) => f?.id !== taskId);
    setTasks(updatedData);
    api.success({
      message: "Task Deleted",
      description: "Your task has been successfully deleted.",
      placement: "topRight",
    });
  };

  const handleEdit = (item) => {
    dispatch(
      taskOpenModal({
        type: ModalType.EDIT,
        data: item,
      })
    );
  };

  const handleCreate = () => {
    dispatch(
      taskOpenModal({
        type: ModalType.CREATE,
        data: {
          id: tasks?.length + 1,
        },
      })
    );
  };

  const columns = [
    //id, title, description, status, priority, due date, updatedc date
    {
      title: "Task ID",
      dataIndex: "id",
      key: "key",
      render: (text) => (
        <Typography>
          <Text>{text}</Text>
        </Typography>
      ),
    },
    {
      title: "Task Name",
      dataIndex: "title",
      key: "key",
      render: (text) => (
        <Typography>
          <Text>{text}</Text>
        </Typography>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "key",
      width: "20%",
      render: (text) => (
        <Typography>
          <Text>{text}</Text>
        </Typography>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (e) => (
        <Typography>
          <Text style={{ color: taskStatusLabel[e].color }}>
            {taskStatusLabel[e].label}
          </Text>
        </Typography>
      ),
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "key",
      render: (e) => (
        <Typography>
          <Text style={{ color: priorityStatusLabel[e].color }}>
            {priorityStatusLabel[e].label}
          </Text>
        </Typography>
      ),
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "key",
      render: (e) => (
        <Typography>
          <Text>{dayjs(e).format("DD MMM YYYY")}</Text>
        </Typography>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "key",
      render: (e, data) => (
        <div className="action_btn">
          <Button onClick={() => handleEdit(data)}>Edit</Button>
          <Popconfirm
            title="Are you sure, you want to delete this task ?"
            placement="leftTop"
            okText="Yes"
            cancelText="No"
            okButtonProps={{ danger: true }}
            description="This action is permanent and cannot be undone."
            onConfirm={() => handleDelete(data?.id)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      {contextHolder}
      <Card>
        <div className="task_table">
          <div>
            <Typography>
              <Title level={3}>Total Task : {tasks.length}</Title>
            </Typography>
          </div>
          <div>
            <Button type="primary" onClick={handleCreate}>
              Create Task
            </Button>
          </div>
        </div>

        <Table
          dataSource={[...tasks]?.reverse() || []}
          columns={columns}
          rowKey="id"
        />
      </Card>
      <TaskModal setTasks={setTasks} />
    </div>
  );
}

export default Task;
