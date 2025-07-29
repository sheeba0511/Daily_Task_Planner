import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import dayjs from "dayjs";

import {
  taskAssignedToOtions,
  taskOptions,
  eventPriority,
  labelOption,
} from "../../utils/EnumAndOptions";
import { useDispatch, useSelector } from "react-redux";
import { taskCloseModal } from "../../store/taskModalSlice";

function TaskModal() {
  const [taskForm] = Form.useForm();
  const { taskModalOpen, taskModalType, editTaskData } = useSelector(
    (store: any) => store.taskModal
  );
  const dispatch = useDispatch();

  const taskFormFinish = (values) => {
    const newTask = {
      ...values,
      id: editTaskData?.nextId,
      createDate: dayjs().format("YYYY-MM-DD"),
      updatedDate: dayjs().format("YYYY-MM-DD"),
      startDate: values.startdate.format("YYYY-MM-DD"),
      dueDate: values.duedate.format("YYYY-MM-DD"),
    };
    handleModal();
  };

  const handleModal = () => {
    dispatch(taskCloseModal());
    Modal.destroyAll();
    taskForm.resetFields();
  };

  return (
    <Modal
      title="Create New Task"
      centered
      open={taskModalOpen}
      onCancel={handleModal}
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
          <Button onClick={handleModal}>Cancel</Button>
          <Button type="primary" onClick={() => taskForm.submit()}>
            Submit
          </Button>
        </div>
      }
    >
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
          name="startdate"
          required={false}
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>
        {/* Due Date */}
        <Form.Item
          label="Due Date"
          name="duedate"
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
