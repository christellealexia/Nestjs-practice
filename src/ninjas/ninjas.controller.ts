import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasservice: NinjasService) {}

  @Get()
  getNinjas(@Query('age') age: number) {
    // const service = new NinjasService();
    return this.ninjasservice.getNinjas(+age);
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return this.ninjasservice.getOneNinja(+id);
  }

  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updatedNinja: UpdateNinjaDto) {
    return this.ninjasservice.updateNinja(+id, updatedNinja);
  }

  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return this.ninjasservice.removeNinja(+id);
  }
  @Post()
  createNinja(@Body() NinjaDto: CreateNinjaDto) {
    return this.ninjasservice.createNinja(NinjaDto);
  }
}
