import { getEventsInLast24Hours, Event } from "./question6";

describe('User Events in Last 24 Hours', () => {
    beforeEach(() => {
        // Mock current time to a fixed date for consistent testing
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2024-01-15T12:00:00Z'));
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test.only('should return empty object when no events exist', () => {
        const events: Event[] = [];
        const result = getEventsInLast24Hours(events);

        expect(result).toEqual({});
    });
    test.only('should count single event for a user', () => {
        const now = Date.now();
        const events: Event[] = [
            { userId: 'user1', timestamp: now }
        ];

        const result = getEventsInLast24Hours(events);

        expect(result).toEqual({ user1: 1 });
    });

    test.only('should count multiple events for same user', () => {
        const now = Date.now();
        const events: Event[] = [
            { userId: 'user1', timestamp: now },
            { userId: 'user1', timestamp: now - 1000 },
            { userId: 'user1', timestamp: now - 2000 }
        ];

        const result = getEventsInLast24Hours(events);

        expect(result).toEqual({ user1: 3 });
    });

    test.only('should count events for multiple different users', () => {
        const now = Date.now();
        const events: Event[] = [
            { userId: 'user1', timestamp: now },
            { userId: 'user2', timestamp: now - 1000 },
            { userId: 'user1', timestamp: now - 2000 },
            { userId: 'user3', timestamp: now - 3000 },
            { userId: 'user2', timestamp: now - 4000 }
        ];

        const result = getEventsInLast24Hours(events);

        expect(result).toEqual({
            user1: 2,
            user2: 2,
            user3: 1
        });
    });

    test.only('should exclude events older than 24 hours', () => {
        const now = Date.now();
        const twentyFiveHoursAgo = now - 25 * 60 * 60 * 1000;

        const events: Event[] = [
            { userId: 'user1', timestamp: now },
            { userId: 'user1', timestamp: twentyFiveHoursAgo }
        ];

        const result = getEventsInLast24Hours(events);

        expect(result).toEqual({ user1: 1 });
    });

    test.only('should include events exactly at 24 hours boundary', () => {
        const now = Date.now();
        const exactlyTwentyFourHoursAgo = now - 24 * 60 * 60 * 1000;

        const events: Event[] = [
            { userId: 'user1', timestamp: exactlyTwentyFourHoursAgo }
        ];

        const result = getEventsInLast24Hours(events);

        expect(result).toEqual({ user1: 1 });
    });

    test.only('should not include events in the future', () => {
        const now = Date.now();
        const future = now + 1000;

        const events: Event[] = [
            { userId: 'user1', timestamp: now },
            { userId: 'user1', timestamp: future }
        ];

        const result = getEventsInLast24Hours(events);

        expect(result).toEqual({ user1: 1 });
    });

    test('should handle mix of old and recent events for same user', () => {
        const now = Date.now();
        const twentyThreeHoursAgo = now - 23 * 60 * 60 * 1000;
        const twentyFiveHoursAgo = now - 25 * 60 * 60 * 1000;
        const fortyEightHoursAgo = now - 48 * 60 * 60 * 1000;

        const events: Event[] = [
            { userId: 'user1', timestamp: now },
            { userId: 'user1', timestamp: twentyThreeHoursAgo },
            { userId: 'user1', timestamp: twentyFiveHoursAgo },
            { userId: 'user1', timestamp: fortyEightHoursAgo }
        ];

        const result = getEventsInLast24Hours(events);

        expect(result).toEqual({ user1: 2 });
    });

    test('should not include users with only old events', () => {
        const now = Date.now();
        const thirtyHoursAgo = now - 30 * 60 * 60 * 1000;

        const events: Event[] = [
            { userId: 'user1', timestamp: now },
            { userId: 'user2', timestamp: thirtyHoursAgo }
        ];

        const result = getEventsInLast24Hours(events);

        expect(result).toEqual({ user1: 1 });
        expect(result.user2).toBeUndefined();
    });

    test('should handle large number of events efficiently', () => {
        const now = Date.now();
        const events: Event[] = Array.from({ length: 10000 }, (_, i) => ({
            userId: `user${i % 100}`,
            timestamp: now - (i * 1000)
        }));

        const result = getEventsInLast24Hours(events);

        expect(Object.keys(result).length).toBeGreaterThan(0);
    });

    test('should handle special characters in userId', () => {
        const now = Date.now();
        const events: Event[] = [
            { userId: 'user@example.com', timestamp: now },
            { userId: 'user-123_test', timestamp: now },
            { userId: 'user with spaces', timestamp: now }
        ];

        const result = getEventsInLast24Hours(events);

        expect(result).toEqual({
            'user@example.com': 1,
            'user-123_test': 1,
            'user with spaces': 1
        });
    });

    test('should handle events at edge of time window', () => {
        const now = Date.now();
        const justWithinWindow = now - (24 * 60 * 60 * 1000 - 1);
        const justOutsideWindow = now - (24 * 60 * 60 * 1000 + 1);

        const events: Event[] = [
            { userId: 'user1', timestamp: justWithinWindow },
            { userId: 'user2', timestamp: justOutsideWindow }
        ];

        const result = getEventsInLast24Hours(events);

        expect(result).toEqual({ user1: 1 });
    });


})