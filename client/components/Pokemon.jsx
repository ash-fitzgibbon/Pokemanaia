import React, { useState } from 'react'

export default function Pokemon({ hoverData: pokemon }) {
  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = () => {
    setIsHovering(true)
  }
  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <>
      <div key={pokemon.name}>
        <img
          style={isHovering ? { opacity: '50%' } : null}
          src={pokemon.sprites.front_default}
          alt={'pokemon'}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        ></img>
        <p key={pokemon.name}>
          <strong>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </strong>
        </p>
        {isHovering && (
          <div className="stats">
            {pokemon.stats.map((info) => {
              if (
                info.stat.name == 'attack' ||
                info.stat.name == 'defense' ||
                info.stat.name == 'hp'
              ) {
                return (
                  <p key={info.stat.name}>
                    <strong>
                      {info.stat.name.charAt(0).toUpperCase() +
                        info.stat.name.slice(1)}
                      :
                    </strong>{' '}
                    {info.base_stat}
                  </p>
                )
              }
            })}
          </div>
        )}
      </div>
    </>
  )
}
