export interface Hello {
  id: string;
  greetingText: string;
  greetingDate: Date;
  status: HelloStatus;
}

export enum HelloStatus {
  PUBILC = 'PUBILC',
  PRIVATE = 'PRIVATE',
}
