import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  private items = [];

  @Get()
  findAll() {
    return this.items;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.items.find(item => item.id === id);
  }

  @Post()
  create(@Body() createItemDto: { id: string; name: string }) {
    this.items.push(createItemDto);
    return createItemDto;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateItemDto: { name: string }) {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.name = updateItemDto.name;
    }
    return item;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.items = this.items.filter(item => item.id !== id);
    return { deleted: true };
  }
}
