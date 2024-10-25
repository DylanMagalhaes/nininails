export interface Service {
  name: string;
  price: string;
  description: string;
  images: Image[];
}

interface Image {
  src: string;
  alt: string;
}
