import { Button, Card, Col, Popconfirm, Row, Space, Typography } from "antd";
// import React, { useState } from "react";
import "../../assets/Style/Layout.css";
import EventModal from "./EventModal";
import { useDispatch } from "react-redux";
import { eventJsonList } from "../../utils/EventJsonData";
import dayjs from "dayjs";
import { Descriptions } from "antd";
import { eventOpenModal } from "../../store/eventModalSlice";
import {
  ModalType,
  priorityStatusLabel,
  eventTypesLabel,
} from "../../utils/EnumAndOptions";
import { useState } from "react";
import { notification } from "antd";

function Event() {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const { Title, Text } = Typography;
  const [eventList, setEventList] = useState(eventJsonList);

  const handleCreateEvent = () => {
    dispatch(
      eventOpenModal({
        type: ModalType.CREATE,
        data: {
          id: eventList?.length + 1,
        },
      })
    );
  };

  const handleEdit = (item) => {
    dispatch(
      eventOpenModal({
        type: ModalType.EDIT,
        data: item,
      })
    );
  };

  const handleDelete = (eventId) => {
    const updatedData = eventList.filter((f) => f?.id !== eventId);
    setEventList(updatedData);
    api.success({
      message: "Event Deleted",
      description: "Your event has been successfully deleted.",
      placement: "topRight",
    });
  };
  return (
    <>
      {contextHolder}
      <Card>
        <div className="event_container">
          <div className="event_card">
            <div>
              <Typography>
                <Title level={3}> Total Events : {eventList.length} </Title>
              </Typography>
            </div>
            <div>
              <Button type="primary" onClick={handleCreateEvent}>
                Create Event
              </Button>
            </div>
          </div>
          <Row gutter={[16, 16]}>
            {[...eventList]?.reverse()?.map((event, index) => (
              <Col key={index} span={8}>
                <Card
                  title={
                    <Typography>
                      <Title level={4}>{eventTypesLabel[event.eventType].label}</Title>
                    </Typography>
                  }
                  style={{ height: "100%" }}
                >
                  <Descriptions
                    column={1}
                    labelStyle={{ width: 140, fontWeight: "bold" }}
                  >
                    <Descriptions.Item label="Event Name">
                      <Typography>
                        <Text>{event.customEvent}</Text>
                      </Typography>
                    </Descriptions.Item>

                    <Descriptions.Item label="Event Date & Time">
                      <Typography>
                        <Text>
                          {event.date
                            ? dayjs(event.date).format("DD MMM YYYY HH:mm")
                            : "No date"}
                        </Text>
                      </Typography>
                    </Descriptions.Item>
                    <Descriptions.Item label="Event Description">
                      <Typography>
                        <Text>{event.description}</Text>
                      </Typography>
                    </Descriptions.Item>
                    <Descriptions.Item label="Priority">
                      <Typography>
                        <Text
                          style={{
                            color: priorityStatusLabel[event.priority].color,
                          }}
                        >
                          {priorityStatusLabel[event.priority].label}
                        </Text>
                      </Typography>
                    </Descriptions.Item>
                  </Descriptions>

                  <Space style={{ paddingTop: "20px" }}>
                    <Button onClick={() => handleEdit(event)}>Edit</Button>
                    <Popconfirm
                      title="Are you sure, you want to delete this event ?"
                      placement="leftTop"
                      okText="Yes"
                      cancelText="No"
                      okButtonProps={{ danger: true }}
                      description="This action is permanent and cannot be undone."
                      onConfirm={() => handleDelete(event?.id)}
                    >
                      <Button danger>Delete</Button>
                    </Popconfirm>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <EventModal setEventList={setEventList} />
      </Card>
    </>
  );
}

export default Event;
