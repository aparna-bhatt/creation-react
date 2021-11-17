import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import UserEdit from "./UserEdit";
import Template_1 from "./Template-1";
import Template_3 from "./Template-3";
import Template_2 from "./Template-2";
import { useState ,useEffect } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  height: "fit-content",
  bgcolor: "background.paper",
  border: "1px solid gray",
  boxShadow: "white 0 0 5px 0.5px",
  p: 4,
  borderRadius: "5px",
  maxHeight: "80vh",
  overflow: "auto",
};

export default function TransitionsModal({
  isOpen,
  setIsOpen,
  Data,
}) {
  const handleClose = () => setIsOpen();
  console.log(Data);

  const[temp1,setTemp1]=useState(false);
  const[temp2,setTemp2]=useState(false);
  const[temp3,setTemp3]=useState(false);
  useEffect(() => {
    if(Data.form1.templateid==="1")
    setTemp1(true);
    else if(Data.form1.templateid==="2")
    setTemp2(true);
    else if(Data.form1.templateid==="3")
    setTemp3(true);
    console.log(Data.form1.templateid)
  }, [])


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            {temp1&&<Template_1   data={{Data}} />}
            {temp3&&<Template_3 data={{Data}} />}
            {temp2&&<Template_2 data={{Data}} />}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}