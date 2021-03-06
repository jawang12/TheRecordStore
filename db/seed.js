const db = require('APP/db')

const seedAlbums = () => db.Promise.map([
  {title: 'Welcome to Flavortown', artist: 'Guy Fieri', genre: 'Miscellaneous', release_year: '2010', description: 'The greatest culinary experience ever.', cost: 30, quantity_available: 2, image_front: './images/album_covers/guy-fieri-front.png', image_back: './images/album_covers/guy-fieri-back.jpg'},
  {title: 'Funeral', artist: 'Arcade Fire', genre: 'Indie Rock', release_year: '2004', description: `The Arcade Fire's debut LP is a glorious, theatrical explosion of strings, horns, xylophones, accordions, and passionate, multi-voiced verses. Simultaneously sad, romantic and celebratory, the album's emotional strength combined with the sheer magnitude of its sound made "Funeral" truly unlike anything before it and inspired a legion of copycat acts that are still trying to catch up`, cost: 30, quantity_available: 2, image_front: './images/album_covers/ArcadeFireFuneralCover.jpg', image_back: './images/album_covers/Arcade-Fire-Funeral-180-Gram-Vinyl.jpg'},
  {title: 'Kid A', artist: 'Radiohead', genre: 'Alternative Rock', release_year: '2000', description: `"Kid A" -- the follow-up to Radiohead's 1997's post-modern alt-rock classic "OK Computer" -- obliterated many people's notion of rock music from the fuzzy first tones of "Everything In Its Right Place." Driven by effects and fronted by Thom Yorke's oft-distorted vocals, "Kid A" was experimental and abstract, rooted in complex, mind-blowing electronic soundscapes.`, cost: 30, quantity_available: 2, image_front: './images/album_covers/kid-a-front.jpg', image_back: './images/album_covers/kid-a-back.jpg'},
  {title: 'Is This It', artist: 'Strokes', genre: 'Indie Rock', release_year: '2001', description: `New York band the Strokes struck a post-9/11 chord with a confident and refreshing rock record that reflected the frantic, urgent angst of a city in transition. Featuring the singles "Hard To Explain" and "Last Nite," "Is This It" took its cues from artists like the Stooges and Television and blew through the indie-rock landscape like a blast of fresh air.`, cost: 20, quantity_available: 1, image_front: './images/album_covers/strokes-front.png', image_back: './images/album_covers/strokes-back.jpg'},
  {title: 'Yankee Hotel Foxtrot', artist: 'Wilco', genre: 'Alternative Rock', release_year: '2002', description: `"Yankee Hotel Foxtrot" was Wilco's first record with drummer Glenn Kotche and last with multi-instrumentalist Jay Bennett. The experimentally leaning result got the band dropped from Reprise Records, yet found them a new home on Nonesuch. Scattered electronics and noisy guitars added to Wilco's already-sharp pop sensibility, and helped produce the group's finest.`, cost: 30, quantity_available: 2, image_front: './images/album_covers/yankee-front.jpg', image_back: './images/album_covers/yankee-back.jpg'},
  {title: 'Back to Black', artist: 'Amy Winehouse', genre: 'Soul', release_year: '2007', description: `On "Back To Black," British diva Amy Winehouse belted out intensely personal tunes about a failing relationship and her soon-to-be-infamous association with drugs and alcohol. With producers Mark Ronson and Salaal Remi giving the album a classic soul sheen and Brooklyn's Dap Kings providing blazing horns riffs, Winehouse's intoxicating vocal prowess and wit were at the forefront long before her personal problems took over the spotlight.`, cost: 30, quantity_available: 2, image_front: './images/album_covers/amy-front.png', image_back: './images/album_covers/amy-back.jpg'},
  {title: 'The Blueprint', artist: 'Jay-Z', genre: 'Hip hop', release_year: '2001', description: `One of Jay-Z's most celebrated albums to date, "The Blueprint" offered a balanced blend of radio-friendly hits ("Izzo (H.O.V.A)," "Hola' Hovito") and soulful productions ("Song Cry," "Heart of the City"). Helmed by beatmakers Kanye West and Just Blaze, most tracks were fueled with stirring vocal samples by the likes of the Doors, David Bowie and the Jackson 5, to list a few. In addition, the album included a feud-fueling dis to Queensbridge rapper Nas ("Takeover") and a collaboration with Eminem ("Renegade"), confirming the rapper's legendary status in hip-hop.`, cost: 12, quantity_available: 5, image_front: './images/album_covers/jayz-front.jpg', image_back: './images/album_covers/jayz-back.jpg'},
  {title: 'Rainbows', artist: 'Radiohead', genre: 'Alternative Rock', release_year: '2007', description: `Initially released through Radiohead's Web site on an industry damning pay-what-you-want scale, "In Rainbows" was simultaneously gentle and spastic, otherworldly and grounded. Undoubtedly the band's strongest effort since 2000's "Kid A," "In Rainbows" incorporated startlingly human lyrics with classic incarnations of the band's fuzzy guitars, ambient backdrops and unconventional time signatures.`, cost: 9, quantity_available: 2, image_front: './images/album_covers/rainbows-front.jpg', image_back: './images/album_covers/rainbows-back.jpg'},
  {title: 'The Marshall Mathers LP', artist: 'Eminem', genre: 'Hip hop', release_year: '2000', description: `Eminem's introspective third record played down his glib Slim Shady persona and painted a more transparent picture of the man behind the moniker. With equal parts vocal fluidity and vulgarity, "The Marshall Mathers LP" was dark, as Em rapped about dealing with newfound fame and conflicts with his mother and ex-wife, yet catchy enough to connect with Middle-American ears.`, cost: 15, quantity_available: 6, image_front: './images/album_covers/mm-front.jpg', image_back: './images/album_covers/mm-back.jpg'},
  {title: 'Elephant', artist: 'The White Stripes', genre: 'Indie Rock', release_year: '2003', description: `The White Stripes' major-label debut introduced an explosive, bottom-heavy sound that signaled a departure from the band's sparse guitar-and-drums formula. Jack White's amp-ripping guitar work stayed in tact as the band experimented with kinetic bass rhythms ("Seven Nation Army"), lithe piano melodies ("I Want To Be The Boy"), and Meg White's vocals ("In The Cold, Cold Night"), all of which helped the Stripes grow from indie icons into arena-rocking superstars.`, cost: 10, quantity_available: 10, image_front: './images/album_covers/elephant-front.png', image_back: './images/album_covers/elephant-back.jpg'}
], singleAlbum => db.model('album').create(singleAlbum))

