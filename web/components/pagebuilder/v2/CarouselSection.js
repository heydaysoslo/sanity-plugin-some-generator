import React from 'react'
import Carousel from '../../elements/Carousel'
import CloudinaryMediaResolver from '@heydays/CloudinaryMediaResolver'
import Spacer from '@heydays/Spacer'

const CarouselSection = ({ className, images, aspectRatio = 'original' }) => {
  if (!images) return null
  return (
    <div className={className}>
      <Spacer />
      <Carousel>
        {images.map(image => (
          <CloudinaryMediaResolver
            key={image._key}
            node={image}
            aspectRatio={aspectRatio}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselSection
