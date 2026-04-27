// /src/lib/cloudinary.ts

export const CLOUDINARY_CONFIG = {
    cloudName: 'dbn6nfh2q',
};

// Untuk IMAGE (JPG, PNG, dll)
export const getImageUrl = (publicId: string): string => {
    return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/image/upload/f_auto,q_auto/${publicId}`;
};

// Untuk VIDEO (MP4)
export const getVideoUrl = (publicId: string): string => {
    return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/video/upload/q_auto/${publicId}`;
};

// Untuk AUDIO (MP3) — Cloudinary treat audio sebagai video resource
export const getAudioUrl = (publicId: string): string => {
    return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/video/upload/${publicId}`;
};