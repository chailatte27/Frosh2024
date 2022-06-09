import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogPost } from 'src/entities/blogPost.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(BlogPost) private postRepository: Repository<BlogPost>,
  ) {}

  findAll(): Promise<BlogPost[]> {
    return this.postRepository.find();
  }

  create(post: BlogPost): Promise<BlogPost> {
    return this.postRepository.save(post);
  }
}
