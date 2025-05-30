import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {}

  create(member: Partial<Member>): Promise<Member> {
    const newMember = this.memberRepository.create(member);
    return this.memberRepository.save(newMember);
  }

  findAll(): Promise<Member[]> {
    return this.memberRepository.find();
  }

  findOne(id: number): Promise<Member | null> {
    return this.memberRepository.findOneBy({ id });
  }

  async update(id: number, memberData: Partial<Member>): Promise<Member> {
    await this.memberRepository.update(id, memberData);
    return this.findOne(id) as Promise<Member>;
  }

  async remove(id: number): Promise<void> {
    await this.memberRepository.delete(id);
  }
}
