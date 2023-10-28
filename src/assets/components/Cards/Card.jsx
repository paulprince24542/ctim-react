import React from "react";
import "./Card.css";
import "./Card.scss";

export default function Card({ cardData }) {
  return (
    <>
      {cardData.map((data) => (
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="card">
            <h5 class="card-title">{data.head}</h5>
            <div class="view overlay">
              <img class="card-img-top" src={data.img} alt="Card image cap" />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <div class="card-body">
              <p class="card-text">{data.desc}</p>

              <div className="d-flex justify-content-end">
                <button type="button" class="btn btn-primary">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
