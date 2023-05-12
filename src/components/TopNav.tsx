import React from 'react';
import MarcoWordmarkWhite1Image from '../assets/images/topnav_marco_wordmark_white_1.png';
import { styled } from '@mui/material/styles';

const TopNav1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(13, 13, 13, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `80px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
}));

const Rectangle4: any = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 0.15)`,
  width: `1440px`,
  height: `1px`,
  position: `absolute`,
  left: `0px`,
  top: `79px`,
});

const Menu: any = styled('div')({
    display: 'flex',
    position: 'relative',
    isolation: 'isolate',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '0px',
    boxSizing: 'border-box',
    width: '24px',
    height: '14px',
    left: 'calc(97.5% - 24px)',
    // 90% - width of the menu component
    top: '33px',
});

const Rectangle2: any = styled('div')({
  backgroundColor: `rgba(196, 196, 196, 1)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  width: `16px`,
  height: `2px`,
  position: `absolute`,
  left: `8px`,
  top: `0px`,
});

const Rectangle3: any = styled('div')({
  backgroundColor: `rgba(196, 196, 196, 1)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `2px`,
  position: `absolute`,
  left: `0px`,
  top: `6px`,
});

const Rectangle41: any = styled('div')({
  backgroundColor: `rgba(196, 196, 196, 1)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  width: `16px`,
  height: `2px`,
  position: `absolute`,
  left: `8px`,
  top: `12px`,
});

const MarcoWordmarkWhite1: any = styled('img')({
  height: `16px`,
  width: `89.9px`,
  position: `absolute`,
  left: `32px`,
  top: `32px`,
});

function TopNav(): any {
  return (
    <TopNav1>
      <Rectangle4></Rectangle4>
      <Menu>
        <Rectangle2></Rectangle2>
        <Rectangle3></Rectangle3>
        <Rectangle41></Rectangle41>
      </Menu>
      <MarcoWordmarkWhite1
        src={MarcoWordmarkWhite1Image}
        loading="lazy"
        alt={'marco_wordmark_white 1'}
      />
    </TopNav1>
  );
}

export default TopNav;
