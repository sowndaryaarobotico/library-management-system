import { Controller, Get, Post, Body, Param, NotFoundException} from '@nestjs/common';
import { MemberService } from './member.service';
import { Member } from './member.entity';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  getAll(): Promise<Member[]> {
    return this.memberService.findAll();
  }

  @Get(':id')
async getOne(@Param('id') id: number): Promise<Member> {
  const member = await this.memberService.findOne(id);
  if (!member) {
    throw new NotFoundException(`Member with ID ${id} not found`);
  }
  return member;
}

  @Post()
  create(@Body() memberData: Partial<Member>): Promise<Member> {
    return this.memberService.create(memberData);
  }
}
