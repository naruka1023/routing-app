import { Component, Input, OnInit } from '@angular/core';
import { albumCard } from '../model/song.model';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {

  constructor() { }
  @Input() albumCard!: albumCard
  ngOnInit(): void {
  }

}
