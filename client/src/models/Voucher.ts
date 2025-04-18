export class Voucher {
  title: string;
  description: string;
  expiryDate: string;
  theme: {
    color: string;
    emoji: string;
  };
  recipient: string;

  constructor() {
    this.title = '';
    this.description = '';
    this.expiryDate = '';
    this.theme = { color: '#64A9AF', emoji: '🎁' };
    this.recipient = '';
  }
} 