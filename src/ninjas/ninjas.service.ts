import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'Naruto', age: 18 },
    { id: 1, name: 'Sasuke', age: 17 },
    { id: 2, name: 'Itachi', age: 18 },
    { id: 3, name: 'Minato', age: 17 },
  ];

  getNinjas(age?: number) {
    if (age) {
      return this.ninjas.filter((ninja) => ninja.age === age);
    }
    return this.ninjas;
  }
  getOneNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) throw new Error('Not found');
    else return ninja;
  }
}
