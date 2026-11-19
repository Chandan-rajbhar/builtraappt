import React from 'react';
import ScreenshotsModuleSlide from '../components/ScreenshotsModuleSlide';

const SLIDE9_SHOTS = [
  {
    src: '/assets/mm/hd/02-procurement-queue.png',
    alt: 'Builtraa Procurement Queue Dashboard',
  },
  {
    src: '/assets/mm/hd/03-rfq-quotations.png',
    alt: 'Builtraa Request for Quotation (RFQ) Dashboard',
  },
];

export default function Slide9(props) {
  return (
    <ScreenshotsModuleSlide
      slideNumber={9}
      shots={SLIDE9_SHOTS}
      {...props}
    />
  );
}
