import { MeetingGetOne, MeetingStatus } from "../../types";
import { ActiveState } from "./active-state";
import { CancelledState } from "./cancelled-state";
import { CompletedState } from "./completed-state";
import { ProcessingState } from "./processing-state";
import { UpcomingState } from "./upcoming-state";

interface MeetingStatusFactoryProps {
  status: MeetingStatus;
  meetingId: string;
  data: MeetingGetOne;
}

export const MeetingStatusFactory = ({
  status,
  meetingId,
  data,
}: MeetingStatusFactoryProps) => {
  switch (status) {
    case MeetingStatus.UPCOMING:
      return <UpcomingState meetingId={meetingId} />;
    case MeetingStatus.ACTIVE:
      return <ActiveState meetingId={meetingId} />;
    case MeetingStatus.COMPLETED:
      return <CompletedState data={data} />;
    case MeetingStatus.PROCESSING:
      return <ProcessingState />;
    case MeetingStatus.CANCELLED:
      return <CancelledState />;
  }
};
