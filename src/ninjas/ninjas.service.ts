import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

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

  createNinja(ninja: CreateNinjaDto) {
    const newNinja = {
      ...ninja,
      id: Date.now(),
    };
    this.ninjas.push(newNinja);
  }

  updateNinja(id: number, updateNinja: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, ...updateNinja };
      }
      return ninja;
    });
    return this.getOneNinja(id);
  }

  removeNinja(id: number) {
    const removedNinja = this.getOneNinja(id);
    this.ninjas = this.ninjas.filter((ninja) => ninja.id != id);
    return removedNinja;
  }
}
