import React from 'react';
import Potato from "./potato";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
        "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.9
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
        "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 3.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
        "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 3.3
  },
  {
    id: 4,
    name: "Doncasu",
    image:
        "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 2.2
  },
  {
    id: 5,
    name: "Kimbap",
    image:
        "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.3
  }
];


function App() {
  return ( //html (화면에 보여지는 부분)
      //className="APP" : CSS
      //div : html
    <div className="App">
      {foodILike.map(dish => ( //여러개의 name과 image를 mapping(dish)

          <Potato
            key={dish.id}
            name={dish.name}
            picture={dish.image}
            rating={dish.rating}

          />
      ))}
    </div>
  );
}

export default App;
