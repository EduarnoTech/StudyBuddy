import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom"
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [commentsVal, setCommentsVal] = useState();
 console.log({testFolderLink:props?.product?.quesFolderLink})

  const handleClickOpen = () => {
    setOpen(true);
  };

 

  useEffect(() => {
    if (
      props.product.client_comments !== null &&
      props.product.client_comments != ""
    )
      setCommentsVal(props.product.client_comments);
  }, [props.product.client_comments]);

  const updateComments = async () => {
    const sendComments = await axios.post(
      "https://device6chatapi.el.r.appspot.com/api/sessions/private/updateComments",
      { sessionId: props.product.sessionId, clientComments: commentsVal }
    );

    if (sendComments?.data?.success) {
      console.log("comment updated");
      setOpen(false);
    } else {
      console.log("comment not get updated");
      alert("Comment not get updated.Please try again!!");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{ borderColor: "rgb(80, 72, 229)", color: "rgb(80, 72, 229)" }}
      >
        Files & Comments
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Upload files</DialogTitle>

        <DialogContent>
        <a href={props?.product?.quesFolderLink}  target ="_blank"  > <Button variant="contained" style={{marginBottom:"30px" }} component="label">
              Folderlink
             
            </Button></a>
         
          
            <DialogContentText>Update your comments here.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Comments"
            value={commentsVal}
            type=""
            style={{ width: "34rem"}}
            onChange={(e) => setCommentsVal(e.target.value)}
            fullWidth
            multiline
            cols={10}
            rows={3}
            maxRows={6}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={() => updateComments()}>Save Changes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
