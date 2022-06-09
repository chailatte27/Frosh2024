import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogPost } from 'src/entities/blogPost.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAllPosts(): Promise<BlogPost[]> {
    return this.postService.findAll();
  }

  @Post()
  createPost(@Body() post: BlogPost): Promise<BlogPost> {
    return this.postService.create(post);
  }
}
