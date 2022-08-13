import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from "@mui/material";

export type SuccessedDialogProps = {
  onClose: (value: string) => void;
  title?: string;
  message?: string;
};

export function SuccessedDialog(props: SuccessedDialogProps) {
  const { onClose, message } = props;

  return (
    <Dialog open onClose={() => onClose("close")}>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose("ok")}>OK</Button>
      </DialogActions>
    </Dialog>
  );
}
