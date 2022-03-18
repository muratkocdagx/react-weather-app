import React from "react";

export default function Weather({ weather }) {

    if (!weather) {
        return <div>Yukleniyor...</div>
    }

  return <div>
      <h1>Hava Durumu</h1>
      <div>Lokasyon: { weather.name }</div>   
      <div>Hava Durumu: { weather.weather.map((data) => data.description).join(", ") }</div>   
      <div>Sicaklik Derecesi: { weather.main.temp }</div>   
      <div>Ruzgar Derecesi: { weather.wind.deg }</div>   
      <div>Ruzgar Hizi: { weather.wind.speed }</div>   
      <div>Tarih: { new Date(weather.dt * 1000).toLocaleDateString() }</div>   
  </div>;
}
