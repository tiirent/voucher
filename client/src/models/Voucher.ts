export class Voucher {
  id: string;
  userId: string;
  title: string;
  description: string;
  expiryDate: string;
  theme: {
    color: string;
    emoji: string;
  };
  recipient: string;

  constructor() {
    this.id = '';
    this.userId = '';
    this.title = '';
    this.description = '';
    this.expiryDate = '';
    this.theme = { color: '#64A9AF', emoji: '🎁' };
    this.recipient = '';
  }

  toSupabaseObject(userId?: string): object {
    return {
      user_id: userId ?? null,  // This should be set dynamically, e.g., from the authenticated user; defaults to null if not provided
      title: this.title,
      description: this.description,
      expiry_date: this.expiryDate ? this.expiryDate : null,
      theme_color: this.theme.color,
      theme_emoji: this.theme.emoji,
      recipient: this.recipient
    };
  }

  static fromSupabaseObject(data: any): Voucher {
    const voucher = new Voucher();
    voucher.id = data.id || '';
    voucher.userId = data.user_id || '';
    voucher.title = data.title || '';
    voucher.description = data.description || '';
    voucher.expiryDate = data.expiry_date || '';
    voucher.theme = { color: data.theme_color || '#64A9AF', emoji: data.theme_emoji || '🎁' };
    voucher.recipient = data.recipient || '';
    return voucher;
  }
} 