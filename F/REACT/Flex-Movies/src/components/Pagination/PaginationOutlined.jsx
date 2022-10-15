import React from 'react'
import Pagination from '@mui/material/Pagination';


const PaginationOutlined = ({ setPage, numOfPages }) => {

  const handleToggle = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div style={{
      width: '100 %',
      display: 'flex',
      justifyContent: 'center',
    }}>

      <Pagination count={numOfPages} onChange={(elem) => handleToggle(elem.target.textContent)} color="secondary" size='large' hidePrevButton hideNextButton />


    </div>
  )
}

export default PaginationOutlined