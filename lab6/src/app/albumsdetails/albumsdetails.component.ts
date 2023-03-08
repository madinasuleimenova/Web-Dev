import { Component, OnInit } from '@angular/core';
import {Album} from "../models";
import {ActivatedRoute} from "@angular/router";
import {Albums} from "../fakes";
import  {Location} from "@angular/common";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albumsdetails',
  templateUrl: './albumsdetails.component.html',
  styleUrls: ['./albumsdetails.component.css']
})
export class AlbumsdetailsComponent implements OnInit {
  // @ts-ignore
  album: Album ;

  // @ts-ignore
  loaded: boolean ;
  constructor(private route:ActivatedRoute,
              private  location: Location,
              private  albumsService: AlbumsService) { }

  ngOnInit(): void {
    // // @ts-ignore
    // const id = +this.route.snapshot.paramMap.get('id');
    //
    // // @ts-ignore
    // this.album= Albums.find((x)=>x.id===id);
    //})
    this.getAlbum();
  }
  getAlbum(){
    this.route.paramMap.subscribe((params)=>{
      // @ts-ignore
      const id = +params.get('id');
      this.loaded=false;
      this.albumsService.getAlbum(id).subscribe((album)=>{
        this.album=album;
        this.loaded=true;
      }) ;
    });
  }
  updateAlbum(){
    this.loaded=false;
    this.albumsService.updateAlbum(this.album).subscribe((album)=>{
      console.log(album);
      this.loaded=true;
    })

  }
  goBack(){

    this.location.back();
  }
}
