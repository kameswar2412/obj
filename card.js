$(document).ready(function() {


let playerArr=[

  {
    id:"1",
    "teamName" : "DC",
    "teamIcon" : "../preview imgs/dc.png",
    "playerCount" : "21",
    "topBatsmen": "Shikhar Dhawan",
    "topBowler": "Avesh Khan",
    "champoinshipWonCount": "0",
  

},
  {
    id:"2",
    "teamName" : "CSK",
    "teamIcon" : "../preview imgs/csk.png",
    "playerCount" : "22",
    "topBatsmen": "Faf du Plessis",
    "topBowler": "Dwayne Bravo",
    "champoinshipWonCount": "3",
 
},
 {
  id:"3",
  "teamName" : "RR",
  "teamIcon" : "../preview imgs/rr.png",
  "playerCount" : "24",
  "topBatsmen": "Sanju Samson",
  "topBowler": "Chris Morris",
  "champoinshipWonCount": "1",

},{
  id:"4",
  "teamName" : "MI",
    "teamIcon" : "../preview imgs/mi.png",
    "playerCount" : "22",
    "topBatsmen": "Rohit Sharma",
    "topBowler": "Rahul Chahar",
    "champoinshipWonCount": "5",
  
},{
  id:"5",
  "teamName" : "RCB",
  "teamIcon" : "../preview imgs/rcb.png",
  "playerCount" : "18",
  "topBatsmen": "Virat Kohli",
  "topBowler": "Harshal Patel",
  "champoinshipWonCount": "0",
 
    


},{
  id:"6",
  "teamName" : "PUNJAB",
  "teamIcon" : "../preview imgs/panjab.jpg",
  "playerCount" : "20",
  "topBatsmen": "KL Rahul",
  "topBowler": "Mohammad Shami",
  "champoinshipWonCount": "0",



},{
  id:"7",
  "teamName" : "SRH",
  "teamIcon" : "../preview imgs/sun.jpg",
  "playerCount" : "17",
  "topBatsmen": "Jonny Bairstow",
  "topBowler": "Rashid Khan",
  "champoinshipWonCount": "1",
 
},{
  id:"8",
  "teamName" : "KKR",
  "teamIcon" : "../preview imgs/kkr.png",
  "playerCount" : "17",
  "topBatsmen": "Shubman Gill",
  "topBowler": "Pat Cummins",
  "champoinshipWonCount": "2",


}
  
  ];








  let playerDetails=[
    {
      id:"",


" fullName" : "Sanju Samson",
      "photo": "https://static.iplt20.com/players/284/258.png",
      "team" : "RR",
      "price": "8 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"",


" fullName" : "Ben Stokes",
      "photo": "https://static.iplt20.com/players/284/1154.png",
      "team" : "RR",
      "price": "12.5 Crores",
      "playingStatus": "Playing",
      "role": "All-rounder",
    },
    {
      id:"",


" fullName" : "Jos Buttler",
      "photo": "https://static.iplt20.com/players/284/509.png",
      "team" : "RR",
      "price": "4.4 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"",


" fullName" : "Rahul Tewatia",
      "photo": "https://static.iplt20.com/players/284/1749.png",
      "team" : "RR",
      "price": "3 Crores",
      "playingStatus": "Playing",
      "role": "All-rounder",
    },
    {
      id:"",


" fullName" : "Jaydev Unadkat",
      "photo": "https://static.iplt20.com/players/284/86.png",
      "team" : "RR",
      "price": "3 Crores",
      "playingStatus": "On-bench",
      "role": "Bowler",
    },
    {
      id:"",


" fullName" : "Christopher Morris",
      "photo": "https://static.iplt20.com/players/284/836.png",
      "team" : "RR",
      "price": "16.25 Crores",
      "playingStatus": "Playing",
      "role": "All-rounder",
    },
    {
      id:"",


" fullName" : "Shivam Dube",
      "photo": "https://static.iplt20.com/players/284/5431.png",
      "team" : "RR",
      "price": "4.4  Crores",
      "playingStatus": "Playing",
      "role": "All-Rounder",
    },
    {
      id:"",


" fullName" : "Andrew Tye",
      "photo": "https://static.iplt20.com/players/284/1480.png",
      "team" : "RR",
      "price": "1 Crores",
      "playingStatus": "Playing",
      "role": "Bowler",
    },
    {
      id:"",


" fullName" : "David Miler",
      "photo": "https://static.iplt20.com/players/284/187.png",
      "team" : "RR",
      "price": "75 Lacs",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"",


" fullName" : "Mahipal Lomror",
      "photo": "https://static.iplt20.com/players/284/2970.png",
      "team" : "RR",
      "price": "20 Lacs",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"",


" fullName" : "Shreyas Gopal",
      "photo": "https://static.iplt20.com/players/284/1748.png",
      "price": "20 Lacs",
      "playingStatus": "Playing",
      "role": "All-rounder",
    },
    {
      id:"",


" fullName" : "Chetan Sakariya",
      "photo": "https://static.iplt20.com/players/284/11062.png",
      "team" : "RR",
      "price": "1.2 crore",
      "playingStatus": "On-bench",
      "role": "Bowler",
    },
    {
      id:"",


" fullName" : "Mustafizur Rahman",
      "photo": "https://static.iplt20.com/players/284/1594.png",
      "team" : "RR",
      "price": "1 crore",
      "playingStatus": "On-bench",
      "role": "Bowler",
    },
    {
      id:"",


" fullName" : "Liam Livingstone",
      "photo": "https://static.iplt20.com/players/284/3644.png",
      "team" : "RR",
      "price": "75 Lacs",
      "playingStatus": "On-bench",
      "role": "Batsman",
    },
    {
      id:"",


" fullName" : "Yashasvi Jaiswal",
      "photo": "https://static.iplt20.com/players/284/13538.png",
      "team" : "RR",
      "price": "2.4 Crores",
      "playingStatus": "On-bench",
      "role": "Batsman",
    },
    {
      id:"",


" fullName" : "Kartik Tyagi",
      "photo": "https://static.iplt20.com/players/284/10059.png",
      "team" : "RR",
      "price": "1.3 Crores",
      "playingStatus": "On-bench",
      "role": "Bowler",
    },
    {
      id:"",


" fullName" : "Mayank Markande",
      "photo": "https://static.iplt20.com/players/284/4951.png",
      "team" : "RR",
      "price": "20 Lacs",
      "playingStatus": "Playing",
      "role": "Bowler",
    }
,
    {id:"",      
    "fullName" : "Rohit Sharma",
    "photo": "https://static.iplt20.com/players/210/107.png",
    "team" : "MI",
    "price": "15 Crores",
    "playingStatus": "Playing",
    "role": "Batsman",
  },
  {
    id:"",
    "fullName" : "Hardik Pandya",
    "photo": "https://static.iplt20.com/players/210/2740.png",
    "team" : "MI",
    "price": "11 Crores",
    "playingStatus": "Playing",
    "role": "All-Rounder",
  },
  {
    id:"",
    "fullName" : "Krunal Pandya",
    "photo": "https://static.iplt20.com/players/210/3183.png",
    "team" : "MI",
    "price": "8.8 Crores",
    "playingStatus": "Playing",
    "role": "All-Rounder",
  },
  {
    id:"",
    "fullName" : "Jasprit Bumrah",
    "photo": "https://static.iplt20.com/players/210/1124.png",
    "team" : "MI",
    "price": "7 Crores",
    "playingStatus": "Playing",
    "role": "Bowler",
  },
  {
    id:"",
    "fullName" : "Ishan Kishan",
    "photo": "https://static.iplt20.com/players/210/2975.png",
    "team" : "MI",
    "price": "6.2 Crores",
    "playingStatus": "On-bench",
    "role": "Batsman",
  },
  {
    id:"",
    "fullName" : "Kieron Pollard",
    "photo": "https://static.iplt20.com/players/210/210.png",
    "team" : "MI",
    "price": "5.4 Crores",
    "playingStatus": "Playing",
    "role": "All-rounder",
  },
  {
    id:"",
    "fullName" : "Suryakumar Yadav",
    "photo": "https://static.iplt20.com/players/210/108.png",
    "team" : "MI",
    "price": "3.2  Crores",
    "playingStatus": "Playing",
    "role": "Batsman",
  },
  {
    id:"",
    "fullName" : "Quinton de Kock",
    "photo": "https://static.iplt20.com/players/210/834.png",
    "team" : "MI",
    "price": "2.8 Crores",
    "playingStatus": "Playing",
    "role": "Batsman",
  },
  {
    id:"",
    "fullName" : "Trent Boult",
    "photo": "https://static.iplt20.com/players/210/969.png",
    "team" : "MI",
    "price": "2.2 crore",
    "playingStatus": "Playing",
    "role": "Bowler",
  },
  {
    id:"",
    "fullName" : "Rahul Chahar",
    "photo": "https://static.iplt20.com/players/210/3763.png",
    "team" : "MI",
    "price": "1.9 Crores",
    "playingStatus": "Playing",
    "role": "Bowler",
  },
  {
    id:"",
    "fullName" : "Chris Lynn",
    "photo": "https://static.iplt20.com/players/210/179.png",
    "team" : "MI",
    "price": "2 Crores",
    "playingStatus": "Playing",
    "role": "Batsman",
  },
  {
    id:"",
    "fullName" : "Anmolpreet Singh",
    "photo": "https://static.iplt20.com/players/210/2965.png",
    "team" : "MI",
    "price": "80 Lacs",
    "playingStatus": "On-bench",
    "role": "Batsman",
  },
  {
    id:"",
    "fullName" : "Anukul Roy",
    "photo": "https://static.iplt20.com/players/210/3774.png",
    "team" : "MI",
    "price": "20 Lacs",
    "playingStatus": "On-bench",
    "role": "All-Rounder",
  },
  {
    id:"",
    "fullName" : "Aditya Tare",
    "photo": "https://static.iplt20.com/players/210/99.png",
    "team" : "MI",
    "price": "20 Lacs",
    "playingStatus": "On-bench",
    "role": "Batsman",
  },
  {
    id:"",
    "fullName" : "Dhawal Kulkarni",
    "photo": "https://static.iplt20.com/players/210/101.png",
    "team" : "MI",
    "price": "75 Lacs",
    "playingStatus": "On-bench",
    "role": "Bowler",
  },
  {
    id:"",
    "fullName" : "Jayant Yadav",
    "photo": "https://static.iplt20.com/players/210/1740.png",
    "team" : "MI",
    "price": "20 Lacs",
    "playingStatus": "On-bench",
    "role": "Bowler",
  },
  {
    id:"",
    "fullName" : "Mohsin Khan",
    "photo": "https://static.iplt20.com/players/210/4952.png",
    "team" : "MI",
    "price": "20 Lacs",
    "playingStatus": "Playing",
    "role": "Bowler",
  },
    {
        
      id:"",
             "fullName" : "ViratKohli",
             "photo": "https://static.iplt20.com/players/284/164.png",
             "team" : "RCB",
             "price": "17 Crores",
             "playingStatus": "Playing",
             "role": "Batsman",
           },
           {
             
      id:"",
             "fullName" : "AB de Villiers",
             "photo": "https://static.iplt20.com/players/284/233.png",
             "team" : "RCB",
             "price": "11 Crores",
             "playingStatus": "Playing",
             "role": "Batsman",
           },
           {
             
      id:"",
             "fullName" : "Yuzvendra Chahal",
             "photo": "https://static.iplt20.com/players/284/111.png",
             "team" : "RCB",
             "price": "6 Crores",
             "playingStatus": "Playing",
             "role": "Bowler",
           },
           {
             
      id:"",
             "fullName" : "Glenn Maxwell",
             "photo": "https://static.iplt20.com/players/284/282.png",
             "team" : "RCB",
             "price": "14.25 Crores",
             "playingStatus": "Playing",
             "role": "All-rounder",
           },
           {
             
      id:"",
             "fullName" : "Kane Richardson",
             "photo": "https://static.iplt20.com/players/284/798.png",
             "team" : "RCB",
             "price": "4 Crores",
             "playingStatus": "On-bench",
             "role": "Bowler",
           },
           {
             
      id:"",
             "fullName" : "Kyle Jamieson",
             "photo": "https://static.iplt20.com/players/284/1616.png",
             "team" : "RCB",
             "price": "15 Crores",
             "playingStatus": "Playing",
             "role": "All-rounder",
           },
           {
             
      id:"",
             "fullName" : "Washington Sundar",
             "photo": "https://static.iplt20.com/players/284/2973.png",
             "team" : "RCB",
             "price": "3.2  Crores",
             "playingStatus": "Playing",
             "role": "All-Rounder",
           },
           {
             
      id:"",
             "fullName" : "Navdeep Saini",
             "photo": "https://static.iplt20.com/players/284/3824.png",
             "team" : "RCB",
             "price": "3 Crores",
             "playingStatus": "Playing",
             "role": "Bowler",
           },
           {
             
      id:"",
             "fullName" : "Daniel Christian",
             "photo": "https://static.iplt20.com/players/284/181.png",
             "team" : "RCB",
             "price": "4.8 Crores",
             "playingStatus": "Playing",
             "role": "All-Rounder",
           },
           {
             
      id:"",
             "fullName" : "Adam Zampa",
             "photo": "https://static.iplt20.com/players/284/958.png",
             "team" : "RCB",
             "price": "1.5 Crores",
             "playingStatus": "Playing",
             "role": "Bowler",
           },
           {
             
      id:"",
             "fullName" : "Devdutt Padikkal",
             "photo": "https://static.iplt20.com/players/284/5430.png",
             "team" : "RCB",
             "price": "20 Lacs",
             "playingStatus": "Playing",
             "role": "Batsman",
           },
           {
             
      id:"",
             "fullName" : "Daniel Sams",
             "photo": "https://static.iplt20.com/players/284/4649.png",
             "team" : "RCB",
             "price": "60 Lacs",
             "playingStatus": "On-bench",
             "role": "All-rounder",
           },
           {
             
      id:"",
             "fullName" : "Sachin Baby ",
             "photo": "https://static.iplt20.com/players/284/1115.png",
             "team" : "RCB",
             "price": "20 Lacs",
             "playingStatus": "On-bench",
             "role": "Batsman",
           },
           {
             
      id:"",
             "fullName" : "Rajat Patidar",
             "photo": "https://static.iplt20.com/players/284/5471.png",
             "team" : "RCB",
             "price": "20 Lacs",
             "playingStatus": "On-bench",
             "role": "Bowler",
           },
           {
             
      id:"",
             "fullName" : "Mohammed Azharuddeen",
             "photo": "https://static.iplt20.com/players/284/7743.png",
             "team" : "RCB",
             "price": "20 Lacs",
             "playingStatus": "On-bench",
             "role": "Batsman",
           },
           {
             
      id:"",
             "fullName" : "Shahbaz Ahmed",
             "photo": "https://static.iplt20.com/players/284/13803.png",
             "team" : "RCB",
             "price": "20 Lacs",
             "playingStatus": "On-bench",
             "role": "Bowler",
           },
           {
             
      id:"",
             "fullName" : "Pavan Deshpande",
             "photo": "https://static.iplt20.com/players/284/4957.png",
             "team" : "RCB",
             "price": "20 Lacs",
             "playingStatus": "Playing",
             "role": "Batsman",
           },
           
         {
           id:"",
     
     "fullName":"MS Dhoni (c)",
           from:"dccsk",
           price:"10cr",
           PlayingStates:"Playing",
           photo:"https://static.iplt20.com/players/210/1.png",
           role:"batsmanBatsman"
       },{
           
         id:"", 
         fullName:"Robin uthappa",
           from:"dccsk",
           price:"5cr",
           PlayingStates:"Playing",
           photo:"https://static.iplt20.com/players/210/127.png",
           role:"batsmanBatsman"
       },{
           
         id:"", 
         fullName:"Ruturaj GaikWad",
           from:"dccsk",
           price:"3cr",
           PlayingStates:"Playing",
           photo:"https://static.iplt20.com/players/210/5443.png",
           role:"batsman All-rounder"
       }, {
           
         id:"", 
         fullName:"Ravindra Jadeja",
           from:"dccsk",
           price:"3cr",
           PlayingStates:"Playing",
           photo:"https://static.iplt20.com/players/210/9.png",
           role:"batsman All-rounder"
       },{
           
         id:"", 
         fullName:"Suresh Raina",
           from:"dccsk",
           price:"3cr",
           PlayingStates:"Playing",
           photo:"https://static.iplt20.com/players/210/14.png",
           role:"batsmanbatsman"
       },{
           
         id:"", 
         fullName:"sam curran",
           from:"dccsk",
           price:"3cr",
           PlayingStates:"Playing",
           photo:"https://static.iplt20.com/players/210/2939.png",
           role:"batsmanall rounder"
       },{
           
         id:"", 
         fullName:"sardul thakur",
           from:"dccsk",
           price:"3cr",
           PlayingStates:"Playing",
           photo:"https://static.iplt20.com/players/210/1745.png",
           role:"batsmanbowler"
       },{
           
         id:"", 
         fullName:"Ambati Rayudu",
           from:"dccsk",
           price:"5cr",
           PlayingStates:"playing",
           photo:"https://static.iplt20.com/players/210/100.png",
           role:"batsmanbatsman"
       },{
           
         id:"", 
         fullName:"Mitchell Santner",
           from:"dccsk",
           price:"1.5cr",
           PlayingStates:"on-banch",
           photo:"https://static.iplt20.com/players/210/1903.png",
           role:"batsmanall rounder"
       },{
           
         id:"", 
         fullName:"c pujara",
           from:"dccsk",
           price:"1cr",
           PlayingStates:"on-banch",
           photo:"https://static.iplt20.com/players/210/156.png",
           role:"batsmanbatsman"
       },{
           
         id:"", 
         fullName:"moeen ali",
           from:"dccsk",
           price:"8cr",
           PlayingStates:"playing",
           photo:"https://static.iplt20.com/players/210/1735.png",
           role:"batsmanall rounder"
       }, {
           
         id:"", 
         fullName:"Lungi Ngidi",
           from:"dccsk",
           price:"",
           PlayingStates:"on-banch",
           photo:"https://static.iplt20.com/players/210/3746.png",
           role:"batsmanbowler"
       }, {
           
         id:"", 
         fullName:"Ruturaj Gaikwad",
           from:"dccsk",
           price:"3cr",
           PlayingStates:"playing",
           photo:"https://static.iplt20.com/players/210/5443.png",
           role:"batsmanbatsman"
       }, {
           
         id:"", 
         fullName:"Deepak Chahar",
           from:"dccsk",
           price:"2cr",
           PlayingStates:"playing",
           photo:"https://static.iplt20.com/players/210/140.png",
           role:"batsmanbowler"
       }, {
           
         id:"", 
         fullName:"Faf Du Plessis",
           from:"dccsk",
           price:"10cr",
           PlayingStates:"playing",
           photo:"https://static.iplt20.com/players/210/24.png",
           role:"batsmanbatsman"
       }, {
           
         id:"", 
         fullName:"imran tahir",
           from:"dccsk",
           price:"1cr",
           PlayingStates:"playing",
           photo:"https://static.iplt20.com/players/210/898.png",
           role:"batsmanbowler"
       }, {
           
         id:"", 
         fullName:"Dwayne Bravo",
           from:"dccsk",
           price:"7cr",
           PlayingStates:"playing",
           photo:"https://static.iplt20.com/players/210/25.png",
           role:"batsmanbowler"
       },
    
  {
    id:"",
    "fullName" : "KL Rahul",
    "photo": "https://static.iplt20.com/players/210/1125.png",
    "team" : "PUB",
    "price": "11 Crores",
    "playingStatus": "Playing",
    "role": "Batsman",
  },
  {
    id:"",
    "fullName" : "Mohammad Shami",
    "photo": "https://static.iplt20.com/players/210/94.png",
    "team" : "PUB",
    "price": "4.8 Crores",
    "playingStatus": "Playing",
    "role": "Bowler",
  },
  {
    id:"",
    "fullName" : "Nicholas Pooran",
    "photo": "https://static.iplt20.com/players/210/1703.png",
    "team" : "PUB",
    "price": "4.2 Crores",
    "playingStatus": "Playing",
    "role": "Batsman",
  },
  {
    id:"",
    "fullName" : "Chris Gayle",
    "photo": "https://static.iplt20.com/players/210/236.png",
    "team" : "PUB",
    "price": "2 Crores",
    "playingStatus": "Playing",
    "role": "Batsman",
  },
  {
    id:"",
    "fullName" : "Chris Jordan",
    "photo": "https://static.iplt20.com/players/210/1299.png",
    "team" : "PUB",
    "price": "3 Crores",
    "playingStatus": "On-bench",
    "role": "Bowler",
  },
  {
    id:"",
    "fullName" : "Ravi Bishnoi",
    "photo": "https://static.iplt20.com/players/210/19351.png",
    "team" : "PUB",
    "price": "2 Crores",
    "playingStatus": "Playing",
    "role": "Bowler",
  },
  {
    id:"",
    "fullName" : "Mayank Agarwal",
    "photo": "https://static.iplt20.com/players/210/158.png",
    "team" : "PUB",
    "price": "1 Crores",
    "playingStatus": "Playing",
    "role": "Batsman",
  },
  {
    id:"",
    "fullName" : "Deepak Hooda",
    "photo": "https://static.iplt20.com/players/210/1556.png",
    "team" : "PUB",
    "price": "50 Lacs",
    "playingStatus": "Playing",
    "role": "Batsman",
  },
  {
    id:"",
    "fullName" : "Murugan Ashwin",
    "photo": "https://static.iplt20.com/players/210/3187.png",
    "team" : "PUB",
    "price": "20 Lacs",
    "playingStatus": "Playing",
    "role": "Bowler",
  },
  {
    id:"",
    "fullName" : "Mandeep Singh",
    "photo": "https://static.iplt20.com/players/210/72.png",
    "team" : "PUB",
    "price": "1.4 Crores",
    "playingStatus": "Playing",
    "role": "Batsman",
  },
  {
    id:"",
    "fullName" : "Arshdeep Singh",
    "photo": "https://static.iplt20.com/players/210/4698.png",
    "team" : "PUB",
    "price": "20 Lacs",
    "playingStatus": "Playing",
    "role": "Bowler",
  },
  {
    id:"",
    "fullName" : "Prabhsimran Singh",
    "photo": "https://static.iplt20.com/players/210/5436.png",
    "team" : "PUB",
    "price": "55 Lacs",
    "playingStatus": "On-bench",
    "role": "Batsman",
  },
  {
    id:"",
    "fullName" : "Harpreet Brar",
    "photo": "https://static.iplt20.com/players/210/5441.png",
    "team" : "PUB",
    "price": "20 Lacs",
    "playingStatus": "On-bench",
    "role": "Bowler",
  },
  {
    id:"",
    "fullName" : "Ishan Porel",
    "photo": "https://static.iplt20.com/players/210/3777.png",
    "team" : "PUB",
    "price": "20 Lacs",
    "playingStatus": "On-bench",
    "role": "Bowler",
  },
  {
    id:"",
    "fullName" : "Darshan Nalkandei",
    "photo": "https://static.iplt20.com/players/210/4447.png",
    "team" : "PUB",
    "price": "30 Lacs",
    "playingStatus": "On-bench",
    "role": "Bowler",
  },
  {
    id:"",
    "fullName" : "Sarfaraz Khan",
    "photo": "https://static.iplt20.com/players/210/1564.png",
    "team" : "PUB",
    "price": "25 Lacs",
    "playingStatus": "On-bench",
    "role": "Batsman",
  },
  {
    id:"",
    "fullName" : "Jhye Richardson",
    "photo": "https://static.iplt20.com/players/210/3781.png",
    "team" : "PUB",
    "price": "14 crore",
    "playingStatus": "Playing",
    "role": "Bowler",
  },
    {
      id:"",
      "fullName" : "David Warner",
      "photo": "https://static.iplt20.com/players/210/170.png",
      "team" : "SRH",
      "price": "12 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"",
      "fullName" : "Kane Williamson",
      "photo": "https://static.iplt20.com/players/210/440.png",
      "team" : "SRH",
      "price": "3 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"",
      "fullName" : "Manish Pandey",
      "photo": "https://static.iplt20.com/players/210/123.png",
      "team" : "SRH",
      "price": "11 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"",
      "fullName" : "Rashid Khan",
      "photo": "https://static.iplt20.com/players/210/2885.png",
      "team" : "SRH",
      "price": "9 Crores",
      "playingStatus": "Playing",
      "role": "All-rounder",
    },
    {
      id:"",
      "fullName" : "Bhuvneshwar Kumar",
      "photo": "https://static.iplt20.com/players/210/116.png",
      "team" : "SRH",
      "price": "8.5 Crores",
      "playingStatus": "On-bench",
      "role": "Bowler",
    },
    {
      id:"",
      "fullName" : "Vijay Shankars",
      "photo": "https://static.iplt20.com/players/210/1083.png",
      "team" : "SRH",
      "price": "3.2 Crores",
      "playingStatus": "Playing",
      "role": "All-rounder",
    },
    {
      id:"",
      "fullName" : "Jonny Bairstow",
      "photo": "https://static.iplt20.com/players/210/506.png",
      "team" : "SRH",
      "price": "2.2  Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"",
      "fullName" : "Priyam Garg",
      "photo": "https://static.iplt20.com/players/210/3775.png",
      "team" : "SRH",
      "price": "1.9 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"",
      "fullName" : "Kedar Jadhav",
      "photo": "https://static.iplt20.com/players/210/297.png",
      "team" : "SRH",
      "price": "2 crore",
      "playingStatus": "Playing",
      "role": "All-Rounder",
    },
    {
      id:"",
      "fullName" : "Jason Holder",
      "photo": "https://static.iplt20.com/players/210/1075.png",
      "team" : "SRH",
      "price": "75 Lacs",
      "playingStatus": "Playing",
      "role": "All-Rounder",
    },
    {
      id:"",
      "fullName" : "Abdul Samad",
      "photo": "https://static.iplt20.com/players/210/19352.png",
      "team" : "SRH",
      "price": "20 Lacs",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"",
      "fullName" : "Abhishek Sharma",
      "photo": "https://static.iplt20.com/players/210/3760.png",
      "team" : "SRH",
      "price": "55 Lacs",
      "playingStatus": "On-bench",
      "role": "All-Rounder",
    },
    {
      id:"",
      "fullName" : "Mohammad Nabi",
      "photo": "https://static.iplt20.com/players/210/618.png",
      "team" : "SRH",
      "price": "1 crore",
      "playingStatus": "On-bench",
      "role": "All-Rounder",
    },
    {
      id:"",
      "fullName" : "Shreevats Goswami",
      "photo": "https://static.iplt20.com/players/210/95.png",
      "team" : "SRH",
      "price": "1 Crore",
      "playingStatus": "On-bench",
      "role": "Batsman",
    },
    {
      id:"",
      "fullName" : "Wriddhiman Saha",
      "photo": "https://static.iplt20.com/players/210/16.png",
      "team" : "SRH",
      "price": "1.2 Crores",
      "playingStatus": "On-bench",
      "role": "Batsman",
    },
    {
      id:"",
      "fullName" : "Mujeeb-ur-Rahman",
      "photo": "https://static.iplt20.com/players/210/4572.png",
      "team" : "SRH",
      "price": "1.5 crore",
      "playingStatus": "On-bench",
      "role": "Bowler",
    },
    {
      id:"",
      "fullName" : "Virat Singh",
      "photo": "https://static.iplt20.com/players/210/6966.png",
      "team" : "SRH",
      "price": "1.9 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"",

fullName:"rishabh pant",

      from:"dc",
      price:"10cr",
      PlayingStates:"playing",
      photo:"https://static.iplt20.com/players/210/2972.png",
      role:"batsman"
  },
  {
    id:"", 
    fullName:"ajinkya rahane",
      from:"dc",
      price:"4cr",
      PlayingStates:"playing",
      photo:"https://static.iplt20.com/players/210/135.png",
      role:"batsman"
  },
  {
    id:"", 
    fullName:"avesh khan",
      from:"dc",
      price:"2cr",
      PlayingStates:"playing",
      photo:"https://static.iplt20.com/players/210/1561.png",
      role:"bowler"
  },{
    id:"", 
    fullName:"axar patel",
      from:"dc",
      price:"5cr",
      PlayingStates:"playing",
      photo:"https://static.iplt20.com/players/210/1113.png",
      role:"all rounder"
  },{
    id:"", 
    fullName:"chirs woakes",
      from:"dc",
      price:"8cr",
      PlayingStates:"playing",
      photo:"https://static.iplt20.com/players/210/967.png",
      role:"bowler"
  },{
    id:"", 
    fullName:"kagiso rabada",
      from:"dc",
      price:"7cr",
      PlayingStates:"playing",
      photo:"https://static.iplt20.com/players/210/1664.png",
      role:"bowler"
  },{
    id:"", 
    fullName:"marcus stoinis",
      from:"dc",
      price:"10cr",
      PlayingStates:"playing",
      photo:"https://static.iplt20.com/players/210/964.png",
      role:"all rounder"
  },{
    id:"", 
    fullName:"shikhar dhawan",
      from:"dc",
      price:"5cr",
      PlayingStates:"playing",
      photo:"https://static.iplt20.com/players/210/41.png",
      role:"batsman"
  },{
    id:"", 
    fullName:"prithvi shaw",
      from:"dc",
      price:"3cr",
      PlayingStates:"playing",
      photo:"https://static.iplt20.com/players/210/3764.png",
      role:"batsman"
  },{
    id:"", 
    fullName:"shimron hetmyer",
      from:"dc",
      price:"8cr",
      PlayingStates:"playing",
      photo:"https://static.iplt20.com/players/210/1705.png",
      role:"batsman"
  },{
    id:"", 
    fullName:"ravichandran ashwin",
      from:"dc",
      price:"6cr",
      PlayingStates:"playing",
      photo:"https://static.iplt20.com/players/210/8.png",
      role:"bowler"
  },{
    id:"", 
    fullName:"steve smith",
      from:"dc",
      price:"2cr",
      PlayingStates:"playing",
      photo:"https://static.iplt20.com/players/210/271.png",
      role:"batsman"
  },{
    id:"", 
    fullName:"umesh yadav",
      from:"dc",
      price:"2cr",
      PlayingStates:"playing",
      photo:"https://static.iplt20.com/players/210/59.png",
      role:"bowler"
  },{
    id:"", 
    fullName:"tom curran",
      from:"dc",
      price:"3cr",
      PlayingStates:"playing",
      photo:"https://static.iplt20.com/players/210/3646.png",
      role:"bowler"
  },{
    id:"", 
    fullName:"sam billings",
      from:"dc",
      price:"4cr",
      PlayingStates:"playing",
      photo:"https://static.iplt20.com/players/210/2756.png",
      role:"batsman"
  },
     
    {
      id:"",
      "fullName" : "Eoin Morgan",
      "photo": "https://static.iplt20.com/players/210/197.png",
      "team" : "KKR",
      "price": "5.25 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"",
      "fullName" : "Pat Cummins",
      "photo": "https://static.iplt20.com/players/210/488.png",
      "team" : "KKR",
      "price": "15.5 Crores",
      "playingStatus": "Playing",
      "role": "Bowler",
    },
    {
      id:"",
      "fullName" : "Sunil Narine",
      "photo": "https://static.iplt20.com/players/210/203.png",
      "team" : "KKR",
      "price": "8.5 Crores",
      "playingStatus": "Playing",
      "role": "All-Rounder",
    },
    {
      id:"",
      "fullName" : "Dinesh Karthik",
      "photo": "https://static.iplt20.com/players/210/102.png",
      "team" : "KKR",
      "price": "7.4 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"",
      "fullName" : "Andre Russell",
      "photo": "https://static.iplt20.com/players/210/177.png",
      "team" : "KKR",
      "price": "7 Crores",
      "playingStatus": "On-bench",
      "role": "All-Rounder",
    },
    {
      id:"",
      "fullName" : "Kuldeep Yadav",
      "photo": "https://static.iplt20.com/players/210/261.png",
      "team" : "KKR",
      "price": "5.8 Crores",
      "playingStatus": "Playing",
      "role": "Bowler",
    },
    {
      id:"",
      "fullName" : "Varun Chakravarthy",
      "photo": "https://static.iplt20.com/players/210/5432.png",
      "team" : "KKR",
      "price": "4 Crores",
      "playingStatus": "Playing",
      "role": "Bowler",
    },
    {
      id:"",
      "fullName" : "Shubman Gill",
      "photo": "https://static.iplt20.com/players/210/3761.png",
      "team" : "KKR",
      "price": "1.8 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"",
      "fullName" : "Nitish Rana",
      "photo": "https://static.iplt20.com/players/210/2738.png",
      "team" : "KKR",
      "price": "3.4 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"",
      "fullName" : "Kamlesh Nagarkoti",
      "photo": "https://static.iplt20.com/players/210/3766.png",
      "team" : "KKR",
      "price": "3.2 Crores",
      "playingStatus": "Playing",
      "role": "Bowler",
    },
    {
      id:"",
      "fullName" : "Shivam Mavi",
      "photo": "https://static.iplt20.com/players/210/3779.png",
      "team" : "KKR",
      "price": "3 Crores",
      "playingStatus": "Playing",
      "role": "Bowler",
    },
    {
      id:"",
      "fullName" : "Lockie Ferguson",
      "photo": "https://static.iplt20.com/players/210/3729.png",
      "team" : "KKR",
      "price": "1.6 Crores",
      "playingStatus": "On-bench",
      "role": "Bowler",
    },
    {
      id:"",
      "fullName" : "Rahul Tripathi",
      "photo": "https://static.iplt20.com/players/210/3838.png",
      "team" : "KKR",
      "price": "60 Lacs",
      "playingStatus": "On-bench",
      "role": "Batsman",
    },
    {
      id:"",
      "fullName" : "Prasidh Krishna",
      "photo": "https://static.iplt20.com/players/210/5105.png",
      "team" : "KKR",
      "price": "20 Lacs",
      "playingStatus": "On-bench",
      "role": "Bowler",
    },
    {
      id:"",
      "fullName" : "Sandeep Warrier",
      "photo": "https://static.iplt20.com/players/210/1092.png",
      "team" : "KKR",
      "price": "20 Lacs",
      "playingStatus": "On-bench",
      "role": "Bowler",
    },
    {
      id:"",
      "fullName" : "Tim Seifert",
      "photo": "https://static.iplt20.com/players/210/1619.png",
      "team" : "KKR",
      "price": "20 Lacs",
      "playingStatus": "On-bench",
      "role": "Batsman",
    },
    {
      id:"",
      "fullName" : "Shakib Al Hasan",
      "photo": "https://static.iplt20.com/players/210/201.png",
      "team" : "KKR",
      "price": "3.2 crore",
      "playingStatus": "Playing",
      "role": "All-Rounder",
    }
  
  ]

  let main=$("main")
let searchId = window.location.search.split("=")[1];


  function cards(data,n){

    let  carddiv=$("<div>").attr({"class":"card-div","id":data.id})
    main.append(carddiv)
    let cardLink=$("<a>").attr({"href":"home2.html?p="+n})
    carddiv.append(cardLink)
let imgdiv=$("<div>").attr("id","card")
let img=$("<img>").attr("src",data.teamIcon)
imgdiv.append(img)
let textdiv=$("<div>").attr("id","text-div")
let text1=$("<h4>").html("teamName : " )
text1.append($("<span>").html(data.teamName))

textdiv.append(text1)



cardLink.append(imgdiv,textdiv)

return carddiv;
  }

for(let i=0;i<playerArr.length;i++){


cards(playerArr[i],i)


}


localStorage.setItem("players",JSON.stringify(playerArr));
localStorage.setItem("playersNames",JSON.stringify(playerDetails));


let localStorageData=localStorage.getItem('players')==null?[]:JSON.parse(localStorage.getItem('players'))
let localData=localStorage.getItem('playersNames')==null?[]:JSON.parse(localStorage.getItem('playersNames'))





console.log()





































})