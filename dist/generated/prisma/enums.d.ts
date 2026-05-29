export declare const Role: {
    readonly admin: "admin";
    readonly agent: "agent";
    readonly customer: "customer";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const TicketStatus: {
    readonly open: "open";
    readonly in_progress: "in_progress";
    readonly resolved: "resolved";
    readonly closed: "closed";
};
export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus];
export declare const TicketPriority: {
    readonly low: "low";
    readonly medium: "medium";
    readonly high: "high";
};
export type TicketPriority = (typeof TicketPriority)[keyof typeof TicketPriority];
