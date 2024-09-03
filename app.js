// Expanded arrays of fictional data to construct UAP events
const locations = {
    "United States": ["Roswell, New Mexico", "Area 51, Nevada", "Pine Bush, New York", "The Mojave Desert, California", "Devil's Tower, Wyoming", "Sedona, Arizona", "Mount Shasta, California", "Lake Tahoe, Nevada", "Yellowstone National Park, Wyoming", "Yosemite National Park, California"],
    "England": ["Salisbury, England", "Somerset, England", "Avebury, England", "The Lake District, England", "Cornwall, England", "Yorkshire Moors, England"],
    "Scotland": ["Loch Ness, Scotland", "Edinburgh, Scotland", "Isle of Skye, Scotland", "Cairngorms National Park, Scotland", "Stirling, Scotland", "Outer Hebrides, Scotland"],
    "Germany": ["The Black Forest, Germany", "Neuschwanstein Castle, Germany", "Bavarian Alps, Germany", "Rothenburg ob der Tauber, Germany", "Brandenburg, Germany"],
    "Japan": ["Mount Fuji, Japan", "Aokigahara Forest, Japan", "Okinawa, Japan", "Shirakawa-go, Japan", "Hokkaido, Japan"],
    "France": ["Rennes-le-Château, France", "Brittany, France", "Normandy, France", "Provence, France", "Loire Valley, France"],
    "Mexico": ["Teotihuacan, Mexico", "Chichen Itza, Mexico", "Mexico City, Mexico", "Guadalajara, Mexico", "Monterrey, Mexico"],
    "Brazil": ["The Amazon Rainforest, Brazil", "Iguazu Falls, Brazil", "Pantanal, Brazil", "Rio de Janeiro, Brazil", "Chapada Diamantina, Brazil"],
    "Russia": ["Lake Baikal, Russia", "Moscow, Russia", "Kremlin, Russia", "Siberian Tundra, Russia", "St. Petersburg, Russia"],
    "Australia": ["The Tasmanian Wilderness, Australia", "Great Barrier Reef, Australia", "Uluru, Australia", "Sydney, Australia", "Blue Mountains, Australia"],
    "Argentina": ["Bariloche, Argentina", "Cordoba, Argentina", "Buenos Aires, Argentina", "Salta, Argentina", "Mendoza, Argentina"],
    "South Africa": ["Table Mountain, South Africa", "Kruger National Park, South Africa", "Drakensberg Mountains, South Africa", "Cape Town, South Africa", "Johannesburg, South Africa"],
    "India": ["Ladakh, India", "Rajasthan, India", "Kerala, India", "Himalayas, India", "Andaman Islands, India"],
    "Egypt": ["The Great Pyramids, Egypt", "Valley of the Kings, Egypt", "Siwa Oasis, Egypt", "Mount Sinai, Egypt", "Alexandria, Egypt"],
    "Chile": ["Easter Island, Chile", "Atacama Desert, Chile", "Patagonia, Chile", "Valparaiso, Chile", "Santiago, Chile"]
};

const dates = [
    "July 4, 1947", "November 18, 1952", "April 1, 1965", "October 31, 1978", "June 15, 1987",
    "August 19, 1995", "December 25, 2001", "March 20, 2007", "January 1, 2013", "October 31, 2020",
    "February 29, 1960", "May 5, 1977", "August 8, 1988", "September 9, 1999", "July 20, 1969",
    "April 12, 1961", "December 12, 2012", "June 21, 1981", "October 4, 1957", "January 1, 2000"
];

const timesOfDay = [
    "06:30", "11:45", "14:20", "16:35", "19:51", "22:15", "03:05", "23:40"
];

const weatherConditions = {
    "morning": [
        "under clear skies", "during a heavy rainstorm", "on a foggy morning"
    ],
    "afternoon": [
        "under clear skies", "during a thunderstorm", "on a warm, sunny day", "on a windy afternoon"
    ],
    "evening": [
        "under a sky filled with heavy clouds", "during a thunderstorm", "on a calm evening", "under a full moon"
    ],
    "night": [
        "under a full moon", "during a snowstorm", "on a clear night with good visibility", "during a stormy night"
    ]
};

