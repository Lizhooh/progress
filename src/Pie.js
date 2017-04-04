import React from 'react';

const PI = 3.14159265;
const _p = { 'left': -180, 'right': 0, 'top': -90, 'bottom': 90 };

// pie chart
export default function Pie ({
    percent     = 0,
    strokeColor = '#2db7f5',
    trailColor  = '#D9D9D9',
    prefixCls   = 'rc-progress',
    style       = null,
    className   = null,
    gapPosition = 'top',
}) {
    return (
        <svg viewBox="0 0 64 64" className="test-svg"
            style={{
                transform: `rotate(${_p[gapPosition] || -90}deg)`,
                backgroundColor: trailColor,
                borderRadius: '50%',
                ...style,
            }}
            className={`${prefixCls}-pie ${className}`}
            >
            <circle r="32" cx="32" cy="32" className="test-circle"
                style={{
                    fill: trailColor,
                    stroke: strokeColor,
                    strokeWidth: 64 * 100 / 100,
                    strokeDasharray: `${percent / 100 * PI * 64} ${PI * 64}`,
                    strokeDashoffset: 0,
                    transition: `
                        stroke-dashoffset 0.3s ease 0s,
                        stroke-dasharray 0.3s ease 0s, stroke 0.3s
                    `,
                }}
                />
        </svg>
    );
};
