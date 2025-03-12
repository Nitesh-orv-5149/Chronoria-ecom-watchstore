import React, { useEffect } from 'react';

const FullscreenPremiumBackground = ({ children }) => {
  // Apply fullscreen styles to the body and html elements when component mounts
  useEffect(() => {
    // Save original styles
    const originalBodyStyle = document.body.style.cssText;
    const originalHtmlStyle = document.documentElement.style.cssText;
    
    // Apply fullscreen styles
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.width = '100vw';
    document.documentElement.style.height = '100vh';
    document.documentElement.style.width = '100vw';
    
    // Cleanup function to restore original styles
    return () => {
      document.body.style.cssText = originalBodyStyle;
      document.documentElement.style.cssText = originalHtmlStyle;
    };
  }, []);

  // Styling for the background animation
  const styles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#050520', // Dark blue background
      zIndex: -1, // Keep background behind content
    },
    svgRow: {
      position: 'absolute',
      display: 'flex',
      transform: 'rotate(-15deg)',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
    },
    svgItem: {
      margin: '20px',
      opacity: '0.15', // Low opacity for subtle effect
    },
    contentWrapper: {
      position: 'relative',
      width: '100vw',
      height: '100vh',
      zIndex: 10,
    },
  };

  // Animation keyframes defined as JavaScript objects for JSX
  const keyframes = {
    scrollLeftToRight: `
      @keyframes scrollLeftToRight {
        from { transform: translateX(-20%) rotate(-15deg); }
        to { transform: translateX(100%) rotate(-15deg); }
      }
    `,
    scrollRightToLeft: `
      @keyframes scrollRightToLeft {
        from { transform: translateX(100%) rotate(-15deg); }
        to { transform: translateX(-50%) rotate(-15deg); }
      }
    `,
  };

  // Row-specific styles with animations
  const row1Style = {
    ...styles.svgRow,
    animation: 'scrollLeftToRight 30s linear infinite',
    top: '-100px',
    left: '-100px',
  };

  const row2Style = {
    ...styles.svgRow,
    animation: 'scrollRightToLeft 25s linear infinite',
    top: '100px',
    left: '-200px',
  };

  const row3Style = {
    ...styles.svgRow,
    animation: 'scrollLeftToRight 20s linear infinite',
    top: '300px',
    left: '-300px',
  };

  const row4Style = {
    ...styles.svgRow,
    animation: 'scrollRightToLeft 35s linear infinite',
    top: '500px',
    left: '-400px',
  };

  const row5Style = {
    ...styles.svgRow,
    animation: 'scrollLeftToRight 28s linear infinite',
    top: '700px',
    left: '-200px',
  };

  const row6Style = {
    ...styles.svgRow,
    animation: 'scrollRightToLeft 32s linear infinite',
    top: '-300px',
    left: '-100px',
  };

  // SVG components for premium look
  const SvgCircles = () => (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="40" fill="url(#gradient1)" />
      <circle cx="50" cy="50" r="30" fill="#2D3748" fillOpacity="0.7" />
      <circle cx="50" cy="50" r="20" fill="#6366F1" fillOpacity="0.5" />
    </svg>
  );

  const SvgSquares = () => (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="80" height="80" rx="5" fill="url(#gradient2)" />
      <rect x="20" y="20" width="60" height="60" rx="3" fill="#2D3748" fillOpacity="0.7" />
      <rect x="30" y="30" width="40" height="40" rx="2" fill="#10B981" fillOpacity="0.5" />
    </svg>
  );

  const SvgTriangles = () => (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <polygon points="50,10 90,90 10,90" fill="url(#gradient3)" />
      <polygon points="50,20 80,80 20,80" fill="#2D3748" fillOpacity="0.7" />
      <polygon points="50,30 70,70 30,70" fill="#EC4899" fillOpacity="0.5" />
    </svg>
  );

  const SvgWaves = () => (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <path d="M20,50 Q50,20 80,50 T140,50" stroke="url(#gradient4)" strokeWidth="5" fill="none" />
      <path d="M20,60 Q50,30 80,60 T140,60" stroke="#2D3748" strokeWidth="5" fill="none" strokeOpacity="0.7" />
      <path d="M20,70 Q50,40 80,70 T140,70" stroke="#3B82F6" strokeWidth="5" fill="none" strokeOpacity="0.5" />
    </svg>
  );

  const SvgDiamond = () => (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
      </defs>
      <polygon points="50,10 10,50 50,90 90,50" fill="url(#gradient5)" />
      <polygon points="50,20 20,50 50,80 80,50" fill="#2D3748" fillOpacity="0.7" />
      <polygon points="50,30 30,50 50,70 70,50" fill="#F59E0B" fillOpacity="0.5" />
    </svg>
  );

  const SvgHexagon = () => (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="url(#gradient6)" />
      <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="#2D3748" fillOpacity="0.7" />
      <polygon points="50,30 70,40 70,60 50,70 30,60 30,40" fill="#8B5CF6" fillOpacity="0.5" />
    </svg>
  );

  return (
    <>
      {/* Background container with SVG animations */}
      <div style={styles.container}>
        {/* Inject keyframes */}
        <style>
          {keyframes.scrollLeftToRight}
          {keyframes.scrollRightToLeft}
        </style>

        {/* Row 1: Left to Right */}
        <div style={row1Style}>
          <div style={styles.svgItem}><SvgCircles /></div>
          <div style={styles.svgItem}><SvgSquares /></div>
          <div style={styles.svgItem}><SvgTriangles /></div>
          <div style={styles.svgItem}><SvgWaves /></div>
          <div style={styles.svgItem}><SvgDiamond /></div>
          <div style={styles.svgItem}><SvgHexagon /></div>
          {/* Duplicated for continuous scrolling */}
          <div style={styles.svgItem}><SvgCircles /></div>
          <div style={styles.svgItem}><SvgSquares /></div>
          <div style={styles.svgItem}><SvgTriangles /></div>
          <div style={styles.svgItem}><SvgWaves /></div>
          <div style={styles.svgItem}><SvgDiamond /></div>
          <div style={styles.svgItem}><SvgHexagon /></div>
        </div>

        {/* Row 2: Right to Left */}
        <div style={row2Style}>
          <div style={styles.svgItem}><SvgHexagon /></div>
          <div style={styles.svgItem}><SvgDiamond /></div>
          <div style={styles.svgItem}><SvgWaves /></div>
          <div style={styles.svgItem}><SvgTriangles /></div>
          <div style={styles.svgItem}><SvgSquares /></div>
          <div style={styles.svgItem}><SvgCircles /></div>
          {/* Duplicated for continuous scrolling */}
          <div style={styles.svgItem}><SvgHexagon /></div>
          <div style={styles.svgItem}><SvgDiamond /></div>
          <div style={styles.svgItem}><SvgWaves /></div>
          <div style={styles.svgItem}><SvgTriangles /></div>
          <div style={styles.svgItem}><SvgSquares /></div>
          <div style={styles.svgItem}><SvgCircles /></div>
        </div>

        {/* Row 3: Left to Right */}
        <div style={row3Style}>
          <div style={styles.svgItem}><SvgSquares /></div>
          <div style={styles.svgItem}><SvgCircles /></div>
          <div style={styles.svgItem}><SvgHexagon /></div>
          <div style={styles.svgItem}><SvgTriangles /></div>
          <div style={styles.svgItem}><SvgWaves /></div>
          <div style={styles.svgItem}><SvgDiamond /></div>
          {/* Duplicated for continuous scrolling */}
          <div style={styles.svgItem}><SvgSquares /></div>
          <div style={styles.svgItem}><SvgCircles /></div>
          <div style={styles.svgItem}><SvgHexagon /></div>
          <div style={styles.svgItem}><SvgTriangles /></div>
          <div style={styles.svgItem}><SvgWaves /></div>
          <div style={styles.svgItem}><SvgDiamond /></div>
        </div>

        {/* Row 4: Right to Left */}
        <div style={row4Style}>
          <div style={styles.svgItem}><SvgTriangles /></div>
          <div style={styles.svgItem}><SvgDiamond /></div>
          <div style={styles.svgItem}><SvgCircles /></div>
          <div style={styles.svgItem}><SvgSquares /></div>
          <div style={styles.svgItem}><SvgWaves /></div>
          <div style={styles.svgItem}><SvgHexagon /></div>
          {/* Duplicated for continuous scrolling */}
          <div style={styles.svgItem}><SvgTriangles /></div>
          <div style={styles.svgItem}><SvgDiamond /></div>
          <div style={styles.svgItem}><SvgCircles /></div>
          <div style={styles.svgItem}><SvgSquares /></div>
          <div style={styles.svgItem}><SvgWaves /></div>
          <div style={styles.svgItem}><SvgHexagon /></div>
        </div>

        {/* Row 5: Left to Right - Added for more fullscreen coverage */}
        <div style={row5Style}>
          <div style={styles.svgItem}><SvgDiamond /></div>
          <div style={styles.svgItem}><SvgWaves /></div>
          <div style={styles.svgItem}><SvgCircles /></div>
          <div style={styles.svgItem}><SvgHexagon /></div>
          <div style={styles.svgItem}><SvgTriangles /></div>
          <div style={styles.svgItem}><SvgSquares /></div>
          {/* Duplicated for continuous scrolling */}
          <div style={styles.svgItem}><SvgDiamond /></div>
          <div style={styles.svgItem}><SvgWaves /></div>
          <div style={styles.svgItem}><SvgCircles /></div>
          <div style={styles.svgItem}><SvgHexagon /></div>
          <div style={styles.svgItem}><SvgTriangles /></div>
          <div style={styles.svgItem}><SvgSquares /></div>
        </div>

        {/* Row 6: Right to Left - Added for top coverage */}
        <div style={row6Style}>
          <div style={styles.svgItem}><SvgHexagon /></div>
          <div style={styles.svgItem}><SvgTriangles /></div>
          <div style={styles.svgItem}><SvgDiamond /></div>
          <div style={styles.svgItem}><SvgWaves /></div>
          <div style={styles.svgItem}><SvgCircles /></div>
          <div style={styles.svgItem}><SvgSquares /></div>
          {/* Duplicated for continuous scrolling */}
          <div style={styles.svgItem}><SvgHexagon /></div>
          <div style={styles.svgItem}><SvgTriangles /></div>
          <div style={styles.svgItem}><SvgDiamond /></div>
          <div style={styles.svgItem}><SvgWaves /></div>
          <div style={styles.svgItem}><SvgCircles /></div>
          <div style={styles.svgItem}><SvgSquares /></div>
        </div>
      </div>

      {/* Wrapper for user content that will appear above the background */}
      <div style={styles.contentWrapper}>
        {children}
      </div>
    </>
  );
};

// Example usage:
// <FullscreenPremiumBackground>
//   <div>Your content here</div>
// </FullscreenPremiumBackground>

export default FullscreenPremiumBackground;