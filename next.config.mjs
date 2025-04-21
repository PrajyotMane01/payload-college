import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.kjei.edu.in',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'fxsugvdoixqddbduyyjv.supabase.co',
        pathname: '/storage/v1/s3/**', // match all image paths under the S3 route
      },
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
