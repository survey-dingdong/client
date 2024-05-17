import { Dayjs } from "dayjs";

export interface TimeSlot {
  id: number;
  start_time: string;
  end_time: string;
  max_participants: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  is_public: boolean;
  start_date: Dayjs;
  end_date: Dayjs;
  excluded_dates: string[];
  time_slots: TimeSlot[];
  max_participants: number;
  experiment_type: string;
  location: string;
  participant_code: string;
  created_at: string;
  updated_at: string;
}
