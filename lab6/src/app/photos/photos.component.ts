import { Component, OnInit } from '@angular/core';

import {AlbumsService} from "../albums.service";
import { Album ,Photo } from '../models';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  // @ts-ignore
  photos: Photo[];
  loaded: boolean | undefined;
  constructor(private route:ActivatedRoute,
              private  location: Location,
              private  albumsService: AlbumsService) {

  }

  ngOnInit(): void {
    this.getAlbumPhotos();
  }
  getAlbumPhotos(){
    this.route.paramMap.subscribe((params)=>{
      // @ts-ignore
      const id = +params.get('id');
      this.loaded=false;
      this.albumsService.getAlbumPhotos(id).subscribe((photos)=>{
        this.photos=photos;
        this.loaded=true;
      })
    })
  }
}
