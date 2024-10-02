import React, { useEffect, useState } from 'react';

const TimeDisplay: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>('');

    // Function to update the current time
    const updateTime = () => {
        const now = new Date();
        const options = { hour: '2-digit', minute: '2-digit', timeZone: 'America/New_York' };
        setCurrentTime(now.toLocaleTimeString('en-US', options) + ' EST');
    };

    // Update time every minute
    useEffect(() => {
        updateTime();
        const interval = setInterval(updateTime, 6000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <span id="current-time">{currentTime}</span>
    );
};

export default TimeDisplay;
