import React from 'react'

export default function Credits() {
  //TO DO
  //Add all credit history
  //Add disclaimer
  return (
    <div className="poke-list">
      <h1>Credits/Disclaimer</h1>

      <p>
        This app was made with fair use in mind for educational purposes and all
        rights belong to their respective owners. This app is not affiliated,
        endorsed or supported by Nintendo in any way, some images used in this
        app are copyrighted and supported under fair use, Pokemon and Pokemon
        character names are trademarks of Nintendo.
      </p>
      <ul>
        <li>Our de-facto team member - David</li>

        <li>
          Map maker - Flexible level editor Tiled - (https://www.mapeditor.org/){' '}
        </li>
        <li>Material UI (https://mui.com/)</li>
        <li>
          Intro to phaser and tiled technology - Hong Ly
          (https://www.youtube.com/watch?v=cKIG1lKwLeo&ab_channel=HongLyTech)
        </li>
        <li>
          Initial phaser code for map integration - Michael Hadley
          (https://medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6)
        </li>
      </ul>
    </div>
  )
}
