const facilities = [
  {
    id: 1,
    images: [
      {
        id: 1,
        image: `/img/custom images/1_family_room/1.jpeg`,
      },
      {
        id: 2,
        image: `/img/custom images/1_family_room/2.jpeg`,
      },
      {
        id: 31,
        image: `/img/custom images/1_family_room/3.jpeg`,
      },
      {
        id: 4,
        image: `/img/custom images/1_family_room/4.jpeg`,
      },
    ],
    title: "Family Rooms",
    description:
      "Our spacious and comfortable family rooms are designed to provide a relaxing and enjoyable stay for guests of all ages. With modern amenities and a warm ambiance, these rooms ensure a home-like experience where families can unwind, bond, and create lasting memories.",
    highlights: "Features:",
    highlightsPoints: [
      "Spacious and comfortable family rooms",
      "Modern amenities for a home-like experience",
      "Warm ambiance for relaxation and bonding",
      "Ideal for families of all ages",
      "Create lasting memories together",
    ],
  },
  {
    id: 2,
    images: [
      { id: 2, image: `/img/custom images/2_bar_counter/1.jpeg` },
      { id: 2, image: `/img/custom images/2_bar_counter/2.jpeg` },
      { id: 2, image: `/img/custom images/2_bar_counter/3.jpeg` },
      { id: 2, image: `/img/custom images/2_bar_counter/4.jpeg` },
    ],
    title: "Bar Counter",
    description:
      "Enjoy a premium selection of cocktails, spirits, and beverages at our well-stocked bar counter. Whether you're looking to unwind with a classic drink or try an exclusive signature cocktail crafted by our expert bartenders, our bar offers the perfect ambiance. Relax with friends, savor delightful refreshments, and experience a vibrant yet cozy atmosphere. Cheers to good times",

    highlights: "Features:",
    highlightsPoints: [
      "Premium selection of spirits, wines, and handcrafted cocktails",
      "Expert bartenders crafting signature drinks with precision",
      "Cozy and inviting ambiance, ideal for social gatherings",
      "Seasonal specials and exclusive drink menus available",
      "Perfect setting for casual evenings and lively celebrations",
    ],
  },
  {
    id: 3,
    images: [
      { id: 3, image: `/img/custom images/3_darbar_hall/1.jpeg` },
      { id: 3, image: `/img/custom images/3_darbar_hall/2.jpeg` },
      { id: 3, image: `/img/custom images/3_darbar_hall/3.jpeg` },
      { id: 3, image: `/img/custom images/3_darbar_hall/4.jpeg` },
    ],
    title: "Darbar Hall",
    description:
      "The Darbar Hall is a grand and spacious venue, perfect for hosting elegant events, corporate gatherings, and celebrations. Designed with regal interiors and modern facilities, it provides a majestic ambiance for every occasion, ensuring a memorable experience for guests.",
    highlights: "Features:",
    highlightsPoints: [
      "Grand and spacious venue for elegant events",
      "Regal interiors with modern facilities",
      "Majestic ambiance for memorable experiences",
      "Ideal for corporate gatherings and celebrations",
      "Versatile space for various occasions",
    ],
  },
  {
    id: 4,
    images: [
      { id: 4, image: `/img/custom images/4_central_hall/2.jpeg` },
      { id: 4, image: `/img/custom images/4_central_hall/3.jpeg` },
      { id: 4, image: `/img/custom images/4_central_hall/1.jpeg` },
      { id: 4, image: `/img/custom images/4_central_hall/4.jpeg` },
    ],
    title: "Central Hall",
    description:
      "The Central Hall is a versatile and well-designed space, perfect for hosting a wide range of events, from formal gatherings to social celebrations. With its modern infrastructure and elegant ambiance, it provides a comfortable and welcoming environment for all occasions.",
    highlights: "Features:",
    highlightsPoints: [
      "Versatile space for various events and gatherings",
      "Modern infrastructure with elegant ambiance",
      "Comfortable and welcoming environment",
      "Ideal for formal and social celebrations",
      "Well-equipped for diverse occasions",
    ],
  },
  {
    id: 5,
    images: [
      { id: 4, image: `/img/custom images/5_Lounge_Room/2.jpeg` },
      { id: 4, image: `/img/custom images/5_Lounge_Room/3.jpeg` },
      { id: 4, image: `/img/custom images/5_Lounge_Room/1.jpeg` },
      { id: 4, image: `/img/custom images/5_Lounge_Room/4.jpeg` },
    ],
    title: "Lounge Room",
    description:
      "The Lounge Room offers a cozy and sophisticated space where guests can relax, unwind, and socialize in a comfortable setting. Designed for both casual meetups and quiet retreats, it provides the perfect ambiance for leisure and conversation.",
    highlights: "Features:",
    highlightsPoints: [
      "Cozy and sophisticated space for relaxation",
      "Ideal for casual meetups and quiet retreats",
      "Comfortable setting for leisure and conversation",
      "Perfect ambiance for socializing and unwinding",
      "Designed for both casual and formal gatherings",
    ],
  },
  {
    id: 6,
    images: [
      { id: 4, image: `/img/custom images/6_Open_Air_Top_Roof/2.jpeg` },
      { id: 4, image: `/img/custom images/6_Open_Air_Top_Roof/3.jpeg` },
      { id: 4, image: `/img/custom images/6_Open_Air_Top_Roof/1.jpeg` },
      { id: 4, image: `/img/custom images/6_Open_Air_Top_Roof/4.jpeg` },
    ],
    title: "Open Air Top Roof",
    description:
      "Experience breathtaking views and a refreshing ambiance at our Open Air Top Roof. Whether you're looking to enjoy a serene evening under the stars or host a lively gathering with a stunning backdrop, this space offers the perfect blend of relaxation and elegance.",
    highlights: "Features:",
    highlightsPoints: [
      "Breathtaking views and refreshing ambiance",
      "Ideal for serene evenings under the stars",
      "Perfect for lively gatherings with stunning backdrop",
      "Blend of relaxation and elegance",
      "Versatile space for various occasions",
    ],
  },
  {
    id: 7,
    images: [
      { id: 4, image: `/img/custom images/7_Billards/2.jpeg` },
      { id: 4, image: `/img/custom images/7_Billards/3.jpeg` },
      { id: 4, image: `/img/custom images/7_Billards/1.jpeg` },
      { id: 4, image: `/img/custom images/7_Billards/4.jpeg` },
    ],
    title: "Billards",
    description:
      "Enjoy a game of precision and skill at our well-equipped billiards area. Whether you're a seasoned player or just looking for a fun and engaging experience, our billiards space provides the perfect setting for friendly matches and competitive play.",
    highlights: "Features:",
    highlightsPoints: [
      "Well-equipped billiards area for precision and skill",
      "Ideal for friendly matches and competitive play",
      "Perfect setting for engaging experiences",
      "Designed for both seasoned players and beginners",
      "Relaxing ambiance for leisure and enjoyment",
    ],
  },
  {
    id: 8,
    images: [
      { id: 4, image: `/img/custom images/8_snooker/2.jpeg` },
      { id: 4, image: `/img/custom images/8_snooker/3.jpeg` },
      { id: 4, image: `/img/custom images/8_snooker/1.jpeg` },
      { id: 4, image: `/img/custom images/8_snooker/4.jpeg` },
    ],
    title: "Snooker",
    description:
      "Step into our dedicated snooker area and enjoy a game of strategy, precision, and skill. Designed for both casual players and serious enthusiasts, our snooker space offers a premium experience in a comfortable and well-maintained setting.",
    highlights: "Features:",
    highlightsPoints: [
      "Dedicated snooker area for strategy and precision",
      "Ideal for casual players and serious enthusiasts",
      "Premium experience in a comfortable setting",
      "Well-maintained space for enjoyable gameplay",
      "Perfect for friendly matches and competitive play",
    ],
  },
  {
    id: 9,
    images: [
      { id: 4, image: `/img/custom images/9_gym_club/2.jpeg` },
      { id: 4, image: `/img/custom images/9_gym_club/3.jpeg` },
      { id: 4, image: `/img/custom images/9_gym_club/1.jpeg` },
      { id: 4, image: `/img/custom images/9_gym_club/4.jpeg` },
    ],
    title: "Gymnasium",
    description:
      "Stay fit and active at our state-of-the-art gymnasium, equipped with modern fitness equipment to cater to all workout routines. Whether you're focusing on strength training, cardio, or flexibility, our gym provides the perfect space to achieve your fitness goals.",
    highlights: "Features:",
    highlightsPoints: [
      "State-of-the-art gymnasium with modern equipment",
      "Ideal for strength training, cardio, and flexibility",
      "Perfect space to achieve fitness goals",
      "Well-maintained and comfortable environment",
      "Designed for all workout routines and levels",
    ],
  },
  {
    id: 10,
    images: [
      { id: 4, image: `/img/custom images/10_table_tennis/2.jpeg` },
      { id: 4, image: `/img/custom images/10_table_tennis/3.jpeg` },
      { id: 4, image: `/img/custom images/10_table_tennis/1.jpeg` },
      { id: 4, image: `/img/custom images/10_table_tennis/4.jpeg` },
    ],
    title: "Table–Tennis",
    description:
      "Enjoy fast-paced and exciting matches at our dedicated table tennis area. Whether you're playing for fun or engaging in a competitive game, this space offers the perfect setting for players of all skill levels to sharpen their reflexes and have a great time.",
    highlights: "Features:",
    highlightsPoints: [
      "Dedicated table tennis area for fast-paced matches",
      "Ideal for fun and competitive gameplay",
      "Perfect setting for players of all skill levels",
      "Designed to sharpen reflexes and skills",
      "Engaging space for leisure and enjoyment",
    ],
  },
  {
    id: 11,
    images: [
      { id: 4, image: `/img/custom images/11_basketball_acedamy/2.jpeg` },
      { id: 4, image: `/img/custom images/11_basketball_acedamy/3.jpeg` },
      { id: 4, image: `/img/custom images/11_basketball_acedamy/1.jpeg` },
      { id: 4, image: `/img/custom images/11_basketball_acedamy/4.jpeg` },
    ],
    title: "Basket Ball Academy",
    description:
      "Take your game to the next level at our Basketball Academy, designed to nurture talent and develop skills in a professional environment. Whether you're a beginner learning the fundamentals or an advanced player refining your techniques, our academy provides expert coaching and top-notch facilities.",
    highlights: "Features:",
    highlightsPoints: [
      "Full-sized basketball court with high-quality flooring",
      "Expert coaching for beginners and advanced players",
      "Dedicated training sessions for skill development and fitness",
      "Modern equipment including hoops, nets, and training aids",
      "Ideal for individual practice, team training, and tournaments",
    ],
  },
  {
    id: 12,
    images: [
      { id: 4, image: `/img/custom images/12_lawnTennis/2.jpeg` },
      { id: 4, image: `/img/custom images/12_lawnTennis/3.jpeg` },
      { id: 4, image: `/img/custom images/12_lawnTennis/1.jpeg` },
      { id: 4, image: `/img/custom images/12_lawnTennis/4.jpeg` },
    ],
    title: "Lawn Tennis",
    description:
      "Experience the thrill of the game at our professionally maintained lawn tennis courts. Whether you're playing for fitness, fun, or competition, our courts provide the perfect setting for players of all levels to enjoy and improve their skills.",
    highlights: "Features:",
    highlightsPoints: [
      "Well-maintained tennis courts with high-quality surfaces",
      "Suitable for both casual matches and professional training",
      "Coaching sessions available for beginners and advanced players",
      "Proper lighting for evening and night games",
      "Ideal for singles and doubles matches with ample playing space",
    ],
  },
];

export default facilities;
