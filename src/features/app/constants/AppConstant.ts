import {CarouselModel} from './../models/App';

export const HomeLabels = {
  HEADER_NAV_TITLE: 'Carousel Demo App',
  HEADER_NAV_NAME: 'Home',
  CAROUSEL_IMAGE_CATEGORY: 'nature',
};

export const PAGE_COUNT = 4;
export const PAGE_SIZE = 12;
export const CAROUSEL_MODULE_SIZE = 3;
export const SAMPLE_CAROUSEL_INFO =
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.';

export const CarouselSource: CarouselModel = [
  {
    id: 1,
    title: 'First Block',
    description: SAMPLE_CAROUSEL_INFO,
    images: [
      'https://pixabay.com/get/g94074596d2f060fbb46b17dfea9f9918e7c11b4a3fd68294a2cd31a6cb1b3fbe286ba9bd9fa1d701bb42c15a124f58ff_640.jpg',
      'https://pixabay.com/get/gcb66c140a31cc79713adff5e7ec636ce50efa9b7d16624afe18dd9326294431ec3043aff87c7944ba39aa858e8ec6f579ff0f65b343c978a25ad29c95106342b_640.jpg',
      'https://pixabay.com/get/g4aad33a69d31fd310d8a8e18f7653e3c48194cf66e3c9f990da1cd00af7743302268946eb6bc0c5aaf5db07b91088028_640.jpg',
    ],
  },
  {
    id: 2,
    title: 'Second Block',
    description: SAMPLE_CAROUSEL_INFO,
    images: [
      'https://pixabay.com/get/ga998c0226efef60f6fe588a5f025f4a487ab19236d7400adeaa81a320c798157555909eae8c8db01552f5215da721f4152276b1881ac98a33641b6e10c8c9d75_640.jpg',
      'https://pixabay.com/get/g3346690b09d4c78fcd679433cfc08e1efbfd638aa9bbe0355cc9bbc0300be75e125bd11f0d2d8efdafbd78d78c77b9db3a0c81031ed33621f8e2159cda7886f3_640.jpg',
      'https://pixabay.com/get/gf740ef5fa2a9ee4b752ca38c89dbe45287fefff5cf6249479ed59c4fb0af5c4f54c0bff783974a6ff6ce2e367c5f9398_640.jpg',
    ],
  },
  {
    id: 3,
    title: 'Third Block',
    description: SAMPLE_CAROUSEL_INFO,
    images: [
      'https://pixabay.com/get/gb57aad9a53f147b5534286196f8ccb12dff0a33a5f44eb71661dcd1537a3e14b10a4a3046632b661eaa2230605a62066b098c693b15fbd6719335fde9b8d2c17_640.jpg',
      'https://pixabay.com/get/g6ae99971791b270316e73d42ef42bf4a3c3714be2960bacc232c2282d5d5c48dccc427ddfdda54c8fc8b17a12d124ec0f1e1424d240ff0c256cb8bacab1604d3_640.jpg',
      'https://pixabay.com/get/gc67749264a39e9d11c3558c1e28d140c4107c55437a2c9d33d19f9867839d53f19d8fe68fed84a99e9a278b1bfdf8c32_640.jpg',
    ],
  },
  {
    id: 4,
    title: 'Fourth Block',
    description: SAMPLE_CAROUSEL_INFO,
    images: [
      'https://pixabay.com/get/ge3cfd3f9d2f95b614848f4aa572514d89061fa2f394e55ff8e444212d7c786788dfbb4c23a3e235671717de45826fb3088306b32fdb16d040ae9b76a5df6cc23_640.jpg',
      'https://pixabay.com/get/gf1d72f2e801b6a3c654ed774c830ec325fde752e02f017f12934915a46b9e3a8e77fd080fd34dfaa698fa979822a42b5f4d584a6b262fd97a1aa75baf4a6d264_640.jpg',
      'https://pixabay.com/get/g622b8025f474d6d781090c1b0b43555171c49f6dff19626c63df1154c1f7878648af7fd5f94d494273158a685f5ea047d2c057f63c21b101d707e7594ae5e603_640.jpg',
    ],
  },
];
