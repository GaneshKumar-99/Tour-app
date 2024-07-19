import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  constructor() {}

  ChennaiPlace() {
    return [
      {
        id: 1,
        title: 'Central Railway Station',
        text: "A Historic Transport Hub South India's rail nexus fusing heritage and modernity.",
        img: './assets/images/chennai/central-railway-station.jpg',
        altname: 'central-railway-station',
      },
      {
        id: 2,
        title: 'Madras Marina Beach',
        text: "Chennai's Marina:  One Of The Longest Urban Beaches In The World, along Bay of Bengal.",
        img: './assets/images/chennai/marina beach.jpg',
        altname: 'marina beach',
      },
      {
        id: 3,
        title: 'Express Avenue Mall',
        text: "Chennai's Largest One-stop Hub for  Diverse Shopping, Entertainment Experiences.",
        img: './assets/images/chennai/express avenue mall.jpg',
        altname: 'express avenue mall',
      },
      {
        id: 4,
        title: 'Parthasarathy Temple',
        text: "Historically Significant Temple: Intricate Dravidian Architecture, Devoted to Lord Krishna.",
        img: './assets/images/chennai/arulmigu thiruvallikeni parthasarathy temple.jpg',
        altname: 'arulmigu parthasarathy temple',
      },
      {
        id: 5,
        title: 'Vadapalani Murugan Temple',
        text: "Chennai's pilgrimage site with unique Lord Murugan deity and chariot festival.",
        img: './assets/images/chennai/vadapalani murugan temple.jpg',
        altname: 'Vadapalani Murugan Temple',
      },
      {
        id: 6,
        title: 'T-Nagar Ranganathan Street',
        text: "Vibrant street markets, diverse retail: Chennai's bustling shopping destination.",
        img: './assets/images/chennai/t nagar ranganathan street.jpg',
        altname: 't nagar ranganathan street',
      },
      {
        id: 7,
        title: 'VGP Marine Kingdom',
        text: "VGP Marine Kingdom: immersive underwater and marine-themed amusement park.",
        img: './assets/images/chennai/vgp marine kingdom.jpg',
        altname: 'vgp marine kingdom',
      },
      {
        id: 8,
        title: 'VGP Frozen Kingdom',
        text: "Chennai's VGP Frozen Kingdom: enchanting ice-themed amusement for all ages.",
        img: './assets/images/chennai/vgp snow kingdom.jpg',
        altname: 'vgp snow kingdom',
      },
    ];
  }

  MaduraiPlace() {
    return [
      {
        id: 9,
        title: 'Madurai Meenakshi Temple',
        text: 'Dravidian marvel: 14 vibrant gopurams, intricate sculptures, stunning masterpiece.',
        img: './assets/images/madurai/madurai-meenakshi-temple.jpg',
        altname: 'madurai-meenakshi-temple',
      },
      {
        id: 10,
        title: 'Gandhi Memorial Museum',
        text: "Gandhi's Historic Site: Showcases Independence Movement, Personal Belongings.",
        img: './assets/images/madurai/gandhi memorial museum.jpg',
        altname: 'Gandhi Memorial Museum',
      },
      {
        id: 11,
        title: 'Arulmigu Alagarkoil Temple',
        text: 'Exquisite Dravidian architecture, sacred abode dedicated to Lord Vishnu, Alagar form.',
        img: './assets/images/madurai/alagarkoil-temple-and.jpg',
        altname: 'alagarkoil-temple',
      },
      {
        id: 12,
        title: 'Kutladampatti Falls',
        text: 'Stunning cascades, lush greenery, serene natural retreat, refreshing ambiance.',
        img: './assets/images/madurai/kutladampatti-falls.jpg',
        altname: 'kutladampatti-falls',
      },
      {
        id: 13,
        title: 'Solamalai Murugan Temple',
        text: 'Renowned temple: serene hilltop, vibrant festivals, celebrates Lord Murugan.',
        img: './assets/images/madurai/pazhamudhir-solai.jpg',
        altname: 'pazhamudhir-solai',
      },
      {
        id: 14,
        title: 'Goripalayam Dargah',
        text: 'Goripalayam Dargah: large mosque, revered shrine, historical significance, Madurai, India.',
        img: './../assets/images/madurai/goripalayam dargah.jpg',
        altname: 'goripalayam dargah',
      },
      {
        id: 15,
        title: "St.Mary's Cathedral Church",
        text: "Madurai's St. Mary's Cathedral: renowned Gothic architecture, historical significance.",
        img: "./assets/images/madurai/st.mary's cathedral church.jpg",
        altname: "st.mary's cathedral church",
      },
      {
        id: 16,
        title: 'Thirumalai Nayakar Mahal',
        text: "Madurai's splendid Indo-Saracenic architecture blends Dravidian, Islamic styles beautifully.",
        img: './assets/images/madurai/thirumalai nayakar mahal.jpg',
        altname: 'thirumalai nayakar mahal',
      },
    ];
  }

  ThanjavurPlace() {
    return [
      {
        id: 17,
        img: './assets/images/thanjavur/gangaikondacholapuram.jpg',
        text: 'Grand Temple Echoing Brihadeshwara, Showcasing Chola Architecture Brilliance.',
        title: 'Gangaikondacholapuram',
        altname: 'gangaikondacholapuram',
      },
      {
        id: 18,
        img: './assets/images/thanjavur/manora-fort.jpg',
        text: "Manora Fort: Thanjavur's Unique Hexagonal Tower, Rich Historical Importance.",
        title: 'Manora Fort Thanjavur',
        altname: 'manora-fort',
      },
      {
        id: 19,
        img: './assets/images/thanjavur/punnainallur-mariamman.jpg',
        text: 'Renowned Hindu temple: Punnainallur Mariamman, vibrant festivals, Tamil Nadu.',
        title: 'Punnainallur Mariamman',
        altname: 'Punnainallur Mariamman',
      },
      {
        id: 20,
        img: './assets/images/thanjavur/royal palace and art gallery.jpg',
        text: 'Opulent fusion: regal history, artistic grandeur, majestic Royal Palace Gallery.',
        title: 'Royal Palace and Art Gallery',
        altname: 'royal palace and art gallery',
      },
      {
        id: 21,
        img: './assets/images/thanjavur/thanjavur-brihadeeshwara temple.jpg',
        text: "UNESCO site: towering vimana, symbolizing Chola dynasty's architectural brilliance.",
        title: 'Brihadeeshwara Temple',
        altname: 'thanjavur-brihadeeshwara temple',
      },
      {
        id: 22,
        img: './assets/images/thanjavur/srinivase ramanujan house.jpg',
        text: 'Historical site honors Indian mathematician, showcases his contributions to mathematics.',
        title: 'Srinivase Ramanujan House',
        altname: 'srinivase ramanujan house',
      },
      {
        id: 23,
        img: './assets/images/thanjavur/swami malai temple.jpg',
        text: 'Swami Malai Temple: Famous for Detailed Architecture, Lord Murugan\'s Abode on Hill.',
        title: 'Arulmigu Swami Malai Temple',
        altname: 'swami malai temple',
      },
      {
        id: 24,
        img: './assets/images/thanjavur/the serfoji sarasvati mahal library.jpg',
        text: 'Serfoji Sarasvati Mahal Library: renowned for ancient manuscripts, literary treasures.',
        title: 'Serfoji Sarasvati Mahal Library',
        altname: 'the serfoji sarasvati mahal library',
      },
    ];
  }

  CovaiPlace() {
    return [
      {
        id: 25,
        title: 'The Adiyogi Statue',
        text: 'the Adiyogi Statue stands as a manifestation of spirituality and cultural significance.',
        img: './assets/images/covai/the-adiyogi-statue-is.jpg',
        altname: 'the-adiyogi-statue',
      },
      {
        id: 26,
        title: 'Brookefields Mall',
        text: 'Brookfields Mall: Diverse retail paradise, high-end fashion, delightful culinary array.',
        img: './assets/images/covai/brookefields mall.jpg',
        altname: 'brookefields mall',
      },
      {
        id: 27,
        title: 'Black Thunder',
        text: 'Renowned water park: exhilarating water rides, immersive experience for adventure-seekers.',
        img: './assets/images/covai/black-thunder-theme-park.jpg',
        altname: 'black-thunder-theme-park',
      },
      {
        id: 28,
        title: 'Codissia Complex',
        text: 'Codissia Complex: Versatile trade fair, hosts industrial events, fosters innovation.',
        img: './assets/images/covai/codissia trade fair complex.jpg',
        altname: 'codissia trade fair complex',
      },
      {
        id: 29,
        title: 'Dhyanalinga Temple',
        text: 'Dhyanalinga Temple: Unique meditative space, powerful atmosphere for self-discovery.',
        img: './assets/images/covai/dhyanalinga-temple.jpg',
        altname: 'dhyanalinga-temple',
      },
      {
        id: 30,
        title: 'Kovai Kutralam Falls',
        text: 'Renowned falls: captivating beauty, refreshing, revitalizing waters, rejuvenating atmosphere.',
        img: './assets/images/covai/kovai-kutralam-falls.jpg',
        altname: 'kovai-kutralam-falls',
      },
      {
        id: 31,
        title: 'Marudamalai Temple',
        text: 'Marudamalai Temple is considered to be one of the six holy shrines of Murugan',
        
        img: './assets/images/covai/marudamalai-temple.jpg',
        altname: 'marudamalai-murugan-temple',
      },
      {
        id: 32,
        title: 'Vellingiri Hill Temple',
        text: 'The temple is part of the Saptakailash, which are considered to be the abodes of Lord Shiva.',
        img: './assets/images/covai/vellingiri hill temple.jpg',
        altname: 'vellingiri hill temple',
      },
    ];
  }

  KanchipuramPlace() {
    return [
      {
        id: 33,
        img: './assets/images/kanchipuram/kamakshi amman temple.jpg',
        altname: 'kamakshi amman temple',
        title: 'kamakshi amman temple',
        text: 'It is known for its religious significance, stunning architecture, and rich history.',
      },
      {
        id: 34,
        img: './assets/images/kanchipuram/sri ulagalandar temple.jpg',
        altname: 'sri ulagalandar temple',
        title: 'sri ulagalandar temple',
        text: "Sri Ulagalandar Temple: Famous for 11-headed Snake Sculpture, Symbolize Vishnu's Protection.",
      },
      {
        id: 35,
        img: './assets/images/kanchipuram/varadaraja perumal temple.jpg',
        altname: 'varadaraja perumal temple',
        title: 'varadaraja perumal temple',
        text: 'Varadaraja Perumal Temple: Renowned for 1000-pillared hall, exquisite architecture.',
      },
      {
        id: 36,
        img: './assets/images/kanchipuram/chitragupta swamy temple.jpg',
        altname: 'chitragupta swamy temple',
        title: 'chitragupta swamy temple',
        text: "Chitragupta Swamy Temple: Divine recorder, unique pilgrimage site in Kanchipuram.",
      },
      {
        id: 37,
        img: './assets/images/kanchipuram/ekambareswarar temple.jpg',
        altname: 'ekambareswarar temple',
        title: 'ekambareswarar temple',
        text: 'Ekambareswarar Temple: Known for Large Complex, Sacred Wish-Granting Mango Tree.',
      },
      {
        id: 38,
        img: './assets/images/kanchipuram/kailasanatha temple.jpg',
        altname: 'kailasanatha temple',
        title: 'kailasanathar temple',
        text: 'Renowned for its ancient and well-preserved Dravidian architecture in South India.',
      },
      {
        id: 39,
        img: './assets/images/kanchipuram/thennangur panduranga temple.jpg',
        altname: 'thennangur panduranga temple',
        title: 'panduranga temple',
        text: 'Distinctive Architecture, Festivals Draw Devotees for Spiritual and Cultural Exploration.',
      },
      {
        id: 40,
        img: './assets/images/kanchipuram/vedanthangal-bird-sanctuary.jpg',
        altname: 'vedanthangal-bird-sanctuary',
        title: 'vedanthangal bird sanctuary',
        text: 'Vedanthangal Bird Sanctuary: Hosts thousands of migratory birds, captivating spectacle.',
      },
    ];
  }

  ThiruvannamalaiPlace(){
    return [
      {
        id:41,
        img:'./assets/images/thiruvannamalai/arunachaleshwara temple.jpg',
        altname:'arunachaleshwara temple',
        title:'Arunachaleshwara Temple',
        text:'Arunachaleshwara Temple: Linked to Lord Shiva, Celebrated for Kartikai Deepam Festival.',
      },
      {
        id:42,
        img:'./assets/images/thiruvannamalai/parvathamalai mountain.jpg',
        altname:'parvathamalai mountain',
        title:'Parvathamalai Mountain',
        text:'Devotees trek across  hilly area to darshan see Lord Shiva amidst medicinal plants.',
      },
      {
        id:43,
        img:'../../assets/images/thiruvannamalai/periyanayagi temple dvm.jpeg',
        altname:'periyanayagi temple dvm',
        title:'Periyanayagi Amman Temple',
        text:"Devikapuram Periyanayagi Temple: Sacred pond, water never overflows, divine blessings.",
      },
      {
        id:44,
        img:'./assets/images/thiruvannamalai/sri varadaraja perumal temple.jpg',
        altname:'sri varadaraja perumal temple',
        title:'Sri Varadaraja Perumal Temple',
        text:"Sri Varadaraja Perumal Temple: Deity's reclining posture grants eternal bliss to its devotees..",
      },
      {
        id:45,
        img:'./assets/images/thiruvannamalai/ramar templendm.jpeg',
        altname:'ramar templendm',
        title:'Nedunganum Ramar Temple',
        text:'Ramar Temple: Exquisite architectural beauty, intricate carvings, remarkable craftsmanship.',  
      },
      {
        id:46,
        img:'./assets/images/thiruvannamalai/sathanur reservoir.jpg',
        altname:'sathanur reservoir',
        title:'Sathanur Reservoir',
        text:'Sathanur Reservoir: Scenic beauty, vital water source for irrigation, drinking.',
      },
      {
        id:47,
        img:'./assets/images/thiruvannamalai/sattanur-dam.jpg',
        altname:'sattanur-dam',
        title:'Sattanur Dam',
        text:'Sattanur Dam: Picturesque surroundings, crucial for irrigation, drinking water supply.',
      },
      
      {
        id:48,
        img:'./assets/images/thiruvannamalai/virupaksha cave.jpg',
        altname:'virupaksha cave',
        title:'Virupaksha Cave',
        text:"Thiruvannamalai Virupaksha Cave: Sacred site linked to sage Ramana Maharshi's teachings.",
      },
    ];
  }

  VellorePlace(){
    return [
      {
        id: 49,
        title:'Vellore Fort',
        text:'Vellore Fort: Notable Moat, Historic Architecture, Cultural Significance in Tamil Nadu.',
        altname:'Vellore Fort',
        img:'./assets/images/vellore/vellore-fort.jpg',
      },
      {
        id: 50,
        title:'Golden Temple',
        text:'Golden Temple: Sikh pilgrimage site, stunning golden architecture, spiritual significance.',
        altname:'golden-temple',
        img:'./assets/images/vellore/sripuram-golden-temple.jpg',
      },
      {
        id: 51,
        title:'Mahadev Hill Temple',
        text:'Mahadev Hill Temple: Tranquil hilltop sanctuary, revered for spiritual retreats.',
        altname:'Mahadev Hill Temple',
        img:'./assets/images/vellore/mahadev-hill-temple.jpg',
      },
      {
        id: 52,
        title:'Mordhana Dam',
        text:'Mordhana Dam: Essential water reservoir, supports irrigation and local communities.',
        altname:'Mordhana Dam',
        img:'./assets/images/vellore/mordhana dam.jpg',
      },
      {
        id: 53,
        title:'Amirthi Zoological Park',
        text:'Amirthi Zoological Park: Nature reserve, diverse wildlife, educational & recreational activities.',
        altname:'Amirthi Zoological Park',
        img:'./assets/images/vellore/amirthi zoological park.jpg',
      },
      {
        id: 54,
        title:'Arulmigu Balamurugan Kovil',
        text:'Arulmigu Balamurugan Kovil: Majestic temple dedicated to Lord Murugan, Vellore landmark.',
        altname:'golden-temple',
        img:'./assets/images/vellore/arulmigu balamurugan ratnagiri tirukkovil.jpg',
      },
      {
        id: 55,
        title:'Jalakandeswarar Temple',
        text:'Jalakandeswarar Temple: Ancient Dravidian architecture, sacred shrine dedicated to Shiva.',
        altname:'Jalakandeswarar Temple',
        img:'./assets/images/vellore/jalakandeswarar temple.jpg',
      },
      {
        id: 56,
        title:'Vallimalai Subramanyar',
        text:'Vallimalai Subramanyar Temple: Hilltop Pilgrimage Site Devoted to Lord Murugan.',
        altname:'Vallimalai-Subramanyar',
        img:'./assets/images/vellore/vallimalai subramanyar temple.jpg',
      },

      
    ]
  }

  NilgiriPlace(){
    return[
      {
        id: 57,
        img: './assets/images/nilgiri/beautiful-botanical-garden.jpg',
        altname:'beautiful-botanical-garden',
        title:'Botanical Garden',
        text:"Government Botanical Garden: Nilgiri's floral paradise, diverse plant species, scenic beauty.",
      },
      {
        id: 58,
        img: './assets/images/nilgiri/doddabetta peak.jpg',
        altname: 'doddabetta peak',
        title: 'Doddabetta Peak',
        text: "Doddabetta Peak: Nilgiri's highest point, breathtaking views, popular tourist destination.",
      },
      {
        id: 59,
        img: './assets/images/nilgiri/pykara lake.jpg',
        altname: 'pykara lake',
        title: 'Pykara Lake',
        text: 'Pykara Lake: Serene reservoir, scenic boat rides, surrounded by lush greenery.',
      },
      {
        id: 60,
        img: './assets/images/nilgiri/rose garden.jpg',
        altname: 'rose garden',
        title: 'Rose Garden',
        text: 'Rose Garden: Beautiful floral haven, vibrant blooms, popular tourist attraction.',
      },
      {
        id:61,
        img: './assets/images/nilgiri/sims park.jpg',
        altname: 'sims park',
        title: 'Sims Park',
        text: 'Sims Park: Lush botanical garden, diverse plant species, tranquil ambiance.',
      },
      {
        id: 62,
        img: './assets/images/nilgiri/mudumalai-national-park.jpg',
        altname: 'mudumalai-national-park',
        title: 'Mudumalai National Park',
        text: 'Mudumalai National Park: Rich biodiversity, diverse wildlife, lush forest landscapes.',
      },
      {
        id: 63,
        img: './assets/images/nilgiri/ooty-lake.jpg',
        altname: 'ooty-lake',
        title: 'Ooty Lake',
        text: 'Ooty Lake: Picturesque water body, boating, scenic views, recreational activities.',
      },
      {
        id: 64,
        img: './assets/images/nilgiri/pykara falls.jpg',
        altname: 'pykara falls',
        title: 'Pykara Falls',
        text: 'Pykara Falls: Majestic cascade, surrounded by lush greenery, popular tourist spot.',
      },
    ]
  }

  CoonoorPlace(){
    return [
      {
        id: 65,
        img: './assets/images/coonoor/dolphin-s-nose.jpg',
        altname:'dolphin-s-nose',
        title:'Dolphin Nose',
        text:"Dolphin's Nose: Iconic viewpoint, breathtaking panoramic vistas, Coonoor's must-visit spot.",
      },
      {
        id: 66,
        img: './assets/images/coonoor/highfield-tea-factory.jpg',
        altname:'highfield-tea-factory',
        title:'Highfield Tea Factory',
        text:"Highfield Tea Factory: Esteemed tea facility, Coonoor's renowned attraction.",
      },
      {
        id: 67,
        img: './assets/images/coonoor/lamb-s-rock-view.jpg',
        altname:'lamb-s-rock-view',
        title:'Lamb Rock View',
        text:"Lamb's Rock View: Scenic overlook, panoramic vistas, popular tourist destination in Coonoor.",
      },
      {
        id: 68,
        img: './assets/images/coonoor/rallia-dam.jpg',
        altname:'rallia-dam',
        title:'Rallia Dam',
        text:'Rallia Dam: Essential water reservoir, scenic surroundings, vital for irrigation.',
      },
      {
        id: 69,
        img: './assets/images/coonoor/sim-s-park.jpg',
        altname:'sim-s-park',
        title:'Sim Park',
        text:"Sims Park: Serene botanical garden, Coonoor's iconic attraction, diverse plant species.",
      },
      {
        id: 70,
        img: './assets/images/coonoor/tiger-hill-cemetery.jpg',
        altname:'tiger-hill-cemetery',
        title:'Tiger Hill Cemetery',
        text:'Tiger Hill Cemetery: Historic burial ground, British-era graves, scenic hillside location.',
      },
      {
        id: 71,
        img: './assets/images/coonoor/tranquilitea goument nilgiri teas.jpg',
        altname:'tranquilitea goument nilgiri teas',
        title:'Tranquilitea Nilgiri Teas',
        text:'Tranquilitea Nilgiri Teas: Premium tea brand, known for exquisite Nilgiri tea varieties.',
      },
      {
        id: 72,
        img: './assets/images/coonoor/wellinton-glake.jpg',
        altname:'wellinton-glake',
        title:'Wellinton Lake',
        text:'Wellington Lake: Military maintained, boating available, surrounded by scenic park.',
      },
    ]
  }

  SalemPlace(){
    return [
      {
        id: 73,
        img: './assets/images/salem/koottai-mariamman-temple.jpg',
        altname:'kottai mariamman temple',
        title:'Kottai Mariamman Temple',
        text:"Kottai Mariamman Temple: Salem's Sacred Shrine for Goddess Mariamman.",
      },
      {
        id: 74,
        img: './assets/images/salem/kurumpapatti-zoological.jpg',
        altname:'kurumpapatti zoological',
        title:'Kurumpapatti Zoological',
        text:"Kurumpapatti Zoo: Salem's wildlife sanctuary, diverse animal species, educational exhibits.",
      },
      {
        id: 75,
        img: './assets/images/salem/linga-bhairavi-temple.jpg',
        altname:'linga-bhairavi-temple',
        title:'Linga Bhairavi Temple',
        text:"Linga Bhairavi Temple: Spiritual sanctuary, divine presence, Seekers' abode.",
      },
      {
        id: 76,
        img: './assets/images/salem/mettur-dam.jpg',
        altname:'mettur dam',
        title:'Mettur Dam',
        text:'Mettur Dam: Iconic water reservoir, vital for irrigation, scenic surroundings.',
      },
      {
        id: 77,
        img: './assets/images/salem/shiva-temple-1008.jpg',
        altname:'shiva temple 1008',
        title:'1008 Shiva Temple',
        text:'1008 Shiva Temple: Sacred complex, multitude of Shiva shrines, spiritual pilgrimage.',
      },
      {
        id: 78,
        img: './assets/images/salem/siddhar-temple.jpg',
        altname:'siddhar temple',
        title:'Siddhar Temple',
        text:'Siddhar Temple: Spiritual center, revered for Siddha tradition, pilgrimage destination.',
      },
      {
        id: 79,
        img: './assets/images/salem/skandasramam-temple.jpg',
        altname:'skandasramam temple',
        title:'Skandasramam Temple',
        text:'Skandasramam Temple: Sacred abode, dedicated to Lord Skanda, pilgrimage site.',
      },
      {
        id: 80,
        img: './assets/images/salem/yercaud.jpg',
        altname:'Yercaud',
        title:'Yercaud',
        text:'Yercaud: Charming hill station, lush greenery, scenic viewpoints, tranquil ambiance.',
      },

    ]
  }

  NagapattinamPlace(){
    return [
      {
        id: 81,
        img: './assets/images/nagapattinam/kodikkarai-beach.jpg',
        altname:'kodikkarai-beach',
        title:'Kodikkarai Beach',
        text:"Kodikkarai Beach: Nagapattinam's coastal gem, pristine sands, serene ambiance.",
      },
      {
        id: 82,
        img: './assets/images/nagapattinam/natraja-konerirajapuram.jpg',
        altname:'natraja-konerirajapuram',
        title:'Natraja Konerirajapuram',
        text:"Natraja Konerirajapuram: Ancient Shrine, Spiritual Pilgrimage Site for Nataraja Deity.",
      },
      {
        id: 83,
        img: './assets/images/nagapattinam/point-calimere-lighthouse.jpg',
        altname:'point-calimere-lighthouse',
        title:'Point Calimere Lighthouse',
        text:"Point Calimere Lighthouse: coastal landmark, scenic views of Bay of Bengal.",
      },
      {
        id: 84,
        img: './assets/images/nagapattinam/poompuhar-beach.jpg',
        altname:'poompuhar-beach',
        title:'Poompuhar Beach',
        text:"Poompuhar Beach: Tranquil coastline, scenic views, serene ambiance, popular destination.",
      },
      {
        id: 85,
        img: './assets/images/nagapattinam/silappathikara-art-gallery.jpg',
        altname:'silappathikara-art-gallery',
        title:'Silappathikara Art Gallery',
        text:"Silappathikara Art Gallery: Showcases Artworks, Cultural Significance, Artistic Heritage",
      },
      {
        id: 86,
        img: './assets/images/nagapattinam/soundararaja-perumal.jpg',
        altname:'soundararaja-perumal',
        title:'Soundararaja Perumal',
        text:"Soundararaja Perumal: Sacred deity, revered in Hindu tradition, pilgrimage destination.",
      },
      {
        id: 87,
        img: './assets/images/nagapattinam/the-ziegenbalg-house.jpg',
        altname:'the-ziegenbalg-house',
        title:'Ziegenbalg House',
        text:"Ziegenbalg House: Historic landmark, Danish missionary legacy, cultural heritage site.",
      },
      {
        id: 88,
        img: './assets/images/nagapattinam/vaitheeswaran-kovil.jpg',
        altname:'vaitheeswaran-kovil',
        title:'Vaitheeswaran Kovil',
        text:"Vaitheeswaran Kovil: Sacred temple, deity for healing, pilgrimage site in Tamil Nadu.",
      },
    ]
  }

  DindigulPlace(){
    return [
      {
        id: 89,
        img: './assets/images/dindigul/athoor-village.jpg',
        altname:'Athoor Village',
        title:'Athoor Village',
        text:"Athoor Village: Dindigul's Rural Charm with Scenic Landscapes and Cultural Heritage.",
      },
      {
        id: 90,
        img: './assets/images/dindigul/dindigul-fort.jpg',
        altname:'dindigul-fort',
        title:'Dindigul Fort',
        text:"Dindigul Fort: Historic Stronghold Offering Panoramic Views, Architectural Marvel.",
      },
      {
        id: 91,
        img: './assets/images/dindigul/kamarajar-lake.jpg',
        altname:'kamarajar-lake',
        title:'Kamarajar Lake',
        text:"Picturesque reservoir, serene surroundings, boating facilities, popular tourist spot.",
      },
      {
        id: 92,
        img: './assets/images/dindigul/pambar-falls.jpg',
        altname:'pambar-falls',
        title:'Pambar Falls',
        text:"Pambar Falls: Scenic cascade, lush greenery, natural beauty, popular tourist attraction.",
      },
      {
        id: 93,
        img: './assets/images/dindigul/silver-cascade-falls.jpg',
        altname:'silver-cascade-falls',
        title:'Silver Cascade Falls',
        text:"Silver Cascade Falls: Stunning Waterfall with Shimmering Cascades, Popular Tourist Spot.",
      },
      {
        id: 94,
        img: './assets/images/dindigul/sirumalai-reserved-forest.jpg',
        altname:'sirumalai-reserved-forest',
        title:'Sirumalai Reserved Forest',
        text:"Sirumalai Reserved Forest: Biodiversity Hotspot, Wildlife Sanctuary, Nature Lovers' Paradise",
      },
      {
        id: 95,
        img: './assets/images/dindigul/sri-kottai-mariamman-kovil.jpg',
        altname:'sri-kottai-mariamman-kovil',
        title:'Sri Kottai Mariamman Kovil',
        text:"Sri Kottai Mariamman Kovil: Sacred temple, spiritual significance, pilgrimage destination.",
      },
      {
        id: 96,
        img: './assets/images/dindigul/thadikombu-perumal-temple.jpg',
        altname:'thadikombu-perumal-temple',
        title:'Thadikombu Perumal Temple',
        text:"Thadikombu Perumal Temple: Ancient shrine, dedicated to Lord Vishnu, pilgrimage site.",
      },
    ]
  }

  ThoothukudiPlace(){
    return [
      {
        id: 97,
        img: './assets/images/thoothukudi/Alwarthirunagari Permual Temple.jpg',
        altname:'Alwarthirunagari Permual Temple',
        title:'Alwarthirunagari Temple',
        text:"Vishnu temple known for Nammalvar's birth, Vaishnavism, and architectural beauty.",
      },
      {
        id: 98,
        img: './assets/images/thoothukudi/Arulmigu Kalugasalamoorthy Temple.jpg',
        altname:'Arulmigu Kalugasalamoorthy Temple',
        title:'Kalugasalamoorthy Temple',
        text:"Renowned for its connection to the legendary Kalugasalamoorthy and festivals.",
      },
      {
        id: 99,
        img: './assets/images/thoothukudi/Arulmigu Subramaniya Swamy Temple.jpg',
        altname:'Arulmigu Subramaniya Swamy Temple',
        title:'Subramaniya Swamy Temple',
        text:"Famous for Murugan worship, festivals, and spiritual significance in Tamil Nadu.",
      },
      {
        id: 100,
        img: './assets/images/thoothukudi/Manapad Beach.jpg',
        altname:'Manapad Beach',
        title:'Manapad Beach',
        text:"Historical significance, scenic beauty, cultural heritage, and peaceful atmosphere.",
      },
      {
        id: 101,
        img: './assets/images/thoothukudi/our lady of snows basilica.jpg',
        altname:'our lady of snows basilica',
        title:'Our Lady of Snows Basilica',
        text:"Historic Marian pilgrimage site, architectural beauty, sacred religious significance.",
      },
      {
        id: 102,
        img: './assets/images/thoothukudi/sri subramanya swami devasthanam.jpg',
        altname:'sri subramanya swami devasthanam',
        title:'Subramanya Swami Temple',
        text:"Renowned Murugan temple, pilgrimage site, cultural festivities, spiritual significance.",
      },
      {
        id: 103,
        img: './assets/images/thoothukudi/sri-vaikuntam-temple.jpg',
        altname:'sri-vaikuntam-temple',
        title:'sri Vaikuntam Temple',
        text:"Sacred Vishnu temple, architectural beauty, religious rituals, spiritual significance",
      },
      {
        id: 104,
        img: './assets/images/thoothukudi/thiruchendur murugan temple.jpg',
        altname:'thiruchendur murugan temple',
        title:'Thiruchendur Murugan Temple',
        text:"Renowned Murugan temple, coastal location, sacred rituals, spiritual pilgrimage site.",
      },
    ]
  }

}
