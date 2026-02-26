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
                src: '/SHREE_SAI_BOREWELL_FINAL_LOGO.png',
                sizes: 'any',
                type: 'image/png',
            },
            {
                src: '/SHREE_SAI_BOREWELL_FINAL_LOGO.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/SHREE_SAI_BOREWELL_FINAL_LOGO.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}

