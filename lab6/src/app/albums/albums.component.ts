import { Component, OnInit } from '@angular/core';

import {Albums} from "../fakes";
import {Album} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] | undefined;
  // @ts-ignore
  loaded: boolean;
  newAlbum:string |undefined;

  constructor(private albumsService: AlbumsService) {
    this.newAlbum='';
  }

  ngOnInit(): void {
    this.getAlbums();
  }
  getAlbums(){
    //@ts-ignore
    this.albumsService.getAlbums().subscribe((albums)=>{
      //@ts-ignore
      this.loaded=false;
      this.albums=albums;
      this.loaded=true;
    })
  }
  addAlbum(){
    const album={
      title: this.newAlbum
    };
    this.albumsService.addAlbum(album as Album).subscribe((album)=>{
      console.log(album);
      // @ts-ignore
      this.albums.unshift(album);
    })
  }
  deleteAlbum(id: number){
    //@ts-ignore
    this.albums=this.albums.filter((x)=>x.id!==id)
    this.albumsService.deleteAlbum(id).subscribe(()=>{
      console.log('deleted', id);
    })
  }
}
