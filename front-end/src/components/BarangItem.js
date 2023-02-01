import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./item.css";
const Card = ({ title, jumlah, urlToImage, id }) => {
    return (
        <div className="card text-center bg-light animate__animated animate__fadeInUp">
        <div className="overflow">
          <img src={urlToImage} alt="a wallpaper" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{title}</h4>
          <a
            href={`/barang_detail/${id}`}
            target="_blank"
            className="btn btn-outline-secondary border-0"
            rel="noreferrer"
          >
            Go to {title}
          </a>
        </div>
      </div>
    )
}

export default Card
