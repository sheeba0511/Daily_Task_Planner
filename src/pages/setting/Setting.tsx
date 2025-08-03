import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  ColorPicker,
  InputNumber,
  Space,
  Typography,
  Button,
  Row,
  Col,
  notification,
} from "antd";
import { ReloadOutlined, SaveOutlined, UndoOutlined } from "@ant-design/icons";
import type { Color } from "antd/es/color-picker";
import type { RootState } from "../../store/store";
import { updatePreviewColor, updatePreviewFontSize, applyChanges, resetPreview, resetTheme } from "../../store/themeSlice";

const { Title, Text } = Typography;

function Setting() {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);

  const handleColorChange = (key: string, color: Color) => {
    dispatch(updatePreviewColor({ key: key as any, value: color.toHexString() }));
  };

  const handleFontSizeChange = (key: string, value: number | null) => {
    if (value !== null) {
      dispatch(updatePreviewFontSize({ key: key as any, value }));
    }
  };

  const handleReset = () => {
    dispatch(resetTheme());
    api.success({
      message: "Theme Reset",
      description: "Theme has been reset to default values.",
      placement: "topRight",
    });
  };

  const handleSave = () => {
    dispatch(applyChanges());
    api.success({
      message: "Theme Applied",
      description: "Theme changes have been applied successfully.",
      placement: "topRight",
    });
  };

  const handleCancel = () => {
    dispatch(resetPreview());
    api.info({
      message: "Changes Cancelled",
      description: "All changes have been cancelled.",
      placement: "topRight",
    });
  };

  const colorConfigs = [
    { key: "primaryColor", label: "Primary Color", description: "Main brand color" },
    { key: "secondaryColor", label: "Secondary Color", description: "Secondary brand color" },
    { key: "bgColor", label: "Background Color", description: "Main background" },
    { key: "primaryCardColor", label: "Primary Card Color", description: "Card backgrounds" },
    { key: "secondaryCardColor", label: "Secondary Card Color", description: "Button backgrounds" },
    { key: "menuColor", label: "Menu Color", description: "Menu background" },
    { key: "borderColor", label: "Border Color", description: "Border elements" },
    { key: "primaryHeadingColor", label: "Primary Heading Color", description: "Main headings" },
    { key: "headerTextColor", label: "Header Text Color", description: "Header text" },
    { key: "detailTextColor", label: "Detail Text Color", description: "Secondary text" },
  ];

  const fontSizeConfigs = [
    { key: "fontSizeHeading1", label: "Heading 1 Size", min: 16, max: 48 },
    { key: "fontSizeHeading2", label: "Heading 2 Size", min: 14, max: 36 },
    { key: "fontSizeHeading3", label: "Heading 3 Size", min: 12, max: 32 },
    { key: "fontSizeHeading4", label: "Heading 4 Size", min: 10, max: 28 },
    { key: "fontSizeHeading5", label: "Heading 5 Size", min: 8, max: 24 },
    { key: "fontSizeXL", label: "Extra Large Text Size", min: 12, max: 32 },
    { key: "fontSize", label: "Base Text Size", min: 10, max: 20 },
  ];

  // Check if there are any changes to preview
  const hasChanges = JSON.stringify(theme.colors) !== JSON.stringify(theme.previewColors) ||
                    JSON.stringify(theme.fontSizes) !== JSON.stringify(theme.previewFontSizes);

  return (
    <>
      {contextHolder}
      <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <Title level={2}>Theme Settings</Title>
      <Text type="secondary">
        Customize the appearance of your Daily Task Planner by adjusting colors and font sizes.
        Changes will only be applied when you click "Apply Changes".
      </Text>

      <Space direction="vertical" size="large" style={{ width: "100%", marginTop: "24px" }}>
        {/* Color Settings */}
        <Card title="Color Configuration" size="small">
          <Row gutter={[16, 16]}>
            {colorConfigs.map((config) => (
              <Col xs={24} sm={12} md={8} lg={6} key={config.key}>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Text strong>{config.label}</Text>
                  <Text type="secondary" style={{ fontSize: "12px" }}>
                    {config.description}
                  </Text>
                  <ColorPicker
                    value={theme.previewColors[config.key as keyof typeof theme.previewColors]}
                    onChange={(color) => handleColorChange(config.key, color)}
                    showText
                    size="middle"
                    style={{ width: "100%" }}
                  />
                </Space>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Font Size Settings */}
        <Card title="Font Size Configuration" size="small">
          <Row gutter={[16, 16]}>
            {fontSizeConfigs.map((config) => (
              <Col xs={24} sm={12} md={8} lg={6} key={config.key}>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Text strong>{config.label}</Text>
                  <InputNumber
                    value={theme.previewFontSizes[config.key as keyof typeof theme.previewFontSizes]}
                    onChange={(value) => handleFontSizeChange(config.key, value)}
                    min={config.min}
                    max={config.max}
                    addonAfter="px"
                    style={{ width: "100%" }}
                  />
                </Space>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Action Buttons */}
        <Card size="small">
          <Space>
            <Button
              type="primary"
              icon={<SaveOutlined />}
              onClick={handleSave}
              disabled={!hasChanges}
            >
              Apply Changes
            </Button>
            <Button
              icon={<UndoOutlined />}
              onClick={handleCancel}
              disabled={!hasChanges}
            >
              Cancel Changes
            </Button>
            <Button
              icon={<ReloadOutlined />}
              onClick={handleReset}
            >
              Reset to Default
            </Button>
          </Space>
        </Card>

        {/* Preview Section */}
        <Card title="Theme Preview" size="small">
          <div
            style={{
              backgroundColor: theme.previewColors.bgColor,
              padding: "16px",
              borderRadius: "8px",
              border: `1px solid ${theme.previewColors.borderColor}`,
            }}
          >
            <div
              style={{
                backgroundColor: theme.previewColors.primaryCardColor,
                padding: "16px",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  color: theme.previewColors.primaryHeadingColor,
                  fontSize: `${theme.previewFontSizes.fontSizeHeading1}px`,
                  marginBottom: "8px",
                }}
              >
                Sample Heading 1
              </div>
              <div
                style={{
                  color: theme.previewColors.headerTextColor,
                  fontSize: `${theme.previewFontSizes.fontSizeHeading3}px`,
                  marginBottom: "8px",
                }}
              >
                Sample Heading 3
              </div>
              <div
                style={{
                  color: theme.previewColors.detailTextColor,
                  fontSize: `${theme.previewFontSizes.fontSize}px`,
                }}
              >
                Sample detail text with secondary color
              </div>
            </div>
            <div
              style={{
                backgroundColor: theme.previewColors.secondaryCardColor,
                padding: "12px",
                borderRadius: "6px",
                display: "inline-block",
                color: theme.previewColors.headerTextColor,
              }}
            >
              Sample Button
            </div>
          </div>
        </Card>
      </Space>
    </div>
    </>
  );
}

export default Setting;
