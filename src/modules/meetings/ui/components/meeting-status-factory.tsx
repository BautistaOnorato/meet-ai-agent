import { MeetingStatus } from "../../types";
import { ActiveState } from "./active-state";
import { CancelledState } from "./cancelled-state";
import { ProcessingState } from "./processing-state";
import { UpcomingState } from "./upcoming-state";

interface MeetingStatusFactoryProps {
  status: MeetingStatus;
  meetingId: string;
}

export const MeetingStatusFactory = ({ status, meetingId }: MeetingStatusFactoryProps) => {
  switch (status) {
    case MeetingStatus.UPCOMING:
      return (
        <UpcomingState
          meetingId={meetingId}
          isCancelling={false}
          onCancelMeeting={() => {}}
        />
      );
    case MeetingStatus.ACTIVE:
      return (
        <ActiveState meetingId={meetingId} />
      );
    case MeetingStatus.COMPLETED:
      return (
        <div className="flex items-center gap-x-2 capitalize">
          {MeetingStatus.COMPLETED}
        </div>
      );
    case MeetingStatus.PROCESSING:
      return (
        <ProcessingState />
      );
    case MeetingStatus.CANCELLED:
      return (
        <CancelledState />
      );
  }
};