const reactions = [
    "were left confused", "fled the scene in terror", "stood in awe", "were paralyzed with fear",
    "immediately called the authorities", "could not believe their eyes", "were convinced they had seen something other-worldly",
    "felt an overwhelming sense of dread", "tried to record the event with their phones", "discussed the event for days afterward"
];

const descriptions = {
    "UAP Sighting": {
        "United States": [
            "a bright light that hovered in the sky for several minutes before disappearing at incredible speed. Video footage was captured by several witnesses and reported to the local news.",
            "a disc-shaped object that descended slowly, emitting a low hum and strange lights. The event was tracked by local air traffic control and later confirmed by radar.",
            "a UAP emerging from within the mountain, hovering briefly, then vanishing in a flash. Military jets were scrambled to intercept, but no further evidence was found.",
            "a glowing orb emerging from the water and shooting straight up into the sky. The object was tracked on Radar by a nearby naval vessel.",
            "an unknown flying object that performed impossible manoeuvres, was spotted by a plane. The pilot reported the incident, and it was later confirmed by FLIR camera footage.",
            "a military pilot saw a triangular object while carrying out exercises near Area 51. The object was captured on FLIR camera, and NORAD tracked it on radar."
        ],
        "England": [
            "a triangular craft silently moving across the night sky, witnessed by multiple people near the location. Some witnesses managed to take clear photographs, sparking widespread interest.",
            "a hovering object emitting beams of light captured on a security camera over the countryside. The footage quickly went viral, leading to an official investigation.",
            "a UAP splitting into multiple smaller lights that flew off in different directions over the horizon. The event was tracked by a military radar station, but no official explanation was provided.",
            "a military exercise near the North Sea was interrupted by a fast-moving object that appeared on radar and was seen by multiple RAF pilots.",
            "two hikers who spotted a cigar shaped object being pursued by three RAF Typhoons, the hikers were able to capture a photograph of the object which they confirmed they sent to a local journalist however the photographs never made it to their destination."
        ],
        "Scotland": [
            "a large, glowing object hovering over the Loch, it caused waves to appear on the surface and also emanated strange noises. A local fisherman captured video footage, which was later analysed by experts.",
            "an unknown object flying at low altitude near Edinburgh, seen by dozens of people who reported it to the authorities. The object disappeared before military jets could arrive.",
            "a fast-moving craft tracked by radar near the Isle of Skye, which was seen by local residents who were left confused by the event."
        ],
        "Germany": [
            "a metallic craft was seen flying low over the Black Forest, making no sound & sending what looked like a beam of light down to the ground. The object was later observed by a commercial airline pilot who reported it to air traffic control.",
            "a large, dark shape moving slowly through the Bavarian Alps, captured on a hiker's GoPro camera. The footage remains unexplained.",
            "a mysterious craft hovering near Neuschwanstein Castle, was seen by tourists and reported to the local police."
        ],
        "Japan": [
            "a fast-moving object that was seen moving in a circle formation near Mount Fuji, leaving a trail of light. The event was captured on multiple cameras and shared widely on social media.",
            "a glowing object hovering over Aokigahara Forest, seen by several hikers who reported strange interference with their electronic devices.",
            "an unknown craft seen over Okinawa, tracked by a military radar station and later confirmed by fighter pilots who were unable to intercept."
        ],
        "France": [
            "a disc-shaped object hovering over the countryside near Rennes-le-Château, emitting a bright beam of light. Several locals witnessed the event and reported strange humming sounds.",
            "a bright light streaking across the night sky over Brittany, disappearing into the sea. Fishermen reported seeing the light vanish beneath the waves.",
            "a triangular craft seen over Normandy during a military exercise, causing temporary radar interference. The craft disappeared without a trace."
        ],
        "Mexico": [
            "a UFO seen flying over Teotihuacan, hovering above the pyramids before quickly disappearing. Several tourists captured the event on video.",
            "a mysterious object emitting bright lights over Chichen Itza, witnessed by a group of archeologists. The event was reported to local authorities.",
            "a craft observed hovering above Mexico City, seen by thousands and reported in the media. The object performed several rapid maneuvers before vanishing."
        ],
        "Brazil": [
            "a bright light that hovered over the Amazon Rainforest, causing animals to react strangely. A team of researchers captured the event on video, sparking a scientific investigation.",
            "an object seen flying over Iguazu Falls, moving at an incredible speed. The event was later confirmed by local air traffic control.",
            "a large craft hovering over Rio de Janeiro, seen by thousands and reported widely in the media. Military jets were scrambled, but the object disappeared before they arrived."
        ],
        "Russia": [
            "a triangular craft gliding silently over Lake Baikal, seen by local fishermen who captured the event on video. The footage was later analyzed by experts.",
            "an unknown object flying at low altitude over Moscow, seen by hundreds and tracked by multiple radar stations.",
            "a large, dark shape seen moving through the Siberian Tundra, captured on a wildlife camera. The event remains unexplained."
        ],
        "Australia": [
            "a glowing object seen flying low over the Tasmanian Wilderness, causing trees to sway. The event was captured on video by a group of campers.",
            "an unidentified craft seen flying over Uluru, tracked by a military radar station and later confirmed by fighter pilots who were unable to intercept.",
            "a bright light seen over Sydney, moving erratically before disappearing. Several witnesses managed to capture the event on video."
        ],
        "Argentina": [
            "a bright, pulsating light observed over Bariloche, moving erratically across the sky. Local authorities received numerous reports of the sighting.",
            "a cigar-shaped object seen flying over Cordoba during a local festival. The event was captured on several mobile phones and shared widely on social media.",
            "a series of bright lights seen hovering over Buenos Aires, performing complex maneuvers before disappearing. The event was reported in the local news."
        ],
        "South Africa": [
            "a saucer-shaped object seen hovering over Table Mountain, emitting beams of light. The event was witnessed by hundreds and reported widely in the media.",
            "a bright light observed moving rapidly over Kruger National Park, causing animals to react unusually. Rangers captured the event on video.",
            "a triangular craft seen over Cape Town during a military exercise, causing temporary radar interference. The craft disappeared without a trace."
        ],
        "India": [
            "a glowing orb seen hovering over Ladakh, captured by several tourists on video. The event sparked widespread speculation and media coverage.",
            "a bright light seen flying over Rajasthan, moving erratically across the sky. Local authorities received numerous reports of the sighting.",
            "a disc-shaped object seen hovering over Kerala, witnessed by a group of villagers. The event was reported to the local authorities."
        ],
        "Egypt": [
            "a disc-shaped craft hovering above the Great Pyramids, witnessed by several tourists who captured video footage and shared it online.",
            "a bright light seen near the Valley of the Kings, moving erratically before disappearing. Local authorities received multiple reports, but no evidence was found.",
            "an unidentified object flying at low altitude over Alexandria, seen by naval officers and tracked on radar."
        ],
        "Chile": [
            "a mysterious light hovering over Easter Island, illuminating the Moai statues. Several witnesses captured the event on video, sparking widespread speculation.",
            "an object seen flying over the Atacama Desert, moving at an incredible speed. The event was later confirmed by local air traffic control.",
            "a large craft hovering over Santiago, seen by thousands and reported widely in the media. Military jets were scrambled, but the object disappeared before they arrived."
        ]
    },
    "UAP Abduction": {
        "United States": [
            "a family was driving through a remote area when a bright light appeared above them, causing their car to lose power. They were beamed up into a hovering craft, and hours later, they woke up miles away with no memory of what happened.",
            "a lone camper in Arizona saw a strange craft descending silently, and moments later, he found himself aboard it, unable to move. He woke up days later in a different state with no recollection of the past three days.",
            "a rancher in Nevada saw a beam of light coming down from the sky, and seconds later, he was lifted into a craft. He reappeared hours later with strange markings on his skin."
        ],
        "England": [
            "a group of hikers in the Lake District saw a large craft hovering above them. They felt an irresistible pull towards it and then lost consciousness. They woke up scattered around the area, with no memory of the last two hours.",
            "a farmer in Cornwall saw a bright light over his field late at night. He felt paralyzed and was pulled into a hovering craft. He woke up in his bed the next morning with no idea how he got there.",
            "a woman walking her dog near Stonehenge reported being enveloped in a bright light. She lost consciousness and woke up hours later in a different location, with her dog unharmed beside her."
        ],
        "Brazil": [
            "a researcher in the Amazon Rainforest recounted being pulled aboard a UFO and later found in the jungle days after he went missing. The researcher reported strange marks on his body, which were later examined by medical professionals.",
            "a group of tourists in Iguazu Falls experienced lost time and found themselves miles away without explanation. The event was reported to the local authorities, who conducted an investigation.",
            "a man walking in Rio de Janeiro was lifted into a hovering craft, later waking up in a different location with no memory of the past few hours."
        ],
        "Russia": [
            "a fisherman on Lake Baikal described being beamed into a craft and waking up on his boat with hours unaccounted for. The fisherman reported the incident to the local authorities, who conducted an investigation.",
            "a man hiking in the Siberian Tundra was enveloped in a bright light and lost consciousness. He woke up hours later, miles away, with no memory of what happened.",
            "a woman walking in Moscow was lifted into a craft, only to reappear moments later with no recollection of the event."
        ],
        "Australia": [
            "a bushwalker in the Tasmanian Wilderness encountered a strange craft and woke up in a different location. The bushwalker reported the incident to the local authorities, who conducted an investigation.",
            "a man hiking in the Blue Mountains was beamed up into a spacecraft, only to reappear in a different location hours later with no memory of what happened.",
            "a woman walking in Sydney was lifted into a hovering craft, later waking up in a different location with no memory of the past few hours."
        ],
        "Argentina": [
            "a couple driving through the Andes reported being followed by a bright light, then losing two hours of time. They woke up in their car miles away with no memory of what happened.",
            "a farmer in Salta described being lifted into a craft while working in his field. He woke up hours later in the same spot, with strange marks on his body.",
            "a man walking in Buenos Aires was lifted into a craft, only to reappear moments later with no recollection of the event."
        ],
        "South Africa": [
            "a ranger in Kruger National Park saw a bright light descending rapidly. He lost consciousness and woke up hours later with no memory of what happened.",
            "a couple hiking in the Drakensberg Mountains were enveloped in a bright light and lost consciousness. They woke up miles away with no memory of the past few hours.",
            "a man walking in Johannesburg was lifted into a craft, only to reappear moments later with no recollection of the event."
        ],
        "India": [
            "a group of trekkers in the Himalayas reported seeing a bright light and then losing consciousness. They woke up scattered across the area with no memory of the past few hours.",
            "a man walking in Kerala was lifted into a craft, only to reappear moments later with no recollection of the event.",
            "a woman hiking in Ladakh reported being enveloped in a bright light and losing consciousness. She woke up miles away with no memory of what happened."
        ],
        "Egypt": [
            "a tour group near the pyramids experienced lost time and found themselves miles away without explanation. The event was reported to the local authorities, who conducted an investigation.",
            "a man walking near the Valley of the Kings was enveloped in a bright light and lost consciousness. He woke up hours later, miles away, with no memory of what happened.",
            "a woman walking in Siwa Oasis was lifted into a craft, only to reappear moments later with no recollection of the event."
        ],
        "Chile": [
            "a local guide on Easter Island reported a bright light entering his home and waking up miles away with no memory of the journey. The guide reported the incident to the local authorities, who conducted an investigation.",
            "a man hiking in the Atacama Desert was enveloped in a bright light and lost consciousness. He woke up hours later, miles away, with no memory of what happened.",
            "a woman walking in Santiago was lifted into a craft, only to reappear moments later with no recollection of the event."
        ]
    },
    "Crashed UAP": {
        "United States": [
            "a large, burning object fell from the sky, crashing into a remote forest in Nevada. The event was tracked by military radar, and a team was dispatched to investigate. Witnesses reported seeing military vehicles arriving at the site shortly after.",
            "a UFO lost control mid-air and crashed into a mountainside in the Mojave Desert, creating a massive explosion. Military personnel were seen at the site, but no official statement was made.",
            "an unidentified flying object crashed into a remote area near Area 51, leaving strange metal fragments scattered around. The site was quickly secured by the military, and no further information was released."
        ],
        "England": [
            "a metallic object crashed into a field near Stonehenge, leaving a large crater and strange debris. The event was reported to the local authorities, who conducted an investigation. Military vehicles were seen at the site shortly after.",
            "a UFO lost control and crashed into a remote area near the Lake District. Military personnel were seen at the site, but no official statement was made.",
            "an unidentified flying object crashed into a field near Glastonbury Tor, leaving strange metal fragments scattered around. The site was quickly secured by the military."
        ],
        "Brazil": [
            "a craft seen trailing smoke before plummeting into the Amazon River, observed by local tribes. The event was reported to the local authorities, who conducted an investigation.",
            "a UFO losing control and crashing into a remote area near Iguazu Falls. Military personnel were seen at the site, but no official statement was made.",
            "an unidentified flying object crashing into a field near Rio de Janeiro, leaving strange metal fragments. The site was quickly secured by the military."
        ],
        "Russia": [
            "an unidentified flying object crashed into a remote area near Lake Baikal, leaving strange metal fragments. The site was quickly secured by the military.",
            "a UFO losing control and crashing into a remote area near the Siberian Tundra. Military personnel were seen at the site, but no official statement was made.",
            "a metallic object crashed into a field near Moscow, leaving a large crater and strange debris. The event was reported to the local authorities, who conducted an investigation."
        ],
        "Australia": [
            "a craft seen crashing into the Tasmanian Wilderness, causing a fire and leaving a trail of destruction. The event was reported to the local authorities, who conducted an investigation.",
            "a UFO losing control and crashing into a remote area near the Blue Mountains. Military personnel were seen at the site, but no official statement was made.",
            "an unidentified flying object crashing into a field near Sydney, leaving strange metal fragments. The site was quickly secured by the military."
        ],
        "Argentina": [
            "a large, burning object fell from the sky, crashing into a remote forest near Bariloche. The event was tracked by military radar, and a team was dispatched to investigate.",
            "a UFO lost control and crashed into a mountainside in Mendoza, creating a massive explosion. Military personnel were seen at the site, but no official statement was made.",
            "an unidentified flying object crashed into a field near Cordoba, leaving strange metal fragments scattered around. The site was quickly secured by the military."
        ],
        "South Africa": [
            "a craft seen crashing into the Drakensberg Mountains, causing a fire and leaving a trail of destruction. The event was reported to the local authorities, who conducted an investigation.",
            "a UFO losing control and crashing into a remote area near Kruger National Park. Military personnel were seen at the site, but no official statement was made.",
            "an unidentified flying object crashed into a field near Cape Town, leaving strange metal fragments. The site was quickly secured by the military."
        ],
        "India": [
            "a large object falling from the sky and crashing into a remote area of the Himalayas, causing panic among locals. The event was reported to the local authorities, who conducted an investigation.",
            "a UFO losing control and crashing into a remote area near Rajasthan. Military personnel were seen at the site, but no official statement was made.",
            "an unidentified flying object crashing into a field near Kerala, leaving strange metal fragments. The site was quickly secured by the military."
        ],
        "Egypt": [
            "a UFO colliding with a sand dune near the pyramids, scattering debris over a wide area. The event was reported to the local authorities, who conducted an investigation.",
            "a spacecraft losing altitude and crashing into a remote area near the Valley of the Kings. Military personnel were seen at the site, but no official statement was made.",
            "an unidentified flying object crashing into a field near Siwa Oasis, leaving strange metal fragments. The site was quickly secured by the military."
        ],
        "Chile": [
            "a large object falling from the sky and crashing into a remote area of Easter Island, causing panic among locals. The event was reported to the local authorities, who conducted an investigation.",
            "a UFO losing control and crashing into a remote area near the Atacama Desert. Military personnel were seen at the site, but no official statement was made.",
            "an unidentified flying object crashing into a field near Santiago, leaving strange metal fragments. The site was quickly secured by the military."
        ]
    },
    "Cattle Mutilation": {
        "United States": [
            "several cattle were found dead in a field with precise surgical incisions and missing organs, but no signs of struggle or blood. The event was reported to the local authorities, who conducted an investigation. Witnesses reported strange lights in the sky the night before.",
            "a rancher discovered a number of cattle mutilated overnight, with strange markings burned into the ground nearby. The event was reported to the local authorities, who conducted an investigation.",
            "local authorities were baffled by a series of cattle mutilations, where the animals were found drained of blood and missing body parts. The event was reported to the local authorities, who conducted an investigation."
        ],
        "England": [
            "sheep were found dead in a pasture with unusual wounds and no signs of predators in the area. The event was reported to the local authorities, who conducted an investigation. Witnesses reported seeing strange lights in the sky the night before.",
            "a farmer discovered mutilated livestock with no tracks or evidence of how the animals were killed. The event was reported to the local authorities, who conducted an investigation.",
            "livestock were found with mysterious puncture marks and their bodies completely drained of blood. The event was reported to the local authorities, who conducted an investigation."
        ],
        "Brazil": [
            "cattle discovered in the Amazon with mysterious wounds and no blood at the scene. The event was reported to the local authorities, who conducted an investigation.",
            "several livestock found dead with laser-like cuts and no signs of struggle or predators. The event was reported to the local authorities, who conducted an investigation.",
            "animals discovered drained of blood and missing internal organs, causing local panic. The event was reported to the local authorities, who conducted an investigation."
        ],
        "Australia": [
            "ranchers in the outback found cattle mutilated with laser-like precision and no blood. The event was reported to the local authorities, who conducted an investigation.",
            "livestock found dead with strange puncture marks and organs removed cleanly. The event was reported to the local authorities, who conducted an investigation.",
            "animals discovered mutilated in a manner that suggests advanced technology. The event was reported to the local authorities, who conducted an investigation."
        ],
        "Argentina": [
            "a farmer in the Pampas region found cattle mutilated with strange markings burned into the ground nearby. The event was reported to the local authorities, who conducted an investigation.",
            "several livestock were discovered dead with precise surgical cuts and missing organs, causing fear among local farmers.",
            "animals found dead in a field with their bodies completely drained of blood. The event was reported to the local authorities, who conducted an investigation."
        ],
        "South Africa": [
            "ranchers found cattle mutilated with strange wounds and no signs of predators in the area. The event was reported to the local authorities, who conducted an investigation.",
            "livestock discovered dead with laser-like cuts and no blood. The event was reported to the local authorities, who conducted an investigation.",
            "animals found with mysterious puncture marks and missing body parts, sparking fear among local communities."
        ],
        "India": [
            "cattle found with precise cuts and organs removed in a remote area near Ladakh. The event was reported to the local authorities, who conducted an investigation.",
            "local villagers reported several livestock mutilations with no evidence of how it was done. The event was reported to the local authorities, who conducted an investigation.",
            "cows found dead with strange symbols carved into the ground around them. The event was reported to the local authorities, who conducted an investigation."
        ],
        "Chile": [
            "a series of cattle mutilations were reported near the Atacama Desert, with animals found drained of blood and missing organs. The event was reported to the local authorities, who conducted an investigation.",
            "a farmer near Santiago discovered mutilated livestock with no signs of struggle or predators. The event was reported to the local authorities, who conducted an investigation.",
            "animals found dead with precise surgical incisions and strange burn marks on the ground nearby. The event was reported to the local authorities, who conducted an investigation."
        ]
    },
    "Crop Circle": {
        "United States": [
            "a complex pattern of circles and lines was discovered in a wheat field, with no signs of human involvement. The event was reported to local authorities and investigated by UFO enthusiasts.",
            "a series of geometric shapes were found pressed into a cornfield, leaving locals baffled. Several people captured drone footage of the patterns, which quickly spread online.",
            "a massive crop circle appeared overnight in a field, featuring intricate designs and strange symbols. The site was visited by hundreds of curious onlookers and was later cordoned off by officials."
        ],
        "England": [
                        "a stunning crop circle formation was discovered near Stonehenge, consisting of interlocking rings and triangles. The event attracted both media attention and a scientific team for investigation.",
            "a large, complex design was found in a barley field, with no footprints or evidence of entry. Several locals reported strange lights in the sky the night before.",
            "a series of circles and lines creating a symbolic pattern were found in a wheat field. The site became a popular tourist attraction, with many speculating about its origins."
        ],
        "Brazil": [
            "a massive crop circle discovered in a sugar cane field, with strange symbols in the center. The event was reported to local authorities and investigated by UFO enthusiasts.",
            "a series of intricate designs found pressed into a coffee plantation, baffling local workers. Several people captured drone footage of the patterns, which quickly spread online.",
            "a crop circle appearing overnight in a field, featuring a complex geometric pattern. The site was visited by hundreds of curious onlookers and was later cordoned off by officials."
        ],
        "Australia": [
            "a stunning crop circle appearing in a wheat field in the outback, with no explanation for its origin. The event was reported to local authorities and investigated by UFO enthusiasts.",
            "an intricate pattern of circles and lines found pressed into a field, with no tracks or footprints. Several people captured drone footage of the patterns, which quickly spread online.",
            "a large geometric design discovered in a field, drawing attention from nearby towns. The site was visited by hundreds of curious onlookers and was later cordoned off by officials."
        ],
        "Argentina": [
            "a series of complex crop circles were discovered in a wheat field near Buenos Aires, sparking widespread media coverage. Local authorities could not determine the origin of the patterns.",
            "a large, intricate design found in a field near Cordoba, with no signs of entry or tampering. The event was reported to local authorities and attracted many visitors.",
            "a crop circle featuring concentric rings and strange symbols was found in a maize field. The event attracted both local and international media attention."
        ],
        "South Africa": [
            "an elaborate crop circle was discovered in a field near Cape Town, featuring geometric patterns and symbols. The event was reported to local authorities and attracted many visitors.",
            "a series of circles and lines forming a complex design were found in a wheat field. The site became a popular tourist attraction, with many speculating about its origins.",
            "a large crop circle appearing overnight in a field near Johannesburg, featuring intricate designs and strange symbols. The site was visited by hundreds of curious onlookers and was later cordoned off by officials."
        ],
        "India": [
            "a stunning crop circle was discovered in a rice paddy near Kerala, featuring intricate patterns and symbols. The event attracted both media attention and a scientific team for investigation.",
            "a large, complex design was found in a wheat field in Rajasthan, with no footprints or evidence of entry. Several locals reported strange lights in the sky the night before.",
            "a series of circles and lines creating a symbolic pattern were found in a maize field near Ladakh. The site became a popular tourist attraction, with many speculating about its origins."
        ],
        "Chile": [
            "a complex crop circle was found in a field near Easter Island, featuring intricate geometric patterns. The event attracted both media attention and a scientific team for investigation.",
            "a series of circles and lines forming a symbolic pattern were found in a wheat field near Santiago. The site became a popular tourist attraction, with many speculating about its origins.",
            "a large, complex design was discovered in a barley field in the Atacama Desert, with no footprints or evidence of entry. The event attracted both local and international media attention."
        ]
    }
};

