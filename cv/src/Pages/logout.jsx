import { useContext } from "react";
import { AuthContext } from "../Context/authContext";
import { useHistory } from 'react-router-dom';
import { Box, Typography, Button} from '@mui/material';


const Logout = () => {

  const authProvider = useContext(AuthContext);
  const history = useHistory();


async function handleSubmit(event) {
    event.preventDefault();
    console.log("submit");
      authProvider.logout();
      history.push('/');
  
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} >
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom
              sx={{ color: "#d1855b " }}>
                تسجيل الخروج
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
                اضغط على الزر في الاسفل
            </Typography>
          </Box>
          <Button
            onClick={handleSubmit}
            // fullWidth
            size="large"
            type="submit"
            variant="contained"
            style={{

              backgroundColor: "#d1855b"
            }}

          >
          تسجيل الخروج
          </Button>
        </form>

      </div>
    </>
  );
}
export default Logout;