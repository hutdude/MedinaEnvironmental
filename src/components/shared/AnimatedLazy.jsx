import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

const AnimatedBackground = lazy(() => import('./AnimatedBackground'));

function LazyAnimation() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div>
      {!isLandingPage && (
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatedBackground />
        </Suspense>
      )}
    </div>
  );
}

export default LazyAnimation;