// Expanded culturally diverse names for witnesses
const firstNames = [
    "John", "Emma", "Michael", "Sophia", "David", "Isabella", "James", "Mia", "Robert", "Olivia",
    "Daniel", "Ava", "Christopher", "Emily", "Joseph", "Madison", "Thomas", "Abigail", "Charles", "Charlotte",
    "Javier", "Maria", "Alejandro", "Camila", "Wei", "Yuna", "Kaito", "Sakura", "Ravi", "Ananya",
    "Omar", "Layla", "Mohammed", "Aisha", "Hans", "Lena", "Vladimir", "Nina", "Carlos", "Luisa",
    "Ahmed", "Fatima", "Leonardo", "Gabriela", "Ivan", "Svetlana", "Juan", "Marisol", "Youssef", "Amira",
    "Thabo", "Zinhle", "Rajesh", "Priya", "Hiroshi", "Keiko", "Dmitri", "Irina", "Miguel", "Lucia",
    "Rashid", "Noor", "Anna", "Olga", "Chao", "Li", "Sunita", "Manuel", "Adriana", "Elena"
];

const lastNames = [
    "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor",
    "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson",
    "Hernandez", "Lopez", "Gonzalez", "Perez", "Kumar", "Singh", "Wang", "Zhang", "Chen", "Kim",
    "Patel", "Sharma", "Ahmed", "Hassan", "Nguyen", "Tran", "Liu", "Huang", "Sato", "Kobayashi",
    "Yamamoto", "Sanchez", "Gomez", "Rodriguez", "Silva", "Rossi", "Weber", "Schneider", "Volkov", "Ivanov",
    "Zulu", "Nguyen", "O'Connor", "Kowalski", "Bianchi", "Dubois", "Silveira", "Fernandez", "Murphy", "Sousa"
];

