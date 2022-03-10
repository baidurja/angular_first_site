import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return new Promise(
      resolve => {
        //simulate server latency with 1 sec delay
        setTimeout(() => resolve(LEADERS), 1000)
      });
  }

  getLeader(id: string): Promise<Leader> {
    return new Promise(
      resolve => {
        //simulate server latency with 1 sec delay
        setTimeout(() => resolve(LEADERS.filter((leader) => leader.id == id)[0]), 1000)
      });
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise(
      resolve => {
        //simulate server latency with 1 sec delay
        setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 1000)
      });
  }

}
