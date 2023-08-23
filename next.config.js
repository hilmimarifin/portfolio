/** @type {import('next').NextConfig} */
const nextConfig = {
    images:  {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com',
                port: '',
                pathname: '/f/**'
            }
        ]
    },
    experimental: {
        appDir: true,
        fontLoaders: [
          { loader: "@next/font/google", options: { subsets: ["latin"] } },
        ],
      },
}

module.exports = nextConfig
