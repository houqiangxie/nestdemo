import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Injectable()
export class TestService {
  // constructor(private prisma: PrismaService) { }

  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }

  findAll() {
    // return this.prisma.article.findMany({ where: { published: true } });
    return `This action find all`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
