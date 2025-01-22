import { PhingerCursor } from '@cursorify/cursors';
import { CursorifyProvider } from '@cursorify/react';

export default function CustomCursor({ children }) {
  return (
    (navigator.userAgent.toLowerCase().includes('firefox')) ?
      <>
        {children}
      </>
      :
      <CursorifyProvider
        breakpoint={776}
        cursor={<PhingerCursor />}
        visibleDefaultCursor={false}
      >
        {children}
      </CursorifyProvider>
  )
}