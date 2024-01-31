// React JS
import React from 'react'

// Next JS
import Image, { StaticImageData } from 'next/image'

interface ImageDevProps {
  containerStyle?: string
  imageSrc: StaticImageData
}

const ImageDev = ({ containerStyle, imageSrc }: ImageDevProps) => {
  return (
    <div className={`${containerStyle}`}>
      <Image src={imageSrc} alt="image_dev" fill priority />
    </div>
  )
}

export default ImageDev
