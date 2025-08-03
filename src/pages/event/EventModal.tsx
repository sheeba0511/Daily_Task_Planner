import { Button, DatePicker, Form, Input, Modal, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  eventTypes,
  personalEvent,
  festivalEvent,
  professionalEvent,
  socialEvent,
  miscellaneousEvent,
  eventPriority,
  EventProgressStatus,
  ModalType,
} from "../../utils/EnumAndOptions";
import { useSelector } from "react-redux";
import { eventCloseModal } from "../../store/eventModalSlice";
import dayjs from "dayjs";
import { notification } from "antd";

const customLoad = {
  [EventProgressStatus.CUSTOM]: [],
  [EventProgressStatus.FESTIVALS_RELIGIOUS_EVENTS]: festivalEvent,
  [EventProgressStatus.MISCELLANEOUS_EVENTS]: miscellaneousEvent,
  [EventProgressStatus.PERSONAL_EVENTS]: personalEvent,
  [EventProgressStatus.PROFESSIONAL_EVENTS]: professionalEvent,
  [EventProgressStatus.SOCIAL_EVENTS]: socialEvent,
};

function EventModal({ setEventList }) {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const [eventForm] = Form.useForm();
  const [customEventData, setCustomEventData] = useState(null);
  const { eventModalOpen, EventModalType, eventData } = useSelector(
    (store: any) => store.eventModals
  );

  useEffect(() => {
    if (EventModalType === ModalType.EDIT) {
      const editDate = {
        ...eventData,
        date: dayjs(eventData?.date),
      };
      eventForm.setFieldsValue(editDate);
    }
  }, [EventModalType]);

  const eventFormFinish = (value) => {
    // used in form submission
    const newEvent = {
      ...value,
      id: eventData?.id,
      date: value?.date?.format("YYYY-MM-DD HH:mm:ss"),
    };
    console.log("NEWEVENT FOR DATE", newEvent);
    if (EventModalType === ModalType.EDIT) {
      const updatedData = {
        ...eventData,
        ...newEvent,
      };
      setEventList((pre) =>
        pre?.map((event) => (event.id === updatedData.id ? updatedData : event))
      );
      api.success({
        message: "Event Edited",
        description: "Your event has been successfully edited.",
        placement: "topRight",
      });
    } else {
      setEventList((pre) => [...pre, newEvent]);
      api.success({
        message: "Event Created",
        description: "Your event has been successfully created.",
        placement: "topRight",
      });
    }
    closeModal();
  };

  const handleEventTypeChange = (e) => {
    eventForm.setFieldValue("customEvent", null);
    setCustomEventData({
      label: eventTypes?.find((f) => f?.key == e)?.label,
      options: customLoad?.[e],
      inputType: e != EventProgressStatus.CUSTOM ? "SELECT" : "TEXT",
    });
  };

  const closeModal = () => {
    dispatch(eventCloseModal());
    Modal.destroyAll();
    eventForm.resetFields();
  };
  return (
    <>
      <Modal
        title={
          EventModalType === ModalType.EDIT
            ? `Edit :  ${eventData?.eventType || "Event"}`
            : "Create New Event"
        }
        // {   {eventTypesLabel[event.eventType].label}
        //   taskModalType === ModalType.EDIT
        //     ? `Edit: ${taskData?.title || "Task"}`
        //     : "Create New Task"
        // }
        centered
        open={eventModalOpen}
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
          <div className="event_footer_btn">
            <Space>
              <Button onClick={closeModal}>Cancel</Button>
              <Button type="primary" onClick={() => eventForm.submit()}>
                Submit
              </Button>
            </Space>
          </div>
        }
      >
        {contextHolder}
        <Form
          onFinish={eventFormFinish}
          form={eventForm}
          name="eventForm"
          labelCol={{ span: 8 }}
          labelAlign="left"
        >
          {/* Event types */}
          <Form.Item
            label="Event Type"
            name="eventType"
            required={false}
            rules={[{ required: true }]}
          >
            <Select
              onChange={handleEventTypeChange}
              placeholder="Select Event Type"
              options={eventTypes}
            />
          </Form.Item>

          {customEventData ? (
            <Form.Item label={customEventData?.label} name="customEvent">
              {customEventData?.inputType == "SELECT" ? (
                <Select
                  placeholder={`Select ${customEventData?.label}`}
                  options={customEventData?.options}
                />
              ) : (
                <Input placeholder="Please enter your Custom Event" />
              )}
            </Form.Item>
          ) : (
            <></>
          )}

          {/* Date and Time */}
          <Form.Item
            label="Date and Time"
            name="date"
            required={false}
            rules={[{ required: true }]}
          >
            {/* DD MMM YYYY, hh:mm A */}
            <DatePicker
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              style={{ width: "100%" }}
            />
          </Form.Item>

          {/* Description */}
          <Form.Item
            label="Event Description"
            name="description"
            required={false}
            rules={[{ required: true }]}
          >
            <Input.TextArea
              placeholder="Enter event details here..."
              rows={4}
            />
          </Form.Item>

          {/* Priority */}
          <Form.Item
            label="Priority"
            name="priority"
            required={false}
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select Event Priority"
              options={eventPriority}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default EventModal;