const seedUsers = () => db.Promise.map([
  {firstName: 'Guy', lastName: 'Fieri', email: 'ddd@example.com', password: '1234', isAdmin: true},
  {firstName: 'Barack', lastName: 'Obama', email: 'barack@example.gov', password: '1234', isAdmin: false},
], user => db.model('users').create(user))

//needs items array
const seedOrder = () => db.Promise.map([
  {date_created: 'Sun Jan 15 2017', date_shipped: 'Mon Jan 16 2017', date_delivered: 'Tue Jan 17 2017', total: 150, items: [{title: 'Welcome to Flavortown', quantity:2}, {title: 'Funeral', quantity:3}], status:'completed', user_id: 2},
  {date_created: 'Sun Jan 15 2017', date_shipped: 'Pending', date_delivered: 'Pending', total: 150, items: [{title: 'Welcome to Flavortown', quantity:2}, {title: 'Funeral', quantity:3}], status:'completed', user_id: 2},
  {date_created: 'Sun Jan 15 2017', date_shipped: 'Mon Jan 16 2017', date_delivered: 'Pending', total: 150, items: [{title: 'Welcome to Flavortown', quantity:2}, {title: 'Funeral', quantity:3}], status:'completed', user_id: 2},
  {date_created: 'Fri Dec 16 2016', date_shipped: 'Pending', date_delivered: 'Pending', total: 150, items: [{title: 'Welcome to Flavortown', quantity:2}, {title: 'Funeral', quantity:3}], status:'created', user_id: 2},
  {date_created: 'Tue Jan 17 2016', date_shipped: 'Pending', date_delivered: 'Pending', total: 150, items: [{title: 'Welcome to Flavortown', quantity:2}, {title: 'Funeral', quantity:3}], status:'cancelled', user_id: 1},
  {date_created: 'Wed Jan 18 2016', date_shipped: 'Pending', date_delivered: 'Pending', total: 150, items: [{title: 'Welcome to Flavortown', quantity:2}, {title: 'Funeral', quantity:3}], status:'processing', user_id: 1}
], order => db.model('order').create(order))


const seedReviews = () => db.Promise.map([
  {description: 'Worst album ever', stars: 1, album_id: 1},
  {description: 'Best album ever', stars: 5, album_id: 2},
  {description: 'Worst album ever', stars: 1, album_id: 3},
  {description: 'Best album ever', stars: 5, album_id: 4},
  {description: 'Worst album ever', stars: 1, album_id: 5},
  {description: 'Best album ever', stars: 5, album_id: 6},
  {description: 'Best album ever', stars: 5, album_id: 7}
], review => db.model('album_review').create(review))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedAlbums)
  .then(albums => console.log(`Seeded ${albums.length} albums OK`))
  .then(seedOrder)
  .then(orders => console.log(`Seeded ${orders.length} orders OK`))
  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
