import "../../assets/Style/Layout.css";
import { Button, Card, Table, Typography } from "antd";
import { taskList } from "../../utils/TaskJsonData";
import TaskModal from "./TaskModal";
import { useState } from "react";
import {
  taskStatusLabel,
  priorityStatusLabel,
} from "../../utils/EnumAndOptions";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { taskOpenModal } from "../../store/taskModalSlice";

function Task() {
  const { Title } = Typography;
  const [tasks, setTasks] = useState(taskList);
  const dispatch = useDispatch();

  const addNewTask = (newTask) => {
    const updatedData = [...tasks];
    updatedData.push(newTask);
    setTasks(updatedData);
  };

  const columns = [
    //id, title, description, status, priority, due date, updatedc date
    {
      title: "Task ID",
      dataIndex: "id",
      key: "key",
    },
    {
      title: "Task Name",
      dataIndex: "title",
      key: "key",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "key",
      width: "20%",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (e) => (
        <Typography>
          <Title level={4} style={{ color: taskStatusLabel[e].color }}>
            {taskStatusLabel[e].label}
          </Title>
        </Typography>
      ),
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "key",
      render: (e) => (
        <Typography>
          <Title level={4} style={{ color: priorityStatusLabel[e].color }}>
            {priorityStatusLabel[e].label}
          </Title>
        </Typography>
      ),
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "key",
      render: (e) => (
        <Typography>
          <Title level={4}>{dayjs(e).format("DD MMM YYYY")}</Title>
        </Typography>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "key",
    },
  ];

  const handleCreate = () => {
    dispatch(
      taskOpenModal({
        type: "CREATE",
        data: {
          nextId: tasks?.length + 1,
        },
      })
    );
  };

  return (
    <div>
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
      <TaskModal />
    </div>
  );
}

export default Task;
