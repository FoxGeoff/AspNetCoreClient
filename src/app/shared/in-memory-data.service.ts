import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Blog } from './../interface/blog';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const blogs: Blog[] = [
      { BlogId : 11, Url : "http://sample11.com" },
      { BlogId : 12, Url : "http://sample12.com" },
      { BlogId : 13, Url : "http://sample13.com" },
      { BlogId : 14, Url : "http://sample14.com" },
      { BlogId : 15, Url : "http://sample15.com" },
      { BlogId : 16, Url : "http://sample16.com" },
      { BlogId : 17, Url : "http://sample17.com" },
      { BlogId : 18, Url : "http://sample18.com" },
      { BlogId : 19, Url : "http://sample19.com" },
      { BlogId : 20, Url : "http://sample20.com" },
    ];
    return { blogs };
  }
}
