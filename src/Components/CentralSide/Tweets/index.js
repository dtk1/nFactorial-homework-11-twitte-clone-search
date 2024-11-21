import React from 'react';
import NFACTORIAL_PNG from '../images/nfactorial.png'
import KZ_PNG from '../images/kz.png'
import SAMATMENTOR from '../images/SamatMentor.png'
import ME from '../images/Me.png'
import DALIDA from '../images/Dalida.png'
import FRAME from '../images/Frame 6.png'
import NETFLIX_PNG from '../images/netflix.png'
import SPACEX from '../images/SPACEX.jpg'
import FOOD from '../images/FOOD.jpg'
import spacexlogo from '../images/spacexlogo.jpg'
import bearlogo from '../images/bearlogo.jpg'
export const tweets = [
    {
        id: 1,
        authorName: 'Free KZ Today',
        authorUserName: '@freekztoday',
        img: KZ_PNG,
        content: 'Kazakhstan is set to introduce new green energy initiatives in 2025, aiming to reduce carbon emissions by 30%.',
        retweets: 150,
        replies: 75,
        likes: 230,
        hashtag: '#Sustainability #Kazakhstan',
        time: '7h'
    },
    {
        id: 2,
        authorName: 'nFactorial',
        authorUserName: '@nfactorial',
        img: NFACTORIAL_PNG,
        content: 'We just completed another amazing week at nFactorial bootcamp! Thanks to everyone who attended our JavaScript workshop. 🚀 #codinglife',
        retweets: 300,
        replies: 120,
        likes: 450,
        hashtag: '#codinglife',
        time:'now'
    },
    {
        id: 3,
        authorName: 'Aruzhan A.',
        authorUserName: '@aruzhan_official',
        img: ME,
        content: 'Morning hike in Almaty was breathtaking! The snow-capped mountains and crisp air made my weekend. 🌄❄️ #travel #Almaty',
        retweets: 95,
        replies: 35,
        likes: 400,
        hashtag: '#travel #Almaty',
        time: '15 seconds ago'
    },
    {
        id: 4,
        authorName: 'TechInsider',
        authorUserName: '@techinsider',
        img: SAMATMENTOR,
        content: 'BREAKING: New AI startup in Central Asia raises $20M in Series A funding. The future of AI in the region is looking bright. 💡',
        retweets: 450,
        replies: 200,
        likes: 720,
        hashtag: '#AI #Startups',
        time: '30 minutes ago'
    },
    {
        id: 5,
        authorName: 'Travel Tips 101',
        authorUserName: '@traveltips',
        img: DALIDA,
        content: 'Looking for a quick getaway? Check out these hidden gems in Kazakhstan that are perfect for your next adventure. 🌍✈️',
        retweets: 180,
        replies: 60,
        likes: 500,
        hashtag: '#travel #adventure',
        time: '3h'
    },
    {
        id: 6,
        authorName: 'Netflix',
        authorUserName: '@netflix',
        img: NETFLIX_PNG,
        content: 'Need a break? Escape into the world of endless stories with Netflix. From gripping dramas to laugh-out-loud comedies, and thrillers that’ll keep you on the edge of your seat, there’s always something for everyone. Start watching your next obsession today!',
        retweets: 350,
        replies: 23,
        likes: 1835,
        hashtag: '#Netflix #Chill',
        time: '3h',
        frame: FRAME
    },
    {
        id: 7,
        authorName: "SpaceX",
        authorUserName: "@spacex",
        img: spacexlogo, // Replace with the actual image URL or import
        content:
          "The Starship is ready for its next launch! Join us as we take another leap towards interplanetary exploration. 🚀",
        retweets: 780,
        replies: 320,
        likes: 5400,
        hashtag: "#SpaceX #Starship",
        time: "5h",
        frame: SPACEX, 
      },
      {
        id: 8,
        authorName: "World Wildlife",
        authorUserName: "@wwf",
        img: bearlogo, 
        content:
          "Protecting our planet starts with each of us. Join the movement to save endangered species and restore ecosystems. 🌍🐾",
        retweets: 200,
        replies: 100,
        likes: 3200,
        hashtag: "#Conservation #WWF",
        time: "8h",
        frame: bearlogo
      },
      {
        id: 9,
        authorName: "Foodies United",
        authorUserName: "@foodiesunited",
        img: FOOD, 
        content:
          "Craving something delicious? Check out these top 10 recipes for winter comfort foods. 🍲❄️",
        retweets: 130,
        replies: 50,
        likes: 1700,
        hashtag: "#FoodLovers #Recipes",
        time: "12h",
        frame: FOOD, 
      },
];
