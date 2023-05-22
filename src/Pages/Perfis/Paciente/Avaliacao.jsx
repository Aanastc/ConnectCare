import React from 'react'
import { Star } from 'phosphor-react'

export function Avaliacao({ name, rating, comment, avatar }) {
  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} weight="fill" color="#FFD700" size={20} />)
      } else {
        stars.push(<Star key={i} weight="regular" color="#D3D3D3" size={20} />)
      }
    }
    return stars
  }

  return (
    <div className="bg-white rounded-xl border border-purple-500 shadow p-4 mb-4 w-56 h-full">
      <div className="flex flex-row mb-2">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img className="w-full h-full object-cover" src={avatar} alt={name} />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-medium text-gray-800">{name}</h3>
          <div className="flex items-center mb-1">{renderStars()}</div>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-600">{comment}</p>
      </div>
    </div>
  )
}