const militaryRanks = ["Private", "Sergeant", "Captain", "Major", "Colonel", "General"];

// Function to generate a random index for the arrays
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

// Function to get a random element from an array
function getRandomElement(array) {
    return array[getRandomIndex(array)];
}

// Function to generate multiple random witnesses
function generateWitnesses() {
    const numberOfWitnesses = Math.floor(Math.random() * 4) + 1;  // Randomly choose 1 to 4 witnesses
    const witnesses = [];
    for (let i = 0; i < numberOfWitnesses; i++) {
        const firstName = getRandomElement(firstNames);
        const lastName = getRandomElement(lastNames);
        const isMilitary = Math.random() < 0.3; // 30% chance the witness is military
        const witnessName = isMilitary
            ? `${getRandomElement(militaryRanks)} ${firstName} ${lastName}`
            : `${firstName} ${lastName}`;
        witnesses.push(`• ${witnessName}`);
    }
    return witnesses.join("\n");
}

// Function to generate a random weather condition based on the time of day
function getWeatherCondition(timeOfDay) {
    if (timeOfDay.includes("06") || timeOfDay.includes("11")) {
        return getRandomElement(weatherConditions["morning"]);
    } else if (timeOfDay.includes("14") || timeOfDay.includes("16")) {
        return getRandomElement(weatherConditions["afternoon"]);
    } else if (timeOfDay.includes("19") || timeOfDay.includes("22")) {
        return getRandomElement(weatherConditions["evening"]);
    } else {
        return getRandomElement(weatherConditions["night"]);
    }
}

