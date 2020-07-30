import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Navbar from './Navbar';

const apiKey = process.env.REACT_APP_NASA_API_KEY;

const DailyImage = () => {
  const [imageDetails, setImageDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((res) => {
        setImageDetails(res.data);
        setLoading(false);
      });
  };

  return (
    <React.Fragment>
      <Navbar />
      {loading ? (
        <Loader
          className="loader-center"
          type="Circles"
          color="blue"
          height={100}
          width={100}
          timeout={3000}
          position="center"
        />
      ) : (
        <React.Fragment>
          <div className="daily-astro-image">
            {imageDetails.media_type === 'image' ? (
              <img src={imageDetails.url} alt={imageDetails.title} />
            ) : (
              <iframe
                title={imageDetails.title}
                src={imageDetails.url}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
              />
            )}
          </div>
          <div>
            <h1>{imageDetails.title}</h1>
            <p className="date">{imageDetails.date}</p>
            <p className="explanation">{imageDetails.explanation}</p>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default DailyImage;
