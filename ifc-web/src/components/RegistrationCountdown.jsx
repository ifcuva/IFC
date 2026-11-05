import { useEffect, useState } from 'react';
import './RegistrationCountdown.css';

const REGISTRATION_DEADLINE = new Date('2026-12-08T23:59:00-05:00');

function getTimeRemaining() {
  const total = Math.max(0, REGISTRATION_DEADLINE.getTime() - Date.now());

  return {
    total,
    days: Math.floor(total / 86_400_000),
    hours: Math.floor((total / 3_600_000) % 24),
    minutes: Math.floor((total / 60_000) % 60),
    seconds: Math.floor((total / 1_000) % 60),
  };
}

const units = [
  ['days', 'Days'],
  ['hours', 'Hours'],
  ['minutes', 'Minutes'],
  ['seconds', 'Seconds'],
];

export default function RegistrationCountdown({ theme = 'light' }) {
  const [remaining, setRemaining] = useState(getTimeRemaining);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRemaining(getTimeRemaining());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  if (remaining.total === 0) {
    return (
      <div className={`registration-countdown registration-countdown--${theme}`}>
        <p className="registration-countdown__deadline">Rush registration is closed.</p>
      </div>
    );
  }

  return (
    <div
      className={`registration-countdown registration-countdown--${theme}`}
      role="timer"
      aria-label={`${remaining.days} days, ${remaining.hours} hours, ${remaining.minutes} minutes, and ${remaining.seconds} seconds until rush registration closes`}
    >
      <p className="registration-countdown__deadline">
        Registration closes Tuesday, Dec. 8 at 11:59 p.m. ET
      </p>
      <div className="registration-countdown__units" aria-hidden="true">
        {units.map(([key, label]) => (
          <div className="registration-countdown__unit" key={key}>
            <span className="registration-countdown__value">
              {String(remaining[key]).padStart(2, '0')}
            </span>
            <span className="registration-countdown__label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
