import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
} from "antd";
import React, { useState } from "react";
import "../../assets/Style/Layout.css";
import {
  eventTypes,
  personalEvent,
  festivalEvent,
  professionalEvent,
  socialEvent,
  miscellaneousEvent,
  eventPriority,
} from "../../utils/EnumAndOptions";

function Event() {
  const [eventForm] = Form.useForm();
  const [eventModal, setEventModal] = useState(false);
  const [cardData, setCardData] = useState([]);

  const handleEvent = () => {
    // used in cancel button
    setEventModal(false);
  };
  const eventFormFinish = (value) => {
    // used in form submission
    console.log(value);

    setCardData([...cardData, value]);
  };
  return (
    <div>
      <Button type="primary" onClick={() => setEventModal(true)}>
        Create Event
      </Button>
      <Modal
        title="Create New Event"
        centered
        open={eventModal}
        onCancel={handleEvent}
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
              <Button onClick={handleEvent}>Cancel</Button>
              <Button type="primary" onClick={() => eventForm.submit()}>
                Submit
              </Button>
            </Space>
          </div>
        }
      >
        <Form
          onFinish={eventFormFinish}
          form={eventForm}
          name="eventForm"
          labelCol={{ span: 7 }}
          labelAlign="left"
        >
          {/* Event types */}
          <Form.Item
            label="Event Types"
            name="selectEventType"
            required={false}
            rules={[{ required: true }]}
          >
            <Select placeholder="Select event type" options={eventTypes} />
          </Form.Item>

          {/* Personal Event */}
          <Form.Item label="Personal Events" name="personalEvent">
            <Select
              placeholder="Select Personal Event"
              options={personalEvent}
            />
          </Form.Item>

          {/* Festival & Religious Event */}
          <Form.Item label="Festival & Religious Events" name="festivalEvent">
            <Select
              placeholder="Select Festival & Religious Event"
              options={festivalEvent}
            />
          </Form.Item>

          {/* Professional Events */}
          <Form.Item label="Professional Events" name="professionalEvent">
            <Select
              placeholder="Select Professional Event"
              options={professionalEvent}
            />
          </Form.Item>

          {/* Social events */}
          <Form.Item label="Social Events" name="socialEvent">
            <Select placeholder="Select Social Event" options={socialEvent} />
          </Form.Item>

          {/* Miscellaneous Events */}
          <Form.Item label="Miscellaneous Events" name="miscellaneousEvent">
            <Select
              placeholder="Select Miscellaneous Event"
              options={miscellaneousEvent}
            />
          </Form.Item>

          {/* Custom Event */}
          <Form.Item label="Custom Events" name="customEvent">
            <Input placeholder="Please enter your Custom Event" />
          </Form.Item>
          {/* Date and Time */}
          <Form.Item
            label="Date and Time"
            name="dateTime"
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

      {/* Card */}
      <Row gutter={[16, 16]}>
        {cardData.map((event, index) => (
          <Col key={index} span={8}>
            <Card title={event.selectEventType}>
              {/* <p>Event Types: {event.selectEventType}</p> */}
              <p>Event Name:{event.personalEvent} </p>
              <p>
                {/* .format('YYYY-MM-DD HH:mm:ss') */}
                Event Date & Time:
                {event.dateTime.format("DD MMM YYYY, HH:mm:ss ")}
              </p>
              <p>Event Description:{event.description}</p>
              <p>Priority: {event.priority}</p>

              {
                <Space>
                  <Button>Edit</Button>
                  <Button type="primary">Delete</Button>
                  <Button>Complete</Button>
                </Space>
              }
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Event;
