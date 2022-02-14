import { useEffect, useRef } from 'react';
import { Analytics, AnalyticsScreenEnum, AnalyticsTypeEnum } from '../services';

export function useAnalytics(screenName: AnalyticsScreenEnum) {
    const analytics = useRef(new Analytics());

    const handleLogEvent = (type: AnalyticsTypeEnum) => {
        analytics.current.logEvent(type);
    };

    useEffect(() => {
        // set screen name
        analytics.current?.setScreen(screenName);
    }, [analytics, screenName]);

    return handleLogEvent;
}
