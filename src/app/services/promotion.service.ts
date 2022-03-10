import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return new Promise(
      resolve => {
        //simulate server latency with 3 sec delay
        setTimeout(() => resolve(PROMOTIONS), 3000)
      });
  }

  getPromotion(id: string): Promise<Promotion> {
    return new Promise(
      resolve => {
        //simulate server latency with 3 sec delay
        setTimeout(() => resolve(PROMOTIONS.filter((Promotion) => (Promotion.id == id))[0]), 3000)
      });
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return new Promise(
      resolve => {
        //simulate server latency with 3 sec delay
        setTimeout(() => resolve(PROMOTIONS.filter((Promotion) => Promotion.featured)[0]), 3000)
      });
  }
}
