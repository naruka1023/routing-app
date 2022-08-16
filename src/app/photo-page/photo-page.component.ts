import { Component, OnInit } from '@angular/core';
import { photoSection } from '../model/photo.model';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.css']
})
export class PhotoPageComponent implements OnInit {
  
  constructor() { }
  
  photoSection: photoSection[] = [
    {
      name: 'Promotional Pictures',
      url: 'promoPictures',
      images: [
        '259323794_310355277758964_6181644638518223651_n.jpg',
        '35537306_285224932046977_7753080087188078592_n - Copy.jpeg',
        '46482464_1135404509951340_8211968514945187840_n - Copy.jpg',
        '81125715_1455831934575261_7468297616292315136_n.jpg',
        '81186264_1455832691241852_3552685127777648640_n.jpg',
        'approvedPic.jpg',
        'bio_2.jpg',
        'bio_3.jpeg',
        'bio_4.jpeg',
        'bio_5.jpeg',
        'bio_6.jpg',
        'bio_7.jpg',
        'latestlineup.jpg'
      ]
    },
    {
      name: 'Shows',
      url: 'shows',
      images: [
        '15965828_717998975025231_6840090640992966118_n.jpeg',
        '18268561_10154751469137695_6160391798821129402_n.jpg',
        '284932958_441361834658307_6694529257626529175_n.jpg',
        '295513290_485197396941417_8366166394216575137_n.jpg',
        '40408671_2146724355402754_4809561019952512466_n.jpg',
        '41818786_1095838420574616_588016318863638528_n.jpg',
        '41866062_1095838370574621_5931213058247491584_n.jpg',
        '41903800_1095838360574622_5804727529805709312_n.jpg',
        '46482464_1135404509951340_8211968514945187840_n (1).jpg',
        '46520247_1135404553284669_6773636220086910976_n.jpg',
        '51041762_2234881856772594_8353257932367855616_n.jpg',
        '51064545_1186636404828150_5460044743465500672_n.jpg',
        '51091449_1186636711494786_7708224247612571648_n.jpg',
        '51128964_2234882090105904_1672374129493278720_n.jpg',
        '51135384_1186636588161465_7754814300492922880_n.jpg',
        '51146945_1186636701494787_1407103892591738880_n.jpg',
        '51419434_1186636471494810_3556343933107699712_n.jpg',
        '51421307_1186636394828151_4365669668942249984_n.jpg',
        '51464794_1186636561494801_8078592926952718336_n.jpg',
        '51496043_410619266350838_2302744039985774592_n.jpg',
        '51777801_1186636501494807_432188475798716416_n.jpg',
        '85402_0.jpg',
        '96282151_692160204876769_6691241248559705513_n.jpeg',
        'bio_1.jpg',
        'DSCF8468.jpg',
        'pbw.jpg',
        'sq32.jpg',
        'tbw2.jpg',
        'trippy.jpg',
        'wqe.jpeg'
      ]
    },
    {
      name: 'Album Artwork',
      url: 'album-artwork',
      images: [
        'album-two.jpg',
        'first-album.jpg',
        'firstComp.jpg',
        'firstEP.jpg',
        'firstSplit.jpg',
        'secondComp.jpg'
      ]
    },
    {
      name: 'Graphics',
      url: 'graphics',
      images: [
        '39868558_1079376578887467_487941360368746496_n.jpg',
        '41096935_1090533651105093_5810149337606389760_n.jpg',
        '41179213_1090533574438434_144774345296707584_n.jpg',
        '43122200_1106498376175287_6515276989291560960_n.jpg',
        '45858241_1128314267327031_8734684748040896512_n.jpg',
        '47686535_1148506498641141_9198249982866489344_n.jpg',
        '48357801_1154152071409917_3026677369185239040_n.jpg',
        'blackonwhiteshadow copy.png',
        'hiltump.jpg',
        'il_430xN.150653109.jpg',
        'mbz mod.jpg',
        'mbzTitle.jpg',
        'mbzTitle2.png',
        'mbzTitle3.jpg',
        'mbzTitleFinal.png',
        'middle-sleeve.png',
        'streaming.jpg'
      ]
    },
  ];
  imageClicked(imageSource: string){

      // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal!.style.display = "block";
    modalImg!.setAttribute('src', imageSource);
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var img = document.getElementById("myImg");
    modal!.addEventListener('click', function() { 
      modal!.style.display = "none";
    }); 
    span.addEventListener('click', function() { 
      modal!.style.display = "none";
    }); 
  }
  
  // When the user clicks on <span> (x), close the modal
  ngOnInit(): void {

  
  }
}
  


