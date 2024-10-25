export interface Service {
  name: string;
  price: string;
  description: string;
  images: Image[];
}

export interface Image {
  src: string;
  alt: string;
}
