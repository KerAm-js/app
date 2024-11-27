export interface IImage {
  uri: string;
  name: string;
  type: string;
}

export interface IPhotoInputProps {
  photosCount: number;
  images: IImage[];
  setImages: (images: IImage[]) => void;
  advertId: any,
  advertType: any,
  token: string,
  
}
