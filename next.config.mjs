/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dclaevazetcjjkrzczpc.supabase.co',
            },
        ],
    },
    // output: "export"
};

export default nextConfig;
