import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AgentForm } from "./agent-form";

interface NewAgentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  handleMeetingAgent?: (agentId: string) => void
}

export const NewAgentDialog = ({ open, onOpenChange, handleMeetingAgent }: NewAgentDialogProps) => {
  const handleSuccess = ({ agentId }: { agentId?: string }) => {
    if (agentId) {
      handleMeetingAgent?.(agentId);
    } 
    onOpenChange(false);
  }

  return (
    <ResponsiveDialog
      title="New Agent"
      description="Create a new agent"
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentForm
        onSuccess={handleSuccess}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  )
};