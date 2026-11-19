import React from 'react';
import ScreenshotsModuleSlide from '../components/ScreenshotsModuleSlide';

const SLIDE12_SHOTS = [
  {
    src: '/assets/mm/hd/08-inventory.png',
    alt: 'Builtraa Inventory & Stock Management Dashboard',
  },
  {
    src: '/assets/mm/hd/11-asset-list.png',
    alt: 'Builtraa Asset List Machinery Dashboard',
  },
];

export default function Slide12(props) {
  return (
    <ScreenshotsModuleSlide
      slideNumber={12}
      shots={SLIDE12_SHOTS}
      {...props}
    />
  );
}
