import { Injectable } from '@angular/core';
import {Albums} from "./fakes";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Album, Photo} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  j_url='https://jsonplaceholder.typicode.com';
  constructor(private client: HttpClient) { }
  // getAlbums(){
  //   return of(Albums) ;
  // }
  // getAlbum(id:number){
  //   const album = Albums.find((x)=>x.id===id);
  //   return of(album);
  // }
  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(`${this.j_url}/albums`)
  }
  getAlbum(id:number): Observable<Album>{
    return this.client.get<Album>(`${this.j_url}/albums/${id}`)
  }

  updateAlbum(album:Album):Observable<Album>{
    // @ts-ignore
    return this.client.put(`${this.j_url}/albums/${album.id}`,album);
  }
  addAlbum(album: Album):Observable<Album>{
    // @ts-ignore
    return this.client.album(`${this.j_url}/albums`, album)
  }

  deleteAlbum(id:number):Observable<any>{
    return this.client.delete(`${this.j_url}/albums/${id}`)
  }

  getAlbumPhotos(id: number): Observable<Photo[]>{
    // @ts-ignore
    return this.client.get<Photo[]>(`${this.j_url}/albums/${id}/photos`)
  }
}
