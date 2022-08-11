import { Component, OnInit } from '@angular/core';
import { releaseType } from '../model/song.model';

@Component({
  selector: 'app-songs-page',
  templateUrl: './songs-page.component.html',
  styleUrls: ['./songs-page.component.css']
})
export class SongsPageComponent implements OnInit {

  constructor() { }

  releasesTotal!:releaseType[];
  ngOnInit(): void {
    this.releasesTotal = [
      {
        releaseType: "Albums",
        albumCards: [
          {
            title: "Murder Bizkitz",
            date: "July 17, 2018",
            linerNotes: "Recorded at Sixthirty Recording Studio Bangkok \n Mixed and mastered at Experimental Sounds Glasgow Scotland by Tommy Duffin",
            imageURL: "assets/first-album.jpg",
            links:[
              {
                url: "https://murderbizkitz.bandcamp.com/album/murder-bizkitz",
                image: "assets/bandcamp.png"
              }
            ],
            songs: [
              {
                title: "Profits of Death",
                time: "02:54",
                paragraph: "The greed of Big Pharma.",
                quoteFlag: false,
                lyrics: "\nDrug lords are the corporations \noverseeing your medication \nbypassing all the legislation \nprofits of death \nretroviral drugs disease \ncancer, tumours HIV \nhuman immune deficiency \nProfits from death \nProfits from death \nProfits from death \npay the toll to your last breath \nDemerol nightmare \nanxiety attacks \nall on prescription \nlike a monkey on your back"
              },
              {
                title: "Work",
                time: "02:01",
                paragraph: "I believe that this instinct to perpetuate useless work is, at bottom, simply fear of the mob. The mob (the thought runs) are such low animals that they would be dangerous if they had leisure; it is safer to keep them too busy to think. \n -George Orwell",
                quoteFlag: true,
                lyrics: "\nBusy bees \nAnd heart attacks \nWork work work \nNo time for snacks \nWhen you clock in \nAnd you clock out \nYou cut your lifespan \nwithout a doubt \n \nYou’re a slave to the grind \nLeave all your dreams behind \nYou’ll be working to the grave \nWork work work all we do is fucking work \n \nBusy bees \nWithout the buzz \nWork work work \nOT Plus \nAlways working \nLife’s a bitch \nSlaves are us \nAnd he is rich \n \nYou’re a slave to the grind \nLeave all your dreams behind \nYou’ll be working to the grave \nWork work work all you do is fucking work \n \nI wake up in the morning \nIts gonna be one of those days \nI force feed myself and go to work \nlike millions of other slaves \nWelcome to the monetary system \nEverybody’s got to eat \nAnd if you don’t have any money \nYou’ll be on the street \nWork work work all we do is fucking work"
              },
              {
                title: "Bomb the Tories",
                time: "02:10",
                paragraph: "The British Tory Party have been the enemy of the working class people of the UK since politics began. Lying cheating and spreading hate and fear using the state-controlled media and imposing taxes and austerity on the working class. Sending people to war for the fat bankers and corporate interests. No war but the class war. I wept when the IRA missed Thatcher.",
                quoteFlag: true,
                lyrics: "\nGreedy greedy fuck the needy toffy nosed fucking nazi scum \nBreeding hate spreading fear with your fucking diarrhea fuck off \nKilling a Tories is like saving lives \nThink of your children think of your wives \nUse a gun or a bomb or a knife \n \nTax breaks for the rich \nFood banks for the poor \nBonuses for the bankers \nKeep the money offshore \n \nClass war - bomb the Tories \nClass war - save our cities \n \nGreedy greedy fuck the needy toffy nosed fucking nazi scum \nBreeding hate spreading fear with your fucking diarrhea fuck off \nKilling a Tories is like saving lives \nThink of your children think of your wives \nUse a gun or a bomb or a knife \n \nThink of the children \nThink of your wives \nThink of the damage \nThe destruction of lives \n \nGreedy greedy fuck the needy toffy nosed fucking nazi scum \nBreeding hate spreading fear with your fucking diarrhea fuck off \nKilling a Tories is like saving lives \nThink of your children think of your wives \nUse a gun or a bomb or a knife \n \nTory scum \nTory scum \nTory scum"
              },
              {
                title: "Brainwashed",
                time: "01:50",
                quoteFlag: true,
                lyrics: "\nYou’ve been brainwashed in your schools \nby other idiotic fools \nAnd all the reasons that you give \nare dragging down the way you live \nYour brainwashed by the government \nand think of all the years you’ve spent \nYou suck up all their lying shit \nthat comes out of your TV set \n \nYour insignificant slaves \nNo one cares about your insignificant lives \nMind control \nMind control \n \nWar is love and love the war \nyou don’t know what you’re fighting for \nYour purpose is to consume \nand work and breed and keep it schtum \nbuying products spending bucks \nlike a herd of stupid shmucks \nSlavery is your freedom cry \nrepeat it all until you die \n \nYour insignificant slaves \nNo one cares about your insignificant lives \nMind control \nMind control \n \nBrainwashed you moron you sucker your believe it all \nHook line and sinker, you bought it, you bought it all"
              },
              {
                title: "North Korea Uber Allies",
                time: "02:54",
                paragraph: "Yeonmi Park was nine years old when she was invited to watch her best friend’s mother be shot. Growing up in North Korea, Yeonmi had seen executions before. She remembers her mother piggy­backing her to public squares and sports stadiums to watch the spectacles used by Kim Jong-il’s Workers’ Party to silence even the slightest whisper of dissent. But this killing lodged in her mind. Yeonmi watched in horror as the woman she knew was lined up alongside eight other prisoners and her sentence was read out. Her crime was having watched South Korean films and lending the DVDs to friends. Her punishment in this most paranoid of dictatorships was death by firing squad.",
                quoteFlag: true,
                lyrics: "\nHe’s the chosen one a penguin prodigy \nCheese and chocolate buns a marshal oddity \nThey killed the eldest son at the airport \n \nGulags and jail behind the parallel \nIn a torture cell, what’s the awful smell \nWhen will this nightmare ever end \n \nExploitation \nof the nation \nemotional response is just a reflex \n \nBig sensation \nAnd admiration \nabsolute obedience ruled by fear \n \nNorth Korea Uber Alles \nWhen will this nightmare ever end \n \nI just wanna watch a decent movie \nI just wanna taste a piece of candy \nI’m sick of all this fear and loathing \nAh just want - a life - that’s better than this shit"
              },
              {
                title: "Futurama",
                time: "01:56",
                paragraph: "For the first time in the history of the human species, we have clearly developed the capacity to destroy ourselves. That's been true since 1945. It's now being finally recognized that there are more long-term processes like environmental destruction leading in the same direction, maybe not to total destruction, but at least to the destruction of the capacity for a decent existence.",
                quoteFlag: true,
                lyrics: "\nFrom the straits of Madagascar to San Fransisco Bay \nThis whole planet will be a sea of toxic waste \nWe salute all the activists who do the best they can \nand fuck all those cunts working for the man \n \nThis is your future This is your future This is your future \nThis is your future This is your future This is your future \n \nwhoa oh whoa oh \nwhoa oh whoa oh \n \nlying and cheating \nfracking destroying \npaid for by your own tax \n \nAnimals are sick or dead \nCities are like toilets \nno one really gives a shit \nLike pigs we roll in it \n \nCorporations above the law \nCorporations are the law \nCorporations above the law \nCorporations are the law \n \nlying and cheating \nfracking destroying \npaid for by your own tax \n \nThis is your future This is your future This is your future \nThis is your future This is your future This is your future \n \nwhoa oh whoa oh \nwhoa oh whoa oh \n \nlying and cheating \nfracking destroying \npaid for by your own tax"
              },
              {
                title: "Lock and Load Highschool",
                time: "02:43",
                paragraph: "In Australia, we had the biggest massacre on earth, and the Australian government went: \"That's it! NO MORE GUNS.\" And we all went, \"Yeah, all right then, that seems fair enough, really.\"\n\n Now in America, you had the Sandy Hook massacre, where little tiny children died. And your government went, \"Maybe … we\'ll get rid of the big guns?\" And 50 percent of you went, \"FUCK YOU, DON\'T TAKE MY GUNS.\"\n\n Jim Jefferies",
                quoteFlag: true,
                lyrics: "\nAR – 15 domestic assault rifle \nUZI 9 mm the perfect gift \n223 ammo full metal jacket \nAK 47 home safety editio \nI really hate my teachers \nI really hate my school \nI really hate my parents \nThey treat me like a fool \nThey treat me like a loser \nAm gonna kill them all \nI'm fully locked and loaded \nwe're gonna have a bal \nLock n loaded lock n loaded lock n loaded \nLock n loaded lock n loaded lock n loade \nI'm not a loser \nI'll show them al \nAm gonna be famous \nAm gonna be a sta \nLock n loaded lock n loaded lock n loaded \nLock n loaded lock n loaded lock n loade \nAR – 15 domestic assault rifle \nUZI 9 mm the perfect gift \n223 ammo full metal jacket \nAK 47 home safety editio \nThey treat me like a loser \nAm gonna kill them all \nI'm fully locked and loaded \nwe're gonna have a ball"
              },
              {
                title: "Paedophiles",
                time: "03:50",
                paragraph: "A dossier on paedophiles allegedly associated with the British government was assembled by the British Member of Parliament Geoffrey Dickens, who handed it to the then-Home Secretary, Leon Brittan, in 1984. The whereabouts of the dossier is unknown, along with other files on organised child abuse that had been held by the Home Office.[1]\n\n In 2013, the Home Office stated that all relevant information had been passed to the police, and that Dickens' dossier had not been retained. It was later disclosed that 114 documents concerning child abuse allegations were missing. In July 2014, the Labour Party called for a new inquiry into the way that the allegations had been handled, and the Prime Minister, David Cameron, ordered the permanent secretary of the Home Office, Mark Sedwill, to investigate the circumstances of the lost dossier.</i></p>",
                quoteFlag: true,
                lyrics: "\nDrug lords are the corporations \noverseeing your medication \nbypassing all the legislation \nprofits of death \nretroviral drugs disease \ncancer, tumours HIV \nhuman immune deficiency \nProfits from death \nProfits from death \nProfits from death \npay the toll to your last breath \nDemerol nightmare \nanxiety attacks \nall on prescription \nlike a monkey on your back"
              },
              {
                title: "Revenge",
                time: "01:38",
                paragraph: "\nI believe in justice \nI believe in vengeance \nI believe in getting the bastard \n \n-Justin Sullivan",
                quoteFlag: false,
                lyrics: "\nYou have no honour and no real friends \nEverything you say or do is for your own ends \nYour a traitor and I will catch you in the end \nI look forward to the day I will have my \n \nRevenge revenge revenge \nI will get you in the end \nRevenge revenge revenge \nI will get you in the end \n \nI will slice your throat and watch you bleed \nTo watch you die would satisfy my vengeful need \nFor all the suffering the pain and greed \nI look forward to the day I watch you bleed \n \nrevenge revenge \n \nI will slice your throat and watch you bleed \nTo watch you die would satisfy my vengeful need \nFor all the suffering the pain and greed \nI look forward to the day I will have my \n \nRevenge revenge revenge \nI will get you in the end \nRevenge revenge revenge \nI will get you in the end"
              },
              {
                title: "Society's Rules",
                time: "02:25",
                paragraph: "The greatness of a nation can be judged by how it treats its weakest members.",
                quoteFlag: false,
                lyrics: "\nYou got what you wanted \nthe job in the city \nyou got the promotion \nthe house in the country \nthe nuclear family \nyour wife is so pretty \n \nYou’ve been processed \njust like your food \nyou don’t care its all about me \nA home invasion \nwe’re taking over \nsociety’s rules are not for me \n \nYou got what you wanted \nthe job in the city \nyou got the promotion \nthe house in the country \nthe nuclear family \nyour wife is so pretty \n \nYou’ve been processed \njust like your food \nyou don’t care its all about me \nA home invasion \nwe’re taking over \nsociety’s rules are not for me \nsociety’s rules are not for me"
              },
              {
                title: "American Foreign Policy",
                time: "03:42",
                paragraph: "Goldman Sachs Historically, there's been a pretty consistent correlation between oil prices and the US dollar. When the dollar strengthened, oil prices would fall — and vice versa. For the longest time, this relationship has been explained by the huge flow of US oil imports.",
                quoteFlag: true,
                lyrics: "\nA huge blast came from nowhere \nrubble flying through the air \nrun for safety cover your mouth \ncan’t breathe in this thick dust cloud \n \nSirens blood and despair \npeople run-in everywhere \nbombing form mass clouds \nfalling in black shrouds \nhow many more must die \nfor your war and your lies \npoliticians stand and laugh \nthey have no kids in the draft \n \nWheres my family are they alive \nhow many more must die \nbroken glass everywhere \nblood death and despair \n \nYou don’t know what it means to me \nyou’ve infected me with your foreign policy"
              },
              {
                title: "Black September",
                time: "02:41",
                paragraph: "Days after opening, Italy’s pioneering sex doll brothel has been shut by authorities over a “lack of hygiene” and other offenses. All eight of the dolls have been seized for forensic examination by authorities.",
                quoteFlag: true,
                lyrics: "Don’t have to care the way you feel \nall because you're not real \nyou never bitch \nyou never moan \nor spend your life on the phone \n \nThey call her Black September \nThey call her Black September \n \nYou are made of silicone \nalways there and always home \nbuilt to all my speculations \nthis is hi-tech masturbation \n \nCan’t take rejection in my stride \nany pressure must be denied \nmy virtual friends on my phone \nso psycho candy seeds at home \n \nYou are made of silicone \nalways there and always home \nbuilt to all my speculations \nthis is hi-tech masturbation \n \nThey call her Black September \nThey call her Black September \n \nThey call her Black September \nbuilt to all my speculations \nthis is hi-tech masturbation \nugh ugh ugh ugh ugh ugh ugh"
              },
            ]
          },
          {
            title: "Control Your Mind or Someone Else Will",
            date: "February 20, 2021",
            linerNotes: "Recorded during the pandemic at Sixthirty Recording Studio Bangkok \n Mixed and mastered at Experimental Sounds Glasgow Scotland by Tommy Duffin",
            imageURL: "assets/album-two.jpg",
            links:[
              {
                url: "https://open.spotify.com/album/7eT7mfpwDTc7wMQyxGWMFs",
                image: "assets/spotify.png"
              },
              {
                url: "https://murderbizkitz.bandcamp.com/album/control-your-mind-or-someone-else-will",
                image: "assets/bandcamp.png"
              }
            ],
            songs: [
              {
                title: "Profits of Death",
                time: "02:54",
                paragraph: "The greed of Big Pharma.",
                quoteFlag: false,
                lyrics: "\nDrug lords are the corporations \noverseeing your medication \nbypassing all the legislation \nprofits of death \nretroviral drugs disease \ncancer, tumours HIV \nhuman immune deficiency \nProfits from death \nProfits from death \nProfits from death \npay the toll to your last breath \nDemerol nightmare \nanxiety attacks \nall on prescription \nlike a monkey on your back"
              }
            ]
          }
        ]
      },
      {
        releaseType: "EP",
        albumCards: [
          {
            title: "KILL YOURSELF LIVE ON FACEBOOK EP",
            date: "July 17, 2018",
            linerNotes: "Recorded at Sixthirty Recording Studio Bangkok \n Mixed and mastered at Experimental Sounds Glasgow Scotland by Tommy Duffin",
            imageURL: "assets/first-album.jpg",
            links:[
              {
                url: "https://murderbizkitz.bandcamp.com/album/murder-bizkitz",
                image: "assets/bandcamp.png"
              }
            ],
            songs: [
              {
                title: "Profits of Death",
                time: "02:54",
                paragraph: "The greed of Big Pharma.",
                quoteFlag: false,
                lyrics: "\nDrug lords are the corporations \noverseeing your medication \nbypassing all the legislation \nprofits of death \nretroviral drugs disease \ncancer, tumours HIV \nhuman immune deficiency \nProfits from death \nProfits from death \nProfits from death \npay the toll to your last breath \nDemerol nightmare \nanxiety attacks \nall on prescription \nlike a monkey on your back"
              }
            ]
          }
        ]
      },
      {
        releaseType: "Albums",
        albumCards: [
          {
            title: "Murder Bizkitz",
            date: "July 17, 2018",
            linerNotes: "Recorded at Sixthirty Recording Studio Bangkok \n Mixed and mastered at Experimental Sounds Glasgow Scotland by Tommy Duffin",
            imageURL: "assets/first-album.jpg",
            links:[
              {
                url: "https://murderbizkitz.bandcamp.com/album/murder-bizkitz",
                image: "assets/bandcamp.png"
              }
            ],
            songs: [
              {
                title: "Profits of Death",
                time: "02:54",
                paragraph: "The greed of Big Pharma.",
                quoteFlag: false,
                lyrics: "\nDrug lords are the corporations \noverseeing your medication \nbypassing all the legislation \nprofits of death \nretroviral drugs disease \ncancer, tumours HIV \nhuman immune deficiency \nProfits from death \nProfits from death \nProfits from death \npay the toll to your last breath \nDemerol nightmare \nanxiety attacks \nall on prescription \nlike a monkey on your back"
              }
            ]
          }
        ]
      },
      {
        releaseType: "Albums",
        albumCards: [
          {
            title: "Murder Bizkitz",
            date: "July 17, 2018",
            linerNotes: "Recorded at Sixthirty Recording Studio Bangkok \n Mixed and mastered at Experimental Sounds Glasgow Scotland by Tommy Duffin",
            imageURL: "assets/first-album.jpg",
            links:[
              {
                url: "https://murderbizkitz.bandcamp.com/album/murder-bizkitz",
                image: "assets/bandcamp.png"
              }
            ],
            songs: [
              {
                title: "Profits of Death",
                time: "02:54",
                paragraph: "The greed of Big Pharma.",
                quoteFlag: false,
                lyrics: "\nDrug lords are the corporations \noverseeing your medication \nbypassing all the legislation \nprofits of death \nretroviral drugs disease \ncancer, tumours HIV \nhuman immune deficiency \nProfits from death \nProfits from death \nProfits from death \npay the toll to your last breath \nDemerol nightmare \nanxiety attacks \nall on prescription \nlike a monkey on your back"
              }
            ]
          }
        ]
      }
    ]
  }

}
