import { CollectionConfig } from 'payload'

const CarouselImages: CollectionConfig = {
  slug: 'carousel-images',
  access: {
    read: () => true, // public read access for API
  },
  labels: {
    singular: 'Carousel Image',
    plural: 'Carousel Images',
  },
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['alt', 'image'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image File',
    },
  ],
}

export default CarouselImages
