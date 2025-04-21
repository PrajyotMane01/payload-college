import { CollectionConfig } from 'payload'

const Updates: CollectionConfig = {
  slug: 'updates',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Important',
          value: 'Important',
        },
        {
          label: 'Announcement',
          value: 'Announcement',
        },
        {
          label: 'Achievement',
          value: 'Achievement',
        },
        {
          label: 'Research',
          value: 'Research',
        },
      ],
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'linkText',
      label: 'Button Text',
      type: 'text',
      required: true,
      defaultValue: 'Read more',
    },
    {
      name: 'linkURL',
      label: 'Link URL (optional)',
      type: 'text',
      required: false,
    },
  ],
}

export default Updates
