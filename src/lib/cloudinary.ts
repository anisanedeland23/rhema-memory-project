export const CLOUDINARY_CONFIG = {
  cloudName: "dbn6nfh2q",
};

// IMAGE
export const getImageUrl = (publicId: string): string => {
  return `https://res.cloudinary.com/dbn6nfh2q/image/upload/f_auto,q_auto,w_800/${publicId}`;
};

export const getVideoUrl = (publicId: string): string => {
  return `https://res.cloudinary.com/dbn6nfh2q/video/upload/q_auto,f_auto,w_800/${publicId}`;
};

// AUDIO
export const getAudioUrl = (publicId: string): string => {
  return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/video/upload/${publicId}`;
};