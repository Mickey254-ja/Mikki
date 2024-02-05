import React from 'react'

const ImagesCollection = () => {
    const imagesList = [...new Array(9)].map(
        (number, index) => `/images/images-${index + 1}.jpg`
      );

  return (
    <ul className='image-collections-container'>
   {imagesList.map((imgUrl, index) => {
    console.log(imgUrl); // Log the image URL to the console
    return (
        <li className="item" key={index}>
            <figure>
                <img src={imgUrl} alt={`collection-${index + 1}`} />
            </figure>
        </li>
    );
})}
    </ul>
  );
}

export default ImagesCollection