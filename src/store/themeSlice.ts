import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { themeColors, darkThemeColors, lightThemeColors } from "../utils/theme";

export interface ThemeState {
  themeMode: 'dark' | 'light';
  colors: {
    primaryColor: string;
    secondaryColor: string;
    bgColor: string;
    primaryCardColor: string;
    secondaryCardColor: string;
    menuColor: string;
    borderColor: string;
    primaryHeadingColor: string;
    headerTextColor: string;
    detailTextColor: string;
  };
  fontSizes: {
    fontSizeHeading1: number;
    fontSizeHeading2: number;
    fontSizeHeading3: number;
    fontSizeHeading4: number;
    fontSizeHeading5: number;
    fontSizeXL: number;
    fontSize: number;
  };
  // Preview state for changes that haven't been applied yet
  previewColors: {
    primaryColor: string;
    secondaryColor: string;
    bgColor: string;
    primaryCardColor: string;
    secondaryCardColor: string;
    menuColor: string;
    borderColor: string;
    primaryHeadingColor: string;
    headerTextColor: string;
    detailTextColor: string;
  };
  previewFontSizes: {
    fontSizeHeading1: number;
    fontSizeHeading2: number;
    fontSizeHeading3: number;
    fontSizeHeading4: number;
    fontSizeHeading5: number;
    fontSizeXL: number;
    fontSize: number;
  };
}

const initialState: ThemeState = {
  themeMode: 'dark',
  colors: {
    primaryColor: themeColors.primaryColor,
    secondaryColor: themeColors.secondaryColor,
    bgColor: themeColors.bgColor,
    primaryCardColor: themeColors.primaryCardColor,
    secondaryCardColor: themeColors.secondaryCardColor,
    menuColor: themeColors.menuColor,
    borderColor: themeColors.borderColor,
    primaryHeadingColor: themeColors.primaryHeadingColor,
    headerTextColor: themeColors.headerTextColor,
    detailTextColor: themeColors.detailTextColor,
  },
  fontSizes: {
    fontSizeHeading1: 24,
    fontSizeHeading2: 18,
    fontSizeHeading3: 16,
    fontSizeHeading4: 14,
    fontSizeHeading5: 12,
    fontSizeXL: 18,
    fontSize: 14,
  },
  previewColors: {
    primaryColor: themeColors.primaryColor,
    secondaryColor: themeColors.secondaryColor,
    bgColor: themeColors.bgColor,
    primaryCardColor: themeColors.primaryCardColor,
    secondaryCardColor: themeColors.secondaryCardColor,
    menuColor: themeColors.menuColor,
    borderColor: themeColors.borderColor,
    primaryHeadingColor: themeColors.primaryHeadingColor,
    headerTextColor: themeColors.headerTextColor,
    detailTextColor: themeColors.detailTextColor,
  },
  previewFontSizes: {
    fontSizeHeading1: 24,
    fontSizeHeading2: 18,
    fontSizeHeading3: 16,
    fontSizeHeading4: 14,
    fontSizeHeading5: 12,
    fontSizeXL: 18,
    fontSize: 14,
  },
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updatePreviewColor: (
      state,
      action: PayloadAction<{ key: keyof ThemeState["previewColors"]; value: string }>
    ) => {
      state.previewColors[action.payload.key] = action.payload.value;
    },
    updatePreviewFontSize: (
      state,
      action: PayloadAction<{ key: keyof ThemeState["previewFontSizes"]; value: number }>
    ) => {
      state.previewFontSizes[action.payload.key] = action.payload.value;
    },
    applyChanges: (state) => {
      state.colors = { ...state.previewColors };
      state.fontSizes = { ...state.previewFontSizes };
    },
    resetPreview: (state) => {
      state.previewColors = { ...state.colors };
      state.previewFontSizes = { ...state.fontSizes };
    },
    toggleThemeMode: (state) => {
      const newMode = state.themeMode === 'dark' ? 'light' : 'dark';
      state.themeMode = newMode;
      
      // Use theme colors based on mode
      const themeColors = newMode === 'dark' ? darkThemeColors : lightThemeColors;
      
      // Update colors based on theme mode
      state.colors = {
        primaryColor: themeColors.primaryColor,
        secondaryColor: themeColors.secondaryColor,
        bgColor: themeColors.bgColor,
        primaryCardColor: themeColors.primaryCardColor,
        secondaryCardColor: themeColors.secondaryCardColor,
        menuColor: themeColors.menuColor,
        borderColor: themeColors.borderColor,
        primaryHeadingColor: themeColors.primaryHeadingColor,
        headerTextColor: themeColors.headerTextColor,
        detailTextColor: themeColors.detailTextColor,
      };
      
      // Update preview colors as well
      state.previewColors = { ...state.colors };
    },
    resetTheme: (state) => {
      const defaultColors = {
        primaryColor: themeColors.primaryColor,
        secondaryColor: themeColors.secondaryColor,
        bgColor: themeColors.bgColor,
        primaryCardColor: themeColors.primaryCardColor,
        secondaryCardColor: themeColors.secondaryCardColor,
        menuColor: themeColors.menuColor,
        borderColor: themeColors.borderColor,
        primaryHeadingColor: themeColors.primaryHeadingColor,
        headerTextColor: themeColors.headerTextColor,
        detailTextColor: themeColors.detailTextColor,
      };
      const defaultFontSizes = {
        fontSizeHeading1: 24,
        fontSizeHeading2: 18,
        fontSizeHeading3: 16,
        fontSizeHeading4: 14,
        fontSizeHeading5: 12,
        fontSizeXL: 18,
        fontSize: 14,
      };
      state.colors = defaultColors;
      state.fontSizes = defaultFontSizes;
      state.previewColors = defaultColors;
      state.previewFontSizes = defaultFontSizes;
      state.themeMode = 'dark';
    },
  },
});

export const { updatePreviewColor, updatePreviewFontSize, applyChanges, resetPreview, toggleThemeMode, resetTheme } = themeSlice.actions;
export default themeSlice.reducer; 