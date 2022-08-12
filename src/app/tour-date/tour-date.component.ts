import { Component, OnInit } from '@angular/core';
import { Dates } from '../model/tour.model';

@Component({
  selector: 'app-tour-date',
  templateUrl: './tour-date.component.html',
  styleUrls: ['./tour-date.component.css']
})
export class TourDateComponent implements OnInit {

  constructor() { }
  datesList : Dates[] = [
    {
      title: "Hear too Fest",
      date: "22/05/2022",
      country: "Bangkok, Thailand",
      venue: "Brownstone",
      poster: "hearTooFest.jpg",
    },
    {
      title: "Ground to the Bone",
      date: "22/07/2022",
      country: "Bangkok, Thailand",
      venue: "Jam",
      poster: "groundToTheBone.jpeg",
    },
    {
      title: "Siamese Crusties Live Gig Vol 3",
      date: "21/03/2020",
      country: "Bangkok, Thailand",
      venue: "Overstay",
      poster: "siameseCrusties.jpg",
    },
    {
      title: "Murder Bizkitz live in Vietnam",
      date: "04/01/2020",
      country: "Hanoi, Vietnam",
      venue: "The Hidden Music Club",
      poster: "liveInVietnam.jpg",
    },
    {
      title: "Murder Bizkitz live in Myanmar",
      date: "02/03/2019",
      country: "Yangon, Myanmar",
      venue: "The Pirate Bar",
      poster: "liveInYangon.jpg",
    },
    {
      title: "Hardcore is in my Blood",
      date: "02/02/2019",
      country: "Bangkok, Thailand",
      venue: "Brownstone",
      poster: "hardcore-is-in-my-blood.jpg",
    },
    {
      title: "Meat Grinder",
      date: "17/11/2018",
      country: "Bangkok, Thailand",
      venue: "Immortal Bar",
      poster: "firstPunkCrustGrinder.jpg",
    },
    {
      title: "Punk Crust Grinder 2",
      date: "05/03/2018",
      country: "Bangkok, Thailand",
      venue: "Speakerbox",
      poster: "punkCrustGrinder2.jpg",
    },
    {
      title: "the Dumpies Live",
      date: "02/03/2018",
      country: "Bangkok, Thailand",
      venue: "Overstay",
      poster: "theDumpiesLive.jpg",
    },
    {
      title: "After Show Jam",
      date: "10/09/2016",
      country: "Bangkok, Thailand",
      venue: "Overstay",
      poster: "afterShowJam.jpg",
    },
    {
      title: "Live at Immortal Bar",
      date: "27/08/2016",
      country: "Bangkok, Thailand",
      venue: "Immortal Bar",
      poster: "example.jpg",
    },
    {
      title: "Bangkok Hardcore Homicide",
      date: "20/02/2016",
      country: "Bangkok, Thailand",
      venue: "Immortal Bar",
      poster: "bangkok-hardcore-homocide_immortal.jpg",
    },
  ]
  ngOnInit(): void {
  }

}
