import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private BASEURL = 'http://localhost:8080/';
  private ENDPOINTS = {
    POSTS: "posts",
    POSTS_BY_USER: "posts/userposts",
    DELETE_POST: "posts/delete",
    UPDATE_POST: "posts/update",
    NEW_POST: "posts/add"
  }

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${this.BASEURL + this.ENDPOINTS.POSTS}`
    )
  }

  getPostsByAuthorId(id: any): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${this.BASEURL + this.ENDPOINTS.POSTS_BY_USER}/${id}`
    )
  }

  createPost(data: Post): Observable<Post> {
    return this.http.post<Post>(
      `${this.BASEURL + this.ENDPOINTS.NEW_POST}`, data
    )
  }

  deletePost(id: any): Observable<Post> {
    return this.http.delete<Post>(
      `${this.BASEURL + this.ENDPOINTS.DELETE_POST}/${id}`
    )
  }

  updatePost(id: any): Observable<Post> {
    return this.http.delete<Post>(
      `${this.BASEURL + this.ENDPOINTS.UPDATE_POST}/${id}`
    )
  }
}