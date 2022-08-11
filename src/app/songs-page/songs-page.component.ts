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
            title: "Control Your Mind or Someone Else Will",
            date: "February 20, 2021",
            linerNotes: "Recorded during the pandemic at Sixthirty Recording Studio Bangkok ## Mixed and mastered at Experimental Sounds Glasgow Scotland by Tommy Duffin",
            imageURL: "assets/album-two.jpg",
            links:[
              {
                url: "https://open.spotify.com/album/7eT7mfpwDTc7wMQyxGWMFs",
                image: "assets/spotify.png"
              },
              {
                url: "https://murderbizkitz.bandcamp.com/album/control-your-mind-or-someone-else-will",
                image: "assets/bandcamp.png"
              },
              {
                url: "https://tidal.com/browse/album/241387211",
                image: "assets/tidal.png"
              }
            ],
            songs: [
              {
                title: "Get Off Your Knees",
                time: "02:50",
                paragraph: "Apathy",
                quoteFlag: false,
                lyrics: "You will never stand up and get off your knees ##You bend over say thank you, please ##Have many people in a sheep hole sucking on a nipple ##Gotta go with the will of the people ## ##Get of your knees ##Fight the food ##The sunny days ##The beer tastes good ##Get off your knees ##Get off the floor ##Stop being sheep ##Stop being weak ## ##You will never stand up and get off your knees ##kills when your people no will of the people ##Suckin on a nipple in your little sheep hole ##No revolution just mass confusion"
              },
              {
                title: "High Visibility Jacket",
                time: "01:27",
                paragraph: "French Yellow Shirt fight against Macrons U-Turn on promised socialist reforms. Once they get in all promises are out the window. 2022 The high visibility jackets are back.",
                quoteFlag: true,
                lyrics: "Never listen to a word we say ##Until we kick you in the face ##The people want to be seen in high visibility ##Suffer but do not scream ##No, I wanna be seen in high visibility ##Not blind to all your schemes ##I want high visibility ## ##Hey you what's your number ##I got your number ##Hey you come with me ##Your gonna suffer ##This is the price you pay was it worth it for high visibility"
              },
              {
                title: "Into the Manboo",
                time: "02:32",
                paragraph: "Manboo Internet Cafes become rooms for rent in Japanese work culture.",
                quoteFlag: false,
                lyrics: "Don't need a fridge or TV im a cyber refugee ##Check in to the Manboo got a great connection too ##Lost in the Manboo Lost in the Manboo ## ##Just another wage slave ##Heading to an early grave ##Kill myself its no great loss ##Don't have the balls to kill my boss ## ##It's downtown Tokyo instant noodles here we go ##Steam until the midnight hour least I can take a shower ##Lost in the Manboo Lost in the Manboo ## ##Welcome to the rat race awake a 3 am ##A tapping of a keyboard robot downtime begins ##I can hear you snoring the walls are paper-thin ##And every little sound is a cacophonous din ##Into the Manboo where it's nice and cheap ##Into the Manboo where no one really sleeps ## ##In the Manboo ##In the Manboo ##In the Manboo ##In the Manboo ##In the Manboo ##In the Manboo ##In the Manboo"
              },
              {
                title: "Lardcore",
                time: "02:05",
                paragraph: "www.greenpeace.org.uk/news/why-meat-is-bad-for-the-environment/",
                quoteFlag: false,
                lyrics: "So, fat can’t sit in your seat ##Go splat a big ball a meat ##Fridge door comes of the hinge ##Lard ass about to binge ## ##Eating and eating and stuffing your face ##Spewing and shitting your toxic waste ##Eating and eating the stink off your breath ##Farting and sweating and waiting for death ## ##BBQ ribs ##With toddler’s bibs ##Keep stuffing your pie hole ##Get ready to die ya’ll ## ##Double French Fries with Cheese"
              },
              {
                title: "Elite Parasite",
                time: "02:41",
                paragraph: "The Late not so great Prince Phil",
                quoteFlag: false,
                lyrics: "Where's your license Greek Boy ##Where did you learn to drive? ##Where did you get all those medals? ##You never put your ass on the line ##Bastard Coburg sitting there looking smug ##We'll get rid of you the lime pit's already dug ## ##Die elite parasite ##Die elite parasite ##Die elite parasite ##Die elite parasite"
              },
              {
                title: "No War But the Class War",
                time: "02:29",
                paragraph: "Wars wage and people are used as pawns in war when the real struggle is the class war at home. A very short but concise explanation.",
                quoteFlag: false,
                lyrics: "Bred for power the Eton brat ##Hang the traitor aristocrat ##You stand appointed the dogs of war ##You sell us out you Judas whore ## ##Cricket and rugger and young boys to bugger ##The upper crust the old school tie ##Eton brat wankers to big city bankers ##Ours is not to reason why ## ##Drag old Lilibet out her bed ##Slice her throat cut off her head ##To traitors cloister the blood and gore ##You sell us out you Judas whore ## ##Dogs of war ##Dogs of war ##Dogs of war ##Class war"
              },
              {
                title: "Coke or Pepsi",
                time: "01:46",
                paragraph: "Democracy is an illusion of choice where the opposition is exactly the same. Coke or Pepsi.",
                quoteFlag: false,
                lyrics: "Look at the menu what will you choose ##Suck down that bullshit fizzy and smooth ##Sweet tongues are cloven leaders are chosen ##Half-truths are spoken promises broken ####Coke or Pepsi Coke or Pepsi Coke or Pepsi ##Fake democracy ##Lies hypocricy ##Fake democracy ##Lies hypocrisy ####Wars death destruction ##lies bribes corruption ##Media spin deception ##Corporate-sponsered convention ####Bribed by paymasters for corporate bastards ##Wars with your taxes the losses are massive ##TV and media makes policy speedier"
              },
              {
                title: "Pay To Cum (Bad Brains)",
                time: "01:22",
                quoteFlag: false,
                lyrics: "I make decision with precision ##Lost inside this manned collision ##Just to see that what is to be ##Perfectly my fantasy ##I came to know with now dismay ##That in this world we all must pay ##Pay to write, pay to play ##Pay to cum, pay to fight ##And all in time, ##With just our minds ##We soon will find ##What's left behind ##Not long ago when things were slow ##We all got by with what we know ##The end is near. Hearts filled with fear ##Don't want to listen to what they hear ##And so it's now we choose to fight ##To stick up for our bloody right ##The right to sing, the right to dance ##The right is ours... We'll take the chance ##A peace together ##A piece apart ##A piece of wisdom ##From our hearts"
              },
              {
                title: "Dog Whistle",
                time: "02:23",
                quoteFlag: true,
                paragraph: "In politics, a dog whistle is the use of coded or suggestive language in political messaging to garner support from a particular group like racists right-wing Nazis Brexit nationalists Trumpist Maga hat-wearing arseholes.",
                lyrics: "You're a patsy closet Nazi ##Double trouble burst your bubble ##What the fuck are you talkin about ## ##Machinations education ##Yadda yadda fuck your fatha ##What the fuck are you talkin about ## ##You don't know me fuck you blow me ##Your a caveman fuckin brave man ##What the fuck are you talkin about ## ##What the fuck are you talkin about ##What the fuck are you talkin about ##What the fuck are you talkin about ##What the fuck are you talkin talkin talk talk talk talk talk talk talking about"
              },
              {
                title: "Meanwhile In East Turkestan",
                time: "01:34",
                quoteFlag: true,
                paragraph: "Government policies have included the arbitrary detention of Uyghurs in state-sponsored internment camps, forced labor, suppression of Uyghur religious practices, political indoctrination, severe ill-treatment, forced sterilization, forced contraception, and forced abortion.*",
                lyrics: "Mass surveillance on the street ##Welcome to the CCP ##Singing dancing human freaks ## ##They will beat you black and blue ##Introduce the torture crew ##Knock the culture out of you ## ##What about the Uyghurs ##They’re a news story too ##What about the Uyghurs ##Say what? say where? Say who? ## ##Tourists browse the human zoo ##Locals don’t know what to do ##Remember we are watching you ##Re-education thank you, please ##Please repeat after me ##I must repent my evil ways"
              },
              {
                title: "Surveillance Capitalism",
                time: "01:49",
                quoteFlag: true,
                paragraph: "Audio track by Shoshana Zuboff analyses the digital era in her book The Age of Surveillance Capitalism.",
                lyrics: "I think one of the misconceptions is that surveillance capitalism is something that's only manifest in our lives when were online, and somehow it's only restricted to online targeted advertising. It's easy to say oh these things don't affect me. The fact is these things are being conducted on a layer that is not accessible to us. They can predict things like our personality, our emotions, our sexual orientation, our political orientation, and a whole range of things we never ever intended to disclose.####They use information from our faces which we have given billions and billions of photos to Facebook.####They use models of facial recognition and those models are then sold to military operations some of them in China and those Chinese operations do many things including imprisoning the Uyghur a subset of the Muslim population in China in what is rightly regarded as open-air prisons where they don't actually have to have people behind bars because the track and follow them constantly through facial recognition."
              }
            ]
          },
          {
            title: "Murder Bizkitz",
            date: "July 17, 2018",
            linerNotes: "Recorded at Sixthirty Recording Studio Bangkok ## Mixed and mastered at Experimental Sounds Glasgow Scotland by Tommy Duffin",
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
                lyrics: `##Drug lords are the corporations ##overseeing your medication ##bypassing all the legislation ##profits of death ##retroviral drugs disease ##cancer, tumours HIV ##human immune deficiency ##Profits from death ##Profits from death ##Profits from death ##pay the toll to your last breath ##Demerol nightmare ##anxiety attacks ##all on prescription ##like a monkey on your back`
              },
              {
                title: "Work",
                time: "02:01",
                paragraph: "I believe that this instinct to perpetuate useless work is, at bottom, simply fear of the mob. The mob (the thought runs) are such low animals that they would be dangerous if they had leisure; it is safer to keep them too busy to think. ####-George Orwell",
                quoteFlag: true,
                lyrics: "##Busy bees ##And heart attacks ##Work work work ##No time for snacks ##When you clock in ##And you clock out ##You cut your lifespan ##without a doubt ## ##You’re a slave to the grind ##Leave all your dreams behind ##You’ll be working to the grave ##Work work work all we do is fucking work ## ##Busy bees ##Without the buzz ##Work work work ##OT Plus ##Always working ##Life’s a bitch ##Slaves are us ##And he is rich ## ##You’re a slave to the grind ##Leave all your dreams behind ##You’ll be working to the grave ##Work work work all you do is fucking work ## ##I wake up in the morning ##Its gonna be one of those days ##I force feed myself and go to work ##like millions of other slaves ##Welcome to the monetary system ##Everybody’s got to eat ##And if you don’t have any money ##You’ll be on the street ##Work work work all we do is fucking work"
              },
              {
                title: "Bomb the Tories",
                time: "02:10",
                paragraph: "The British Tory Party have been the enemy of the working class people of the UK since politics began. Lying cheating and spreading hate and fear using the state-controlled media and imposing taxes and austerity on the working class. Sending people to war for the fat bankers and corporate interests. No war but the class war. I wept when the IRA missed Thatcher.",
                quoteFlag: true,
                lyrics: "##Greedy greedy fuck the needy toffy nosed fucking nazi scum ##Breeding hate spreading fear with your fucking diarrhea fuck off ##Killing a Tories is like saving lives ##Think of your children think of your wives ##Use a gun or a bomb or a knife ## ##Tax breaks for the rich ##Food banks for the poor ##Bonuses for the bankers ##Keep the money offshore ## ##Class war - bomb the Tories ##Class war - save our cities ## ##Greedy greedy fuck the needy toffy nosed fucking nazi scum ##Breeding hate spreading fear with your fucking diarrhea fuck off ##Killing a Tories is like saving lives ##Think of your children think of your wives ##Use a gun or a bomb or a knife ## ##Think of the children ##Think of your wives ##Think of the damage ##The destruction of lives ## ##Greedy greedy fuck the needy toffy nosed fucking nazi scum ##Breeding hate spreading fear with your fucking diarrhea fuck off ##Killing a Tories is like saving lives ##Think of your children think of your wives ##Use a gun or a bomb or a knife ## ##Tory scum ##Tory scum ##Tory scum"
              },
              {
                title: "Brainwashed",
                time: "01:50",
                quoteFlag: true,
                lyrics: "##You’ve been brainwashed in your schools ##by other idiotic fools ##And all the reasons that you give ##are dragging down the way you live ##Your brainwashed by the government ##and think of all the years you’ve spent ##You suck up all their lying shit ##that comes out of your TV set ## ##Your insignificant slaves ##No one cares about your insignificant lives ##Mind control ##Mind control ## ##War is love and love the war ##you don’t know what you’re fighting for ##Your purpose is to consume ##and work and breed and keep it schtum ##buying products spending bucks ##like a herd of stupid shmucks ##Slavery is your freedom cry ##repeat it all until you die ## ##Your insignificant slaves ##No one cares about your insignificant lives ##Mind control ##Mind control ## ##Brainwashed you moron you sucker your believe it all ##Hook line and sinker, you bought it, you bought it all"
              },
              {
                title: "North Korea Uber Allies",
                time: "02:54",
                paragraph: "Yeonmi Park was nine years old when she was invited to watch her best friend’s mother be shot. Growing up in North Korea, Yeonmi had seen executions before. She remembers her mother piggy­backing her to public squares and sports stadiums to watch the spectacles used by Kim Jong-il’s Workers’ Party to silence even the slightest whisper of dissent. But this killing lodged in her mind. Yeonmi watched in horror as the woman she knew was lined up alongside eight other prisoners and her sentence was read out. Her crime was having watched South Korean films and lending the DVDs to friends. Her punishment in this most paranoid of dictatorships was death by firing squad.",
                quoteFlag: true,
                lyrics: "##He’s the chosen one a penguin prodigy ##Cheese and chocolate buns a marshal oddity ##They killed the eldest son at the airport ## ##Gulags and jail behind the parallel ##In a torture cell, what’s the awful smell ##When will this nightmare ever end ## ##Exploitation ##of the nation ##emotional response is just a reflex ## ##Big sensation ##And admiration ##absolute obedience ruled by fear ## ##North Korea Uber Alles ##When will this nightmare ever end ## ##I just wanna watch a decent movie ##I just wanna taste a piece of candy ##I’m sick of all this fear and loathing ##Ah just want - a life - that’s better than this shit"
              },
              {
                title: "Futurama",
                time: "01:56",
                paragraph: "For the first time in the history of the human species, we have clearly developed the capacity to destroy ourselves. That's been true since 1945. It's now being finally recognized that there are more long-term processes like environmental destruction leading in the same direction, maybe not to total destruction, but at least to the destruction of the capacity for a decent existence.",
                quoteFlag: true,
                lyrics: "##From the straits of Madagascar to San Fransisco Bay ##This whole planet will be a sea of toxic waste ##We salute all the activists who do the best they can ##and fuck all those cunts working for the man ## ##This is your future This is your future This is your future ##This is your future This is your future This is your future ## ##whoa oh whoa oh ##whoa oh whoa oh ## ##lying and cheating ##fracking destroying ##paid for by your own tax ## ##Animals are sick or dead ##Cities are like toilets ##no one really gives a shit ##Like pigs we roll in it ## ##Corporations above the law ##Corporations are the law ##Corporations above the law ##Corporations are the law ## ##lying and cheating ##fracking destroying ##paid for by your own tax ## ##This is your future This is your future This is your future ##This is your future This is your future This is your future ## ##whoa oh whoa oh ##whoa oh whoa oh ## ##lying and cheating ##fracking destroying ##paid for by your own tax"
              },
              {
                title: "Lock and Load Highschool",
                time: "02:43",
                paragraph: "In Australia, we had the biggest massacre on earth, and the Australian government went: \"That's it! NO MORE GUNS.\" And we all went, \"Yeah, all right then, that seems fair enough, really.\"#### Now in America, you had the Sandy Hook massacre, where little tiny children died. And your government went, \"Maybe … we\'ll get rid of the big guns?\" And 50 percent of you went, \"FUCK YOU, DON\'T TAKE MY GUNS.\"#### -Jim Jefferies",
                quoteFlag: true,
                lyrics: "##AR – 15 domestic assault rifle ##UZI 9 mm the perfect gift ##223 ammo full metal jacket ##AK 47 home safety editio ##I really hate my teachers ##I really hate my school ##I really hate my parents ##They treat me like a fool ##They treat me like a loser ##Am gonna kill them all ##I'm fully locked and loaded ##we're gonna have a bal ##Lock n loaded lock n loaded lock n loaded ##Lock n loaded lock n loaded lock n loade ##I'm not a loser ##I'll show them al ##Am gonna be famous ##Am gonna be a sta ##Lock n loaded lock n loaded lock n loaded ##Lock n loaded lock n loaded lock n loade ##AR – 15 domestic assault rifle ##UZI 9 mm the perfect gift ##223 ammo full metal jacket ##AK 47 home safety editio ##They treat me like a loser ##Am gonna kill them all ##I'm fully locked and loaded ##we're gonna have a ball"
              },
              {
                title: "Paedophiles",
                time: "03:50",
                paragraph: "A dossier on paedophiles allegedly associated with the British government was assembled by the British Member of Parliament Geoffrey Dickens, who handed it to the then-Home Secretary, Leon Brittan, in 1984. The whereabouts of the dossier is unknown, along with other files on organised child abuse that had been held by the Home Office.[1]#### In 2013, the Home Office stated that all relevant information had been passed to the police, and that Dickens' dossier had not been retained. It was later disclosed that 114 documents concerning child abuse allegations were missing. In July 2014, the Labour Party called for a new inquiry into the way that the allegations had been handled, and the Prime Minister, David Cameron, ordered the permanent secretary of the Home Office, Mark Sedwill, to investigate the circumstances of the lost dossier.</i></p>",
                quoteFlag: true,
                lyrics: "##Drug lords are the corporations ##overseeing your medication ##bypassing all the legislation ##profits of death ##retroviral drugs disease ##cancer, tumours HIV ##human immune deficiency ##Profits from death ##Profits from death ##Profits from death ##pay the toll to your last breath ##Demerol nightmare ##anxiety attacks ##all on prescription ##like a monkey on your back"
              },
              {
                title: "Revenge",
                time: "01:38",
                paragraph: "##I believe in justice ##I believe in vengeance ##I believe in getting the bastard ## ##-Justin Sullivan",
                quoteFlag: false,
                lyrics: "##You have no honour and no real friends ##Everything you say or do is for your own ends ##Your a traitor and I will catch you in the end ##I look forward to the day I will have my ## ##Revenge revenge revenge ##I will get you in the end ##Revenge revenge revenge ##I will get you in the end ## ##I will slice your throat and watch you bleed ##To watch you die would satisfy my vengeful need ##For all the suffering the pain and greed ##I look forward to the day I watch you bleed ## ##revenge revenge ## ##I will slice your throat and watch you bleed ##To watch you die would satisfy my vengeful need ##For all the suffering the pain and greed ##I look forward to the day I will have my ## ##Revenge revenge revenge ##I will get you in the end ##Revenge revenge revenge ##I will get you in the end"
              },
              {
                title: "Society's Rules",
                time: "02:25",
                paragraph: "The greatness of a nation can be judged by how it treats its weakest members.",
                quoteFlag: false,
                lyrics: "##You got what you wanted ##the job in the city ##you got the promotion ##the house in the country ##the nuclear family ##your wife is so pretty ## ##You’ve been processed ##just like your food ##you don’t care its all about me ##A home invasion ##we’re taking over ##society’s rules are not for me ## ##You got what you wanted ##the job in the city ##you got the promotion ##the house in the country ##the nuclear family ##your wife is so pretty ## ##You’ve been processed ##just like your food ##you don’t care its all about me ##A home invasion ##we’re taking over ##society’s rules are not for me ##society’s rules are not for me"
              },
              {
                title: "American Foreign Policy",
                time: "03:42",
                paragraph: "Goldman Sachs Historically, there's been a pretty consistent correlation between oil prices and the US dollar. When the dollar strengthened, oil prices would fall — and vice versa. For the longest time, this relationship has been explained by the huge flow of US oil imports.",
                quoteFlag: true,
                lyrics: "##A huge blast came from nowhere ##rubble flying through the air ##run for safety cover your mouth ##can’t breathe in this thick dust cloud ## ##Sirens blood and despair ##people run-in everywhere ##bombing form mass clouds ##falling in black shrouds ##how many more must die ##for your war and your lies ##politicians stand and laugh ##they have no kids in the draft ## ##Wheres my family are they alive ##how many more must die ##broken glass everywhere ##blood death and despair ## ##You don’t know what it means to me ##you’ve infected me with your foreign policy"
              },
              {
                title: "Black September",
                time: "02:41",
                paragraph: "Days after opening, Italy’s pioneering sex doll brothel has been shut by authorities over a “lack of hygiene” and other offenses. All eight of the dolls have been seized for forensic examination by authorities.",
                quoteFlag: true,
                lyrics: "Don’t have to care the way you feel ##all because you're not real ##you never bitch ##you never moan ##or spend your life on the phone ## ##They call her Black September ##They call her Black September ## ##You are made of silicone ##always there and always home ##built to all my speculations ##this is hi-tech masturbation ## ##Can’t take rejection in my stride ##any pressure must be denied ##my virtual friends on my phone ##so psycho candy seeds at home ## ##You are made of silicone ##always there and always home ##built to all my speculations ##this is hi-tech masturbation ## ##They call her Black September ##They call her Black September ## ##They call her Black September ##built to all my speculations ##this is hi-tech masturbation ##ugh ugh ugh ugh ugh ugh ugh"
              },
            ]
          }
          
        ]
      },
      {
        releaseType: "EP",
        albumCards: [
          {
            title: "Kill Yourself Live on Facebook EP",
            date: "August 15, 2016",
            linerNotes: "Thanks to all involved in Murder Bizkitz from the beginning shout out to Amy Pai Shu Jon and anyone else who jammed with the band briefly you know who you are. Thank you. ## \"U.S.A.\" (Buchan, Duncan, McCormack )The Exploited All other songs Tony Mac",
            imageURL: "assets/firstEP.jpg",
            links:[
              {
                url: "https://murderbizkitz.bandcamp.com/album/kill-yourself-live-on-facebook-ep",
                image: "assets/bandcamp.png"
              }
            ],
            songs: [
              {
                title: "Astro",
                time: "01:41",
                quoteFlag: false,
              },
              {
                title: "Work",
                time: "02:41",
                quoteFlag: false,
              },
              {
                title: "Septic Tank",
                time: "02:19",
                quoteFlag: false,
              },
              {
                title: "Fuck the USA",
                time: "02:20",
                quoteFlag: false,
              },
              {
                title: "Divide and Conquer",
                time: "02:11",
                quoteFlag: false,
              },
              {
                title: "Civil Dead",
                time: "03:15",
                quoteFlag: false,
              },
            ]
          }
        ]
      },
      {
        releaseType: "Splits",
        albumCards: [
          {
            title: "NO GODS NO MASTERS SPLIT with DISM RAMROD AND THE HAPPY SPASTICS",
            date: "July 7, 2018",
            linerNotes: "",
            imageURL: "assets/firstSplit.jpg",
            links:[
              {
                url: "https://murderbizkitz.bandcamp.com/album/murder-bizkitz",
                image: "assets/bandcamp.png"
              }
            ]
          }
        ]
      },
      {
        releaseType: "Compilations",
        albumCards: [
          {
            title: "Myanmar Resistance",
            date: "2021",
            linerNotes: "",
            imageURL: "assets/firstComp.jpg",
            links:[
              {
                url: "https://open.spotify.com/album/0hvMejzMbsqc073butTEHk",
                image: "assets/spotify.png"
              },
              {
                url: "https://tidal.com/browse/album/197330350",
                image: "assets/tidal.png"
              }
            ]
          },
          {
            title: "A Global Mess - Vol.One: Asia",
            date: "2019",
            linerNotes: "",
            imageURL: "assets/secondComp.jpg",
            links:[
              {
                url: "https://open.spotify.com/album/48acGCxxJzu1gYPo6YOvoU",
                image: "assets/spotify.png"
              },
              {
                url: "https://tidal.com/browse/album/104571873",
                image: "assets/tidal.png"
              }
            ]
          }
        ]
      }
    ]
  }

}
