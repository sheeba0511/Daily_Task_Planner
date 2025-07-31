export enum TaskProgressStatus {
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  ON_HOLD = "ON_HOLD",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export const taskStatusLabel = {
  [TaskProgressStatus.IN_PROGRESS]: { label: "In Progress", color: "#1890FF" },
  [TaskProgressStatus.PENDING]: { label: "Pending", color: "#FADB14" },
  [TaskProgressStatus.ON_HOLD]: { label: "On Hold", color: "#FA541C" },
  [TaskProgressStatus.COMPLETED]: { label: "Completed", color: "#52C41A" },
  [TaskProgressStatus.CANCELLED]: { label: "Cancelled", color: "#F5222D	" },
};

export const taskOptions = [
  {
    key: TaskProgressStatus.PENDING,
    value: TaskProgressStatus.PENDING,
    label: "Pending",
  },
  {
    key: TaskProgressStatus.IN_PROGRESS,
    value: TaskProgressStatus.IN_PROGRESS,
    label: "In Progress",
  },
  {
    key: TaskProgressStatus.ON_HOLD,
    value: TaskProgressStatus.ON_HOLD,
    label: "On Hold",
  },
  {
    key: TaskProgressStatus.COMPLETED,
    value: TaskProgressStatus.COMPLETED,
    label: "Completed",
  },
  {
    key: TaskProgressStatus.CANCELLED,
    value: TaskProgressStatus.CANCELLED,
    label: "Cancelled",
  },
];

// Task Asignee name status
export enum TaskAssignedStatus {
  RAVI_KUMAR_JAIN = "RAVI_KUMAR_JAIN",
  HARSHAN_PANDEY = "HARSHAN_PANDEY",
  VIJAY_MALHOTRA = " VIJAY_MALHOTRA",
  AMARNATH_MISHRA = "AMARNATH_MISHRA",
}
export const taskAssignedToOtions = [
  {
    key: TaskAssignedStatus.RAVI_KUMAR_JAIN,
    value: TaskAssignedStatus.RAVI_KUMAR_JAIN,
    label: "Mr. Ravi Kumar Jain",
  },
  {
    key: TaskAssignedStatus.HARSHAN_PANDEY,
    value: TaskAssignedStatus.HARSHAN_PANDEY,
    label: "Mr. Harshan Pandey",
  },
  {
    key: TaskAssignedStatus.VIJAY_MALHOTRA,
    value: TaskAssignedStatus.VIJAY_MALHOTRA,
    label: "Mr. Vijay Malhotra",
  },
  {
    key: TaskAssignedStatus.AMARNATH_MISHRA,
    value: TaskAssignedStatus.AMARNATH_MISHRA,
    label: "Mr. Amarnath Mishra",
  },
];

// FOR EVENT PAGE == Personal Events, Festivals & Religious Events, Professional Events, Social Events,
//  Miscellaneous Events

export enum EventProgressStatus {
  PERSONAL_EVENTS = "PERSONAL_EVENTS",
  FESTIVALS_RELIGIOUS_EVENTS = "FESTIVALS_RELIGIOUS_EVENTS",
  PROFESSIONAL_EVENTS = "PROFESSIONAL_EVENTS",
  SOCIAL_EVENTS = "SOCIAL_EVENTS",
  MISCELLANEOUS_EVENTS = "MISCELLANEOUS_EVENTS",
  CUSTOM = "CUSTOM",
}

export const eventTypesLabel = {
  [EventProgressStatus.PERSONAL_EVENTS]: { label: "Personal Events" },
  [EventProgressStatus.FESTIVALS_RELIGIOUS_EVENTS]: {
    label: "Festival & Religious Events",
  },
  [EventProgressStatus.PROFESSIONAL_EVENTS]: { label: "Professional Events" },
  [EventProgressStatus.SOCIAL_EVENTS]: { label: "Social Events" },
  [EventProgressStatus.MISCELLANEOUS_EVENTS]: { label: "Miscellaneous Events" },
  [EventProgressStatus.CUSTOM]: { label: "Custom" },
};

export const eventTypes = [
  {
    key: EventProgressStatus.PERSONAL_EVENTS,
    value: EventProgressStatus.PERSONAL_EVENTS,
    label: "Personal Events",
  },
  {
    key: EventProgressStatus.FESTIVALS_RELIGIOUS_EVENTS,
    value: EventProgressStatus.FESTIVALS_RELIGIOUS_EVENTS,
    label: "Festivals & Religious Events",
  },
  {
    key: EventProgressStatus.PROFESSIONAL_EVENTS,
    value: EventProgressStatus.PROFESSIONAL_EVENTS,
    label: "Professional Events",
  },
  {
    key: EventProgressStatus.SOCIAL_EVENTS,
    value: EventProgressStatus.SOCIAL_EVENTS,
    label: "Social Events",
  },
  {
    key: EventProgressStatus.MISCELLANEOUS_EVENTS,
    value: EventProgressStatus.MISCELLANEOUS_EVENTS,
    label: "Miscellaneous Events",
  },
  {
    key: EventProgressStatus.CUSTOM,
    value: EventProgressStatus.CUSTOM,
    label: "Custom Event",
  },
];

// FOR EVENT PAGE == Personal Events,
export enum PersonalEventStatus {
  BIRTHDAY = " BIRTHDAY",
  ANNIVERSARY = "ANNIVERSARY",
  ENGAGEMENT = "ENGAGEMENT",
  HOUSEWARMING = "HOUSEWARMING",
  NAMING_CEREMONY = " NAMING_CEREMONY",
}

export const personalEvent = [
  {
    key: PersonalEventStatus.BIRTHDAY,
    value: PersonalEventStatus.BIRTHDAY,
    label: "Birthday",
  },
  {
    key: PersonalEventStatus.ANNIVERSARY,
    value: PersonalEventStatus.ANNIVERSARY,
    label: "Anniversary",
  },
  {
    key: PersonalEventStatus.ENGAGEMENT,
    value: PersonalEventStatus.ENGAGEMENT,
    label: "Engagement",
  },
  {
    key: PersonalEventStatus.HOUSEWARMING,
    value: PersonalEventStatus.HOUSEWARMING,
    label: "Housewarming",
  },
  {
    key: PersonalEventStatus.NAMING_CEREMONY,
    value: PersonalEventStatus.NAMING_CEREMONY,
    label: "Naming Ceremony",
  },
];

// FOR EVENT PAGE= Festivals & Religious Events,

export enum FestivalEventStatus {
  EID_EIDUL_ADHA = "EID_EIDUL_ADHA",
  DIWALI_HOLI_CHRISTMAS = "DIWALI_HOLI_CH RISTMAS",
  RAMZAN_LENT_NAVRATRI = "RAMZAN_LENT_NAVRATRI",
  NEW_YEAR = "NEW_YEAR",
}
export const festivalEvent = [
  {
    key: FestivalEventStatus.EID_EIDUL_ADHA,
    value: FestivalEventStatus.EID_EIDUL_ADHA,
    label: "Eid / Eid-Ul-Adha",
  },
  {
    key: FestivalEventStatus.DIWALI_HOLI_CHRISTMAS,
    value: FestivalEventStatus.DIWALI_HOLI_CHRISTMAS,
    label: "Diwali / Holi / Christmas",
  },
  {
    key: FestivalEventStatus.RAMZAN_LENT_NAVRATRI,
    value: FestivalEventStatus.RAMZAN_LENT_NAVRATRI,
    label: "Ramzan / Lent / Navratri",
  },
  {
    key: FestivalEventStatus.NEW_YEAR,
    value: FestivalEventStatus.NEW_YEAR,
    label: "New Year",
  },
];

// FOR EVENT PAGE = Professional Events

export enum ProfessionalEventStatus {
  WORK_ANNIVERSARY = "WORK_ANNIVERSARY",
  COMPANY_FOUNDING_DAY = "COMPANY_FOUNDING_DAY",
  PROMOTIONS = "PROMOTIONS",
  APPRAISEL_EVENTS = "APPRAISEL_EVENTS",
  TEAM_CELEBRATIONS = "TEAM_CELEBRATIONS",
}
export const professionalEvent = [
  {
    key: ProfessionalEventStatus.WORK_ANNIVERSARY,
    value: ProfessionalEventStatus.WORK_ANNIVERSARY,
    label: "Work Anniversary",
  },
  {
    key: ProfessionalEventStatus.COMPANY_FOUNDING_DAY,
    value: ProfessionalEventStatus.COMPANY_FOUNDING_DAY,
    label: "Company Founding Day",
  },
  {
    key: ProfessionalEventStatus.PROMOTIONS,
    value: ProfessionalEventStatus.PROMOTIONS,
    label: "Promotions",
  },
  {
    key: ProfessionalEventStatus.APPRAISEL_EVENTS,
    value: ProfessionalEventStatus.APPRAISEL_EVENTS,
    label: "Apparaisel Events",
  },
  {
    key: ProfessionalEventStatus.TEAM_CELEBRATIONS,
    value: ProfessionalEventStatus.TEAM_CELEBRATIONS,
    label: "Team Celebrations",
  },
];

// FOR EVENT PAGE = Social Events
export enum SocialEventStatus {
  WEDDING = "WEDDING",
  BIRTHDAY_PARTY = "BIRTHDAY_PARTY",
  FAREWELL = "FAREWELL",
  REUNION = "REUNION",
  PUBLIC_HOLIDAYS = "PUBLIC_HOLIDAYS",
}
export const socialEvent = [
  {
    key: SocialEventStatus.WEDDING,
    value: SocialEventStatus.WEDDING,
    label: "Wedding",
  },
  {
    key: SocialEventStatus.BIRTHDAY_PARTY,
    value: SocialEventStatus.BIRTHDAY_PARTY,
    label: "Birthday Party",
  },
  {
    key: SocialEventStatus.FAREWELL,
    value: SocialEventStatus.FAREWELL,
    label: "Farewell",
  },
  {
    key: SocialEventStatus.REUNION,
    value: SocialEventStatus.REUNION,
    label: "Reunion",
  },
  {
    key: SocialEventStatus.PUBLIC_HOLIDAYS,
    value: SocialEventStatus.PUBLIC_HOLIDAYS,
    label: "Public Holidays",
  },
];

// FOR EVENT PAGE == Miscellaneous Events
export enum MiscellaneousEventStatus {
  REMINDERS = "REMINDERS",
  TRAVEL_TRIP = "TRAVEL_TRIP",
  APPOINTMENTS = "APPOINTMENTS",
}
export const miscellaneousEvent = [
  {
    key: MiscellaneousEventStatus.REMINDERS,
    value: MiscellaneousEventStatus.REMINDERS,
    label: "Reminders",
  },
  {
    key: MiscellaneousEventStatus.TRAVEL_TRIP,
    value: MiscellaneousEventStatus.TRAVEL_TRIP,
    label: "Travel / Trip",
  },
  {
    key: MiscellaneousEventStatus.APPOINTMENTS,
    value: MiscellaneousEventStatus.APPOINTMENTS,
    label: "Appointments",
  },
];

// FOR EVENT PAGE== FORM PRIORITY

export enum EventPriorityStatus {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export const priorityStatusLabel = {
  [EventPriorityStatus.HIGH]: { label: "High", color: "#F5222D" },
  [EventPriorityStatus.MEDIUM]: { label: "Medium", color: "#FA8C16" },
  [EventPriorityStatus.LOW]: { label: "Low", color: "#52C41A" },
};
export const eventPriority = [
  {
    key: EventPriorityStatus.LOW,
    value: EventPriorityStatus.LOW,
    label: "Low",
  },
  {
    key: EventPriorityStatus.MEDIUM,
    value: EventPriorityStatus.MEDIUM,
    label: "Medium",
  },
  {
    key: EventPriorityStatus.HIGH,
    value: EventPriorityStatus.HIGH,
    label: "High",
  },
];

// For Task Page == Create task "Label"
export enum TaskLabelStatus {
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
  DATABASE = "DATABASE",
  DEVOPS = "DEVOPS",
  UI_UX = "UI_UX",
  AUTH = "AUTH",
}
export const labelOption = [
  {
    key: TaskLabelStatus.FRONTEND,
    value: TaskLabelStatus.FRONTEND,
    label: "Frontend",
  },
  {
    key: TaskLabelStatus.BACKEND,
    value: TaskLabelStatus.BACKEND,
    label: "Backend",
  },
  {
    key: TaskLabelStatus.DATABASE,
    value: TaskLabelStatus.DATABASE,
    label: "Database",
  },
  {
    key: TaskLabelStatus.DEVOPS,
    value: TaskLabelStatus.DEVOPS,
    label: "DevOps",
  },
  {
    key: TaskLabelStatus.UI_UX,
    value: TaskLabelStatus.UI_UX,
    label: "UI / UX",
  },
  {
    key: TaskLabelStatus.AUTH,
    value: TaskLabelStatus.AUTH,
    label: "Auth",
  },
];

export enum ModalType {
  CREATE = "CREATE",
  EDIT = "EDIT",
}

export const modalEditCreate = [
  {
    key: ModalType.CREATE,
    value: ModalType.CREATE,
    label: "Create",
  },
  {
    key: ModalType.EDIT,
    value: ModalType.EDIT,
    label: "Edit",
  },
];

export enum ReminderModal {
  TRUE = "TRUE",
  FALSE = "FALSE",
}
export const reminderMe = [
  {
    key: ReminderModal.TRUE,
    value: ReminderModal.TRUE,
    label: "True",
  },
  {
    key: ReminderModal.FALSE,
    value: ReminderModal.FALSE,
    label: "False",
  },
];

export enum EventStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}
export const eventStatusLabel = {
  [EventStatus.PENDING]: { label: "Pending", color: "#FADB14" },
  [EventStatus.COMPLETED]: { label: "Completed", color: "#52C41A" },
};
export const eventStatusOption = [
  {
    key: EventStatus.PENDING,
    value: EventStatus.PENDING,
    label: "Pending",
  },
  {
    key: EventStatus.COMPLETED,
    value: EventStatus.COMPLETED,
    label: "Completed",
  },
];
