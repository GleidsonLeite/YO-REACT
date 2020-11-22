import React, { useState } from 'react';

import './styles.css';

interface TooltipProps {
  delay?: number;
  direction?: string;
  content: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  delay,
  direction,
  content,
  children,
}) => {
  let timeout: number;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {children}
      {active && (
        <div className={`Tooltip-Tip ${direction || 'top'}`}>
          {/* Content */}
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
