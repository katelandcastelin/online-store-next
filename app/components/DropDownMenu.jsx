import * as React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const StyledMenuIcon = styled(MenuIcon)`
  color: #555;
`;

const StyledMenu = styled(Menu)`
  && {
    
  }
`;

const StyledMenuItem = styled(MenuItem)`
  && {
    font-size: large;
    font-weight: 100;
    margin: 10px;
  }
`;

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <StyledMenuIcon fontSize='large' />
      </Button>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <StyledMenuItem onClick={handleClose}>
          <a href='/corsets'>
            Corsets
          </a>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <a href='/skirts'>
            Skirts
          </a>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <a href='/order'>
            Order
          </a>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <a href='/about'>
            About
          </a>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
