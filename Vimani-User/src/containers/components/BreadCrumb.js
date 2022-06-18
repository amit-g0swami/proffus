import React from 'react';
import '../style.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function BreadCrumb(props) {

    return (
        <div>
            <Breadcrumbs className='text3' style={{fontWeight:'bold'}}  separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb">
                  {
                      props.data.map((row,index)=>(
                         <>
                         {
                            index==props.data.length?
                            <Typography className='text3' style={{fontWeight:'bold'}}  key="3" color="text.primary">{row.label}</Typography>
                            :
                            <Link  underline="hover" color="text.primary" key="1"  href={row.route} >{row.label}</Link>
                         }
                         </>
                      ))
                  }
            </Breadcrumbs>   
        </div>
    )
}

export default BreadCrumb
