import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  notification,
} from "antd";
import dayjs from "dayjs";
import {
  taskAssignedToOtions,
  taskOptions,
  eventPriority,
  labelOption,
  ModalType,
} from "../../utils/EnumAndOptions";
import { useDispatch, useSelector } from "react-redux";
import { taskCloseModal } from "../../store/taskModalSlice";
import { useEffect } from "react";

function TaskModal({ setTasks }) {
  const [api, contextHolder] = notification.useNotification();
  const [taskForm] = Form.useForm();
  const { taskModalOpen, taskModalType, taskData } = useSelector(
    (store: any) => store.taskModal
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (taskModalType === ModalType.EDIT) {
      const editDate = {
        ...taskData,
        startDate: dayjs(taskData.startDate),
        dueDate: dayjs(taskData.dueDate),
      };
      taskForm.setFieldsValue(editDate);
    }
  }, [taskModalType]);

  const taskFormFinish = (values) => {
    const newTask = {
      ...values,
      id: taskData?.id,
      startDate: values?.startDate?.format("YYYY-MM-DD"),
      dueDate: values?.dueDate?.format("YYYY-MM-DD"),
    };

    if (taskModalType === ModalType.EDIT) {
      const updatedData = {
        ...taskData,
        ...newTask,
      };
      setTasks((pre) =>
        pre?.map((task) => (task.id === updatedData.id ? updatedData : task))
      );
      api.success({
        message: "Task Edited",
        description: "Your task has been successfully edited.",
        placement: "topRight",
      });
    } else {
      setTasks((pre) => [...pre, newTask]);
      api.success({
        message: "Task Created",
        description: "Your task has been successfully created.",
        placement: "topRight",
      });
    }
    closeModal();
  };

  const closeModal = () => {
    dispatch(taskCloseModal());
    Modal.destroyAll();
    taskForm.resetFields();
  };

  return (
    <Modal
      title={
        taskModalType === ModalType.EDIT
          ? `Edit: ${taskData?.title || "Task"}`
          : "Create New Task"
      }
      centered
      open={taskModalOpen}
      onCancel={closeModal}
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "60%",
        xl: "50%",
        xxl: "40%",
      }}
      footer={
        <div className="task_footer_btn">
          <Button onClick={closeModal}>Cancel</Button>
          <Button type="primary" onClick={() => taskForm.submit()}>
            Save changes
          </Button>
        </div>
      }
    >
      {contextHolder}
      <Form
        onFinish={taskFormFinish}
        form={taskForm}
        name="taskForm"
        labelCol={{ span: 4 }}
        labelAlign="left"
      >
        {/* Task Name */}
        <Form.Item
          label="Task Name"
          name="title"
          required={false}
          rules={[{ required: true }]}
        >
          <Input placeholder="Please enter your Task Name" />
        </Form.Item>
        {/* Description */}
        <Form.Item
          label="Description"
          name="description"
          required={false}
          rules={[{ required: true }]}
        >
          <Input.TextArea placeholder="Enter task details here..." rows={4} />
        </Form.Item>
        {/* Status */}
        <Form.Item
          name="status"
          label="Status"
          required={false}
          rules={[{ required: true }]}
        >
          <Select placeholder="Select your Task Status" options={taskOptions} />
        </Form.Item>
        {/* Priority */}
        <Form.Item
          label="Priority"
          name="priority"
          required={false}
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Select the priority of this task"
            options={eventPriority}
          />
        </Form.Item>
        {/* Start Date */}
        <Form.Item
          label="Start Date"
          name="startDate"
          required={false}
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>
        {/* Due Date */}
        <Form.Item
          label="Due Date"
          name="dueDate"
          required={false}
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>

        {/* Assigned to */}
        <Form.Item
          label="Assigned To"
          name="assignees"
          required={false}
          rules={[{ required: true }]}
        >
          <Select
            mode="multiple"
            allowClear
            placeholder="Select the team member’s name responsible for this task"
            options={taskAssignedToOtions}
          />
        </Form.Item>
        {/* Labels */}
        <Form.Item
          label="Label"
          name="labels"
          required={false}
          rules={[{ required: true }]}
        >
          <Select
            mode="multiple"
            allowClear
            placeholder="Select task label"
            options={labelOption}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default TaskModal;
