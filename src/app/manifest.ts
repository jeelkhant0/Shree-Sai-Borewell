import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Shree Sai Borewell',
        short_name: 'Sai Borewell',
        description: 'Expert Borewell Drilling & Pump Services in Vadodara',
        start_url: '/',
        display: 'standalone',
        background_color: '#001e2b',
        theme_color: '#001e2b',
        orientation: 'portrait',
        icons: [
            {
                src: '/brand-icon.webp',   // Fixed: was .png, only .webp exists
                sizes: 'any',
                type: 'image/webp',
            },
            {
                src: '/logossb.webp',
                sizes: '192x192',
                type: 'image/webp',
            },
            {
                src: '/logossb.webp',
                sizes: '512x512',
                type: 'image/webp',
            },
        ],
    }
}
