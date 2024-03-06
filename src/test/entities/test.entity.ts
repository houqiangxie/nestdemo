import { ApiProperty } from '@nestjs/swagger';
// import { Test } from '@prisma/client';
// export class TestEntity implements Test{
export class TestEntity {
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty({ required: false, nullable: true })
    description: string | null;

    @ApiProperty()
    body: string;

    @ApiProperty()
    published: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

}
