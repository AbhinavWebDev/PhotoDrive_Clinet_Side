import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PostShare from '../PostShare/PostShare';
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import { logOut } from '../../Redux/Actions/AuthAction';
import { useDispatch} from "react-redux";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxWidth: 360,
};
export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const [addPost, setaddPost] = React.useState(null);
  const handleOpenAdd = () => setaddPost(true);
  const handleCloseAdd = () => setaddPost(false);
  const handleLogout=()=>dispatch(logOut())
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Photo Drive
          </Typography>
          <IconButton size="large" color="inherit" onClick={handleOpenAdd}>
              < AddIcon />
            </IconButton>
          <Button variant="contained" color="success" onClick={handleLogout}>
  Logout
</Button>
        </Toolbar>
      </AppBar>
    </Box>

<Modal
open={addPost}
onClose={handleCloseAdd}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<Box sx={style}>
  <PostShare />
</Box>
</Modal>
</>
  );
}