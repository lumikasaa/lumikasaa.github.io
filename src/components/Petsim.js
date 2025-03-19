import {Rollpet} from "../util/Rollpet";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Button } from "@mui/material";
import { purple } from '@mui/material/colors';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: "40px",
  width: "60px",
  margin: 0,
  position: 'relative',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const styleBasic = {
display:'flex',height:40, width:40, margin: 'auto',
borderStyle: "solid",
borderColor: "black",
backgroundColor: "#d3d3d3"
}

const styleRare = {
display:'flex',height:40, width:40, margin: 'auto',
borderStyle: "solid",
borderColor: "black",
backgroundColor: "#1e90ff",
boxShadow: "0px 0px 20px 10px #4169e1"
}

const styleHit = {
display:'flex',height:40, width:40, margin: 'auto',
borderStyle: "solid",
borderColor: "black",
backgroundColor: "#dda0dd",
boxShadow: "0px 0px 40px 15px #6A0DAD"
}

const styleButton = {

}

const Petsim = () => {

  document.body.style = 'background: pink;';

  const [images, setImages] = useState([]);

  const handleClick = () => {
    let newPics = Rollpet()
    setImages(newPics)
  }

  return (
    <div style={{height:"100%", width: "100%",justifyContent: "center",
      alignItems: "center", verticalAlign: "middle"}}>
      <div style={{margin: 40, textAlign: 'center'}}>
      <ColorButton variant="outlined" onClick={handleClick}>
        Roll 11
      </ColorButton>
      </div>
      <div id="rollresult">
          {images.length >= 1 && (
            <Box>
              <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                {images.map((item, i) => (
              <Grid size={1}  key={i}>
                <Item style={(item[3] == "Permanent" && item[2] != "Concentrated Premium Water of Life" ? styleRare : item[4] == "Petite Luna" ? styleHit : styleBasic)}>
                <div style={{display:'flex',height:40, width:40, margin: 'auto'}}><img style={{ margin: 'auto'}} src={require("../img/"+item[1])}/> </div>
                </Item>
              </Grid>
          ))}
          </Grid>
        </Box>
        )
        }
      </div>
    </div>
  )
};

export default Petsim