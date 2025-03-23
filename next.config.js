/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output:"export",
  images:{
    unoptimized:true,
    domains:["res.cloudinary.com"]
  }
}

module.exports = nextConfig
