const exhibitsData = [
  {
    "id": "coffee",
    "title": "I'm Not Worth a Coffee",
    "image": "coffee.png",
    "year": 2026,
    "source": "YC alum",
    "kind": "tweet",
    "context": "https://x.com/breckyunits/status/2094806762428015019"
  },
  {
    "id": "no-demo-day-scientology",
    "title": "No Demo Day Scientology",
    "image": "noDemoDayScientology.jpeg",
    "year": 2024,
    "source": "Y Combinator",
    "kind": "screenshot"
  },
  {
    "id": "breck",
    "title": "Breck",
    "image": "imMad.png",
    "year": 2022,
    "source": "Imad Akhund",
    "kind": "email"
  },
  {
    "id": "congrats-to-airbedandbreakfast",
    "title": "Congrats to AirBedAndBreakfast!",
    "image": "reunion.png",
    "year": 2020,
    "source": "Breck Yunits",
    "kind": "email"
  },
  {
    "id": "garry-vs-breck",
    "title": "Garry vs Breck",
    "image": "garryVsBreck.png",
    "year": 2019,
    "source": "Hacker News",
    "kind": "screenshot"
  },
  {
    "id": "hair-stand-on-end",
    "title": "Spend Slowly Because the World Is Unpredictable",
    "image": "hairStandOnEnd.png",
    "year": 2015,
    "source": "Jessica Livingston",
    "kind": "email"
  },
  {
    "id": "democracy-the-conway",
    "title": "Ron Conway Wants Your Vote",
    "image": "democracyTheConway.jpeg",
    "year": 2015,
    "source": "Sam Altman",
    "kind": "email",
    "context": "https://x.com/breckyunits/status/2099537384518103355"
  },
  {
    "id": "sama-for-president",
    "title": "Sama for President",
    "image": "samaForPresident.png",
    "year": 2014,
    "source": "Paul Graham",
    "kind": "email"
  },
  {
    "id": "horrified",
    "title": "You Don't Have to Pay Back YC",
    "image": "horrified.png",
    "year": 2014,
    "source": "Paul Graham",
    "kind": "email"
  },
  {
    "id": "has-to-be",
    "title": "YC Founders List Email Guidelines",
    "image": "hasToBe.png",
    "year": 2014,
    "source": "Garry Tan",
    "kind": "email"
  },
  {
    "id": "crunchies",
    "title": "YC Alumni Nominated for Crunchies",
    "image": "crunchies.png",
    "year": 2014,
    "source": "Paul Graham",
    "kind": "email"
  },
  {
    "id": "swanky",
    "title": "YC S09 4-Year Reunion",
    "image": "swanky.png",
    "year": 2013,
    "source": "Suhail Doshi",
    "kind": "email"
  },
  {
    "id": "bookface-balls",
    "title": "H1 Lawyer Recommendations",
    "image": "bookfaceBalls.png",
    "year": 2013,
    "source": "John Collison",
    "kind": "email"
  },
  {
    "id": "aaron-swartz",
    "title": "Aaron Swartz Commits Suicide",
    "image": "wowTheySolvedThatCaseFastBodyStillWarm.png",
    "year": 2013,
    "source": "Hacker News",
    "kind": "screenshot"
  },
  {
    "id": "immigration-lawyer",
    "title": "Any Immigration Lawyer Suggestion?",
    "image": "theImmigrationArchives.png",
    "year": 2012,
    "source": "Paul Biggar",
    "kind": "email"
  },
  {
    "id": "investor-updates",
    "title": "Investor Updates",
    "image": "investorUpdates.png",
    "year": 2012,
    "source": "Paul Graham",
    "kind": "email"
  },
  {
    "id": "help-wanted-moderate-hacker-news",
    "title": "Help Wanted: Moderate Hacker News",
    "image": "6kAMonth.png",
    "year": 2012,
    "source": "Paul Graham",
    "kind": "email"
  },
  {
    "id": "black-clouds",
    "title": "Black Clouds on the Horizon",
    "image": "blackClouds1of2.png",
    "year": 2012,
    "source": "Paul Graham",
    "kind": "email"
  },
  {
    "id": "black-clouds-2",
    "title": "Black Clouds on the Horizon (2 of 2)",
    "image": "blackClouds2of2.png",
    "year": 2012,
    "source": "Paul Graham",
    "kind": "email"
  },
  {
    "id": "too-much-fraud",
    "title": "Why You Want Ron Conway as an Investor",
    "image": "tooMuchFraud.png",
    "year": 2011,
    "source": "Paul Graham",
    "kind": "email"
  },
  {
    "id": "yuzu",
    "title": "Yuzu",
    "image": "yuzu.png",
    "year": 2011,
    "source": "Breck Yunits",
    "kind": "email"
  },
  {
    "id": "dubious",
    "title": "Very Dubious Reputation",
    "image": "dubious.png",
    "year": 2011,
    "source": "Paul Graham",
    "kind": "email"
  },
  {
    "id": "castes",
    "title": "Announcing ycstories",
    "image": "castes.jpeg",
    "year": 2011,
    "source": "Paul Graham",
    "kind": "email",
    "context": "https://x.com/breckyunits/status/2097352293083701534"
  },
  {
    "id": "trust-only-y-companies",
    "title": "Fwd: Equity Split Survey",
    "image": "trustOnlyYCompanies.png",
    "year": 2010,
    "source": "Paul Graham",
    "kind": "email"
  },
  {
    "id": "australia-humble-brag",
    "title": "Tom and Breck Turn 26",
    "image": "australiaHumbleBrag.png",
    "year": 2010,
    "source": "Drew Houston",
    "kind": "email"
  },
  {
    "id": "stealing-gmail-passwords",
    "title": "Try Etacts",
    "image": "stealingGmailPasswords.png",
    "year": 2010,
    "source": "Howie Liu",
    "kind": "email"
  },
  {
    "id": "should-we-fund-alex-andon",
    "title": "Should We Fund Alex Andon?",
    "image": "Al.jpeg",
    "year": 2009,
    "source": "Paul Graham",
    "kind": "email"
  },
  {
    "id": "why-no-favicon",
    "title": "Why No Favicon?",
    "image": "faviconWasTrueCauesOfAirbnbsSuccess.png",
    "year": 2009,
    "source": "Breck Yunits",
    "kind": "email"
  },
  {
    "id": "all-time-record-in-losing",
    "title": "All-Time Record in Losing",
    "image": "allTimeRecordInLosing.webp",
    "year": 2009,
    "source": "Paul Graham",
    "kind": "email",
    "context": "https://x.com/breckyunits/status/2095529950187327581"
  },
  {
    "id": "looking-young",
    "title": "Anyone an Undergrad or Just Graduated?",
    "image": "lookingYoung.png",
    "year": 2009,
    "source": "Jessica Livingston",
    "kind": "email"
  },
  {
    "id": "lunch-tomorrow",
    "title": "Lunch Tomorrow, 1pm",
    "image": "jessicaIsTrapped.png",
    "year": 2009,
    "source": "Paul Graham",
    "kind": "email"
  },
  {
    "id": "nudgepad-3-percent-club",
    "title": "NudgePad 3 Percent Club",
    "image": "nudgePad3PercentClub.pdf",
    "year": 2009,
    "source": "GIGGGS, Inc.",
    "kind": "pdf"
  },
  {
    "id": "probably-significant",
    "title": "Anyone Using Google App Engine?",
    "image": "probablySignificant.png",
    "year": 2009,
    "source": "Paul Graham",
    "kind": "email"
  },
  {
    "id": "sketchy",
    "title": "Credit Card Processing and SSL",
    "image": "sketchy.png",
    "year": 2009,
    "source": "Daniel Kluesing",
    "kind": "email"
  },
  {
    "id": "robot-room",
    "title": "Wireless Setup and the Robot Room",
    "image": "robotRoom.png",
    "year": 2009,
    "source": "Trevor Blackwell",
    "kind": "email"
  },
  {
    "id": "didnt-bother",
    "title": "Next Week's Schedule",
    "image": "didntBother.png",
    "year": 2009,
    "source": "Kate Courteau",
    "kind": "email"
  },
  {
    "id": "dinner-tomorrow",
    "title": "Dinner Tomorrow",
    "image": "bizBringsJack.png",
    "year": 2009,
    "source": "Jessica Livingston",
    "kind": "email",
    "context": "https://x.com/breckyunits/status/2104957684516827352"
  },
  {
    "id": "airbooze-and-breakfast",
    "title": "AirBooze & Breakfast Pre-Inauguration Bash",
    "image": "airboozeAndBreakfast.png",
    "year": 2009,
    "source": "Joe Gebbia",
    "kind": "email"
  },
  {
    "id": "forlorn-canadians",
    "title": "Forlorn Canadians Seek Ride Tomorrow",
    "image": "topSecretMountainLocation.png",
    "year": 2009,
    "source": "Daniel Gackle",
    "kind": "email",
    "context": "https://x.com/breckyunits/status/2102795097599541290"
  },
  {
    "id": "airbnb-secret-weapon",
    "title": "The Airbnb Craigslist Secret Weapon",
    "image": "airbnbSecretWeapon.png",
    "year": 2009,
    "kind": "screenshot"
  },
  {
    "id": "breck-chesky",
    "title": "Take Part in Workshop, $500 Compensation",
    "image": "breckChesky.webp",
    "year": 2008,
    "source": "Joe Gebbia",
    "kind": "email"
  },
  {
    "id": "emails-with-goat",
    "title": "Open Library Project Help",
    "image": "emailsWithGoat.png",
    "year": 2008,
    "source": "Breck Yunits",
    "kind": "email"
  },
  {
    "id": "failures",
    "title": "Delaying Talking to Us Predicts Failure",
    "image": "failures.jpeg",
    "year": 2008,
    "source": "Paul Graham",
    "kind": "email",
    "context": "https://x.com/breckyunits/status/2096777641592573961"
  },
  {
    "id": "the-goat",
    "title": "Aaron Swartz Memorial Bust",
    "image": "theGoat.png",
    "kind": "photo"
  },
  {
    "id": "hot-girls-of-yc",
    "title": "Hot Girls of Y Combinator",
    "image": "hotGirlsOfYC.jpg",
    "kind": "meme"
  },
  {
    "id": "shark-tank",
    "title": "Do Not Go on the Shark Tank",
    "image": "sharkTank.png",
    "kind": "screenshot"
  },
  {
    "id": "whos-kevin-tom",
    "title": "So Far We Have: Attendee List",
    "image": "whosKevinTom.png",
    "kind": "screenshot"
  }
]