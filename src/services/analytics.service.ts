import { initializeApp } from 'firebase/app';
import {
    Analytics as FirebaseAnalytics,
    getAnalytics,
    logEvent,
    setCurrentScreen,
} from 'firebase/analytics';
import { firebaseConfig } from '../config';

export enum AnalyticsScreenEnum {
    INDEX = 'index',
    ONBOARDING = 'onboading',
    LOADING = 'loading',
    CLASSROOM = 'classroom',
    USER_STYLING = 'user_styling',
    MESSAGE = 'message',
    ETC = 'ETC',
}
export enum AnalyticsTypeEnum {
    ENTER_SCREEN = 'ENTER_SCREEN',
    CLICK_FOR_REGISTER = 'CLICK_FOR_REGISTER',
    SELECT_IMAGE = 'SELECT_IMAGE',
    SUBMIT_FOR_REGISTER = 'SUBMIT_FOR_REGISTER',
    OPEN_POST = 'OPEN_POST',
    OPEN_SIDEBAR = 'OPEN_SIDEBAR',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(`${app.name} project has been initialized`);

export class Analytics {
    private readonly analytics: FirebaseAnalytics;

    constructor() {
        this.analytics = getAnalytics();
    }

    public setScreen(screen: AnalyticsScreenEnum) {
        setCurrentScreen(this.analytics, screen);
    }

    public logEvent(type: AnalyticsTypeEnum) {
        logEvent(this.analytics, type);
    }
}
