import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import MoreVertIcon from "@mui/icons-material/MoreVert";


const options = JSON.parse(localStorage.getItem("tutor"))?.saveTutor?.tutor_exam;

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log({options:options})
  return (
    <div>
      <Tooltip title="Test Given">
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          {/* <MoreVertIcon /> */}
          <span class="fas fa-book-reader" />
        </IconButton>
      </Tooltip>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            overflowX: "scroll",
            overflowY: "scroll",
            display: "table",
            paddingLeft:"5px",
            paddingRight:"5px",
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "max-content",
          },
        }}
      >
        {(options.length!==0 && options!==undefined) ? options?.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            style={{ display: "table-row" }}
            onClick={handleClose}
          >
              <span
              style={{
                display: "table-cell",
                color: option.status == "fail" && "gray",
              }}
            >
              {option.subject}
            </span>{" "}
            <span
              style={{
                display: "table-cell",
                flex: "25%",
                paddingLeft: "10px",
                paddingRight: "10px",
                color: option.status == "fail" && "gray",
              }}
            >
              {Math.round((+option.marks / +option.passing_marks) * 1000)/10 + "%"}
            </span>{" "}
            <span
              style={{
                display: "table-cell",
                color: option.status == "pass" ? "green" : "red",
                marginLeft: "5px",
                flex: "25%",
              }}
            >
              {option.status}
            </span>
           
          </MenuItem>
        ))
        :
        <span  style={{
          margin:"5px",
          color: "gray"}}> 
          No exams given yet!
        </span>  
        }
      </Menu>
    </div>
  );
}
