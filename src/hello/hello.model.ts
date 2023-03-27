export interface Hello {
  id: string;
  greetingText: string;
  status: HelloStatus;
}

export enum HelloStatus {
  PUBILC = 'PUBILC',
  PRIVATE = 'PRIVATE',
}
