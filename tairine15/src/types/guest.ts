export type AgeCategory = "ADULT" | "CHILD";
export type RsvpStatus = "PENDING" | "CONFIRMED" | "DECLINED";

export interface GuestSearchResult {
  id: string;
  name: string;
  invitationCode: string;
  groupName: string | null;
  maximumGuests: number;
  allowsCompanion: boolean;
}

export interface GroupMemberDTO {
  id: string;
  name: string;
  ageCategory: AgeCategory;
  confirmed: boolean;
}

export interface GuestDetailDTO extends GuestSearchResult {
  members: GroupMemberDTO[];
  rsvpStatus: RsvpStatus | null;
}

export interface RsvpFormPayload {
  guestId: string;
  invitationCode: string;
  attending: boolean;
  confirmedCount: number;
  selectedMemberIds: string[];
  companionName?: string;
  phone?: string;
  dietaryRestrictions?: string;
  notes?: string;
  message?: string;
}

export interface RsvpResponseDTO {
  status: RsvpStatus;
  confirmedCount: number;
  respondedAt: string;
}

export interface ApiError {
  error: string;
  fieldErrors?: Record<string, string>;
}
