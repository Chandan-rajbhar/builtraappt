import React from 'react';
import ScreenshotsModuleSlide from '../components/ScreenshotsModuleSlide';

const SLIDE10_SHOTS = [
  {
    src: '/assets/mm/hd/04-purchase-orders.png',
    alt: 'Builtraa Purchase Orders Dashboard',
  },
  {
    src: '/assets/mm/hd/10-vendors.png',
    alt: 'Builtraa Vendor & Supplier Management Dashboard',
  },
];

export default function Slide10(props) {
  return (
    <ScreenshotsModuleSlide
      slideNumber={10}
      shots={SLIDE10_SHOTS}
      {...props}
    />
  );
}
