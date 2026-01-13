export type Event = {
    userId: string;
    timestamp: number; // unix timestamp in milliseconds
};

export function getEventsInLast24Hours(events: Event[]): Record<string, number> {

    const result: Record<string, number> = {};
    const cutoff = Date.now() - 24 * 60 * 60 * 1000;

    for (const event of events) {
        if (event.timestamp >= cutoff) {
            result[event.userId] = (result[event.userId] ?? 0) + 1;
        }
    }

    return result;

}