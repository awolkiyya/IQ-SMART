/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack:(config,{buildId,dev,isServer,defaultLoader,webPack})=>{
        config.resolve.alias.canvas = false
        config.resolve.alias.canvas = false
        return config
    },
};

export default nextConfig;
