export const darkThemeColors = {
  primaryColor: "#E05B3B",
  secondaryColor: "#0075ff",
  bgColor: "#181d21",
  primaryCardColor: "#1c2329",
  secondaryCardColor: "#283137", // button bg
  menuColor: "#232b31",
  borderColor: "#35414b",
  primaryHeadingColor: "#f6f6f8", // primary heading
  headerTextColor: "#F0F1F3", //Header text
  detailTextColor: "#99A2AF",
  // below 4 color are not exposed to edit for now
  successColor: "#18c098",
  warningColor: "#ed7d15",
  errorColor: "#d84040",
  whiteText: "#ffffff",
};

export const lightThemeColors = {
  primaryColor: "#E05B3B",
  secondaryColor: "#0075ff",
  bgColor: "#f5f5f5",
  primaryCardColor: "#ffffff",
  secondaryCardColor: "#f0f0f0", // button bg
  menuColor: "#e8e8e8",
  borderColor: "#d9d9d9",
  primaryHeadingColor: "#262626", // primary heading
  headerTextColor: "#1f1f1f", //Header text
  detailTextColor: "#8c8c8c",
  // below 4 color are not exposed to edit for now
  successColor: "#18c098",
  warningColor: "#ed7d15",
  errorColor: "#d84040",
  whiteText: "#ffffff",
};

export const themeColors = darkThemeColors; // Default to dark theme

export const mapThemes = (themeData) => {
  const COLORMAP = { ...themeColors, ...themeData };
  const mappedJSON = {
    token: {
      borderRadiusLG: 12,
      borderRadius: 8,
      borderRadiusSM: 6,
      borderRadiusXS: 4,
      fontSizeHeading1: COLORMAP.fontSizeHeading1 || 24,
      fontSizeHeading2: COLORMAP.fontSizeHeading2 || 18,
      fontSizeHeading3: COLORMAP.fontSizeHeading3 || 16,
      fontSizeHeading4: COLORMAP.fontSizeHeading4 || 14,
      fontSizeHeading5: COLORMAP.fontSizeHeading5 || 12,
      wireframe: true,
      fontFamily: "Asap",
      fontSize: COLORMAP.fontSize || 14,
      fontSizeXL: COLORMAP.fontSizeXL || 18,
      colorPrimary: COLORMAP.secondaryColor,
      colorTextTertiary: COLORMAP.detailTextColor,
      colorFillSecondary: COLORMAP.bgColor,
      colorBgBase: COLORMAP.primaryCardColor,
      colorFillTertiary: COLORMAP.menuColor,
      colorBgContainer: COLORMAP.secondaryCardColor,
      colorBgElevated: COLORMAP.primaryCardColor,
      colorBorder: COLORMAP.borderColor,
      colorBorderSecondary: COLORMAP.borderColor,
      colorText: COLORMAP.headerTextColor,
      colorTextSecondary: COLORMAP.primaryHeadingColor,
      colorInfo: COLORMAP.headerTextColor,
      colorTextQuaternary: COLORMAP.detailTextColor,
      colorTextPlaceholder: COLORMAP.detailTextColor,
      colorPrimaryActive: COLORMAP.primaryColor,
      colorSuccess: COLORMAP.successColor,
      colorWarning: COLORMAP.warningColor,
      colorError: COLORMAP.errorColor,
    },
    components: {
      Menu: {
        itemBg: COLORMAP.menuColor,
        itemColor: COLORMAP.detailTextColor,
        itemHoverBg: COLORMAP.secondaryCardColor,
        itemHoverColor: COLORMAP.headerTextColor,
        itemSelectedBg: COLORMAP.primaryCardColor,
        itemSelectedColor: COLORMAP.headerTextColor,
      },
    },
  };
  const coreTag = document.getElementById("root");
  const rootColors = {
    "--success-color": COLORMAP.successColor,
    "--primary-card-color": COLORMAP.primaryCardColor,
    "--white-color": COLORMAP.whiteText,
    "--hint-color": COLORMAP.detailTextColor,
    "--heading-color": COLORMAP.headerTextColor,
    "--background-color": COLORMAP.bgColor,
    "--secondary-card-color": COLORMAP.secondaryCardColor,
    "--primary-color": COLORMAP.primaryColor,
    "--secondary-color": COLORMAP.secondaryColor,
    "--detail-text-color": COLORMAP.detailTextColor,
  };
  for (const [key, value] of Object.entries(rootColors)) {
    coreTag.style.setProperty(key, value);
  }
  return mappedJSON;
};
