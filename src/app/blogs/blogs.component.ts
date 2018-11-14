import { Component, OnInit } from '@angular/core';
//
import { Blog } from './../interface/blog';
import { BlogService } from './../shared/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[]

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogs();
  }
  getBlogs(): void {
    this.blogService.getBlogs()
    .subscribe(blogs => this.blogs = blogs);
  }

}