// Function to generate a random UAP event based on user selection
function generateRandomUapEvent() {
    const eventType = document.getElementById('eventType').value;
    const country = document.getElementById('country').value;

    // Check if eventType and country have valid values
    if (!eventType || !country) {
        return "Please select both an event type and a country.";
    }

    const location = getRandomElement(locations[country]);
    const date = getRandomElement(dates);
    const timeOfDay = getRandomElement(timesOfDay);
    const weatherCondition = getWeatherCondition(timeOfDay);
    const description = getRandomElement(descriptions[eventType][country]).replace("the area", location);
    const witnessList = generateWitnesses();
    const reaction = getRandomElement(reactions);

    return `On ${date}, at ${timeOfDay} ${weatherCondition} in ${location}, the following witnesses reported a ${eventType.toLowerCase()} involving ${description}:\n${witnessList}\nThe witnesses ${reaction}. The event was reported to the relevant authorities for further investigation.`;
}

// Function to display the random UAP event
function displayRandomUapEvent() {
    const eventDisplay = document.getElementById('ufoEventDisplay');
    const randomEvent = generateRandomUapEvent();
    eventDisplay.textContent = randomEvent;
}

// Add event listener to the button
document.getElementById('generateEventButton').addEventListener('click', displayRandomUapEvent);
