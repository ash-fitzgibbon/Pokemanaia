import React from 'react'

export default function Credits() {
  //TO DO
  //Add all credit history
  //Add disclaimer
  return (
    <div className="less-wide">
      <div className="creditsList">
        <h1>Credits/Disclaimer</h1>

        <p>
          This app was made with fair use in mind for educational purposes and
          all rights belong to their respective owners. This app is not
          affiliated, endorsed or supported by Nintendo in any way, some images
          used in this app are copyrighted and supported under fair use, Pokemon
          and Pokemon character names are trademarks of Nintendo.
        </p>
        <h2>Thanks to:</h2>
        <p>Our de-facto team member - David</p>

        <p>
          <a href="https://www.mapeditor.org/">
            Map maker - Flexible level editor Tiled
          </a>
        </p>
        <p>
          <a href="https://mui.com/"> Material UI </a>
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=cKIG1lKwLeo&ab_channel=HongLyTech">
            Intro to phaser and tiled technology
          </a>{' '}
          - Hong Ly
        </p>
        <p>
          <a href="https://medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6">
            Initial phaser code for map integration{' '}
          </a>
          - Michael Hadley
        </p>
      </div>
    </div>
  )
}
