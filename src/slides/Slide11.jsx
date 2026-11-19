import React from 'react';
import ScreenshotsModuleSlide from '../components/ScreenshotsModuleSlide';

const SLIDE11_SHOTS = [
  {
    src: '/assets/mm/hd/05-deliveries.png',
    alt: 'Builtraa Deliveries & Shipments Dashboard',
  },
  {
    src: '/assets/mm/hd/07-receipts-grn.png',
    alt: 'Builtraa Store Keeper / GRN Management Dashboard',
  },
];

export default function Slide11(props) {
  return (
    <ScreenshotsModuleSlide
      slideNumber={11}
      shots={SLIDE11_SHOTS}
      {...props}
    />
  );
}
