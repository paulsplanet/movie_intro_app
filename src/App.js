import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "Ttokpokki",
    image: "https://www.wandercooks.com/wp-content/uploads/2019/07/korean-tteokbokki-spicy-rice-cakes-ft-19.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Hamburger",
    image: "https://www.caesars.com/content/scaffold_pages/restaurant/planet-hollywood/phv/en/ramsay-burgr/_jcr_content/cards/card/slides71.stdimg.hd.l.png/1580498100051.png",
    rating: 3.5,
  },
  {
    id: 3,
    name: "Sushi",
    image: "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2019/08/27/24741a25c1f14388bc472a4d44070b4b_Ginza_Sushi_Ichi_Omakase.jpg",
    rating: 4,
  }
];

function Food({name, picture, rating}) {
  return <div>
    <h1>I like {name}</h1>
    <h2>{rating}/5</h2>
    <img src={picture} alt={name} />
    </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
