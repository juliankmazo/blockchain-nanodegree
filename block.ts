import * as crypto from 'crypto-ts';

export class Block {
  constructor(data) {
    this.id = 0;
    this.nonce = 144444;
    this.body = data;
    this.hash = '';
  }
  id: number;
  nonce: number;
  body: {};
  hash: string;

  generateHash = async () => {
    const hash = await crypto.SHA256(JSON.stringify(this)).toString();
    this.hash = hash;
    return this;
  };
}
