
import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography
} from '@mui/material';
import { Download as DownloadIcon } from '../../icons/download';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';

export const ProductListToolbar = (props) => {
  const handleChange = (e) => {
    e.preventDefault();

    let upcommingArray = [];
    console.log({ catching_val: e.target.value });
    // const regex = new RegExp(escapeRegex(e.target.value), 'gi');
    let regex = e.target.value.toLowerCase();
    props.upcomingSessionUser.map((el1) => {
      if (
        el1?.client_amount?.toLowerCase().includes(regex) ||
        el1?.client_time?.toLowerCase().includes(regex) ||
        el1?.currency?.toLowerCase().includes(regex) ||
        el1?.sessionId?.toLowerCase().includes(regex) ||
        el1?.subject?.toLowerCase().includes(regex) ||
        el1?.type?.toLowerCase().includes(regex) ||
        el1?.work_status?.toLowerCase().includes(regex)
      ) {
        upcommingArray.push(el1);
        
        console.log({ upcommingArray });
      }
    });
    props.setUpcomingAr(upcommingArray);
  };


return(
  <Box {...props}>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Sessions
      </Typography>
      {/* <Box sx={{ m: 1 }}>
        <Button
          startIcon={(<UploadIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          Import
        </Button>
        <Button
          startIcon={(<DownloadIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          Export
        </Button>
        <Button
          color="primary"
          variant="contained"
        >
          Add products
        </Button>
      </Box> */}
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              onChange={(e) => handleChange(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search product"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
)};
