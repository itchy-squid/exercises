import React from 'react';

const diff = (d1, d2) => {
    const t1 = d1.getTime();
    const t2 = d2.getTime();

    const inSeconds = (t2 - t1) / 1000;
    const inMinutes = inSeconds / 60;
    const inHours = inMinutes / 60;
    const inDays = inHours / 24;

    return {
        days: parseInt(inDays),
        hours: parseInt(inHours) % 24,
        minutes: parseInt(inMinutes) % 60,
        seconds: parseInt(inSeconds) % 60
    };
}

export const CountDowner = ({ date }) => {
    if (!date) {
        return <></>;
    }

    const parsedDate = new Date(date);

    const difference = diff(new Date(), parsedDate);
    return <>
        <p>{difference.days} days</p>
        <p>{difference.hours} hours</p>
        <p>{difference.minutes} minutes</p>
        <p>{difference.seconds} seconds</p>
    </>;
}