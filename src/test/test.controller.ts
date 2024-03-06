import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TestEntity } from './entities/test.entity';
@Controller('test')
@ApiTags('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  @ApiCreatedResponse({ type: TestEntity })
  create(@Body() createTestDto: CreateTestDto) {
    return this.testService.create(createTestDto);
  }

  @Get()
  @ApiOkResponse({ type: TestEntity, isArray: true })
  findAll() {
    return this.testService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TestEntity })
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TestEntity })
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testService.update(+id, updateTestDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TestEntity })
  remove(@Param('id') id: string) {
    return this.testService.remove(+id);
  }
}
