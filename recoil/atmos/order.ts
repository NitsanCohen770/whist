import { atom } from 'recoil';
import { OrderItem } from '../../shared/interface';

export const orderState = atom({
  key: 'order',
  default: [] as OrderItem[],
});
