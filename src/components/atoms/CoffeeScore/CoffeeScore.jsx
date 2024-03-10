function CoffeeScore({ score }) {
  switch (score) {
    case 0:
      return <img src="/images/review/property-0.svg" alt="0점 리뷰" />;
    case 0.5:
      return <img src="/images/review/property-0.5.svg" alt="0점 리뷰" />;
    case 1:
      return <img src="/images/review/property-1.svg" alt="0점 리뷰" />;
    case 1.5:
      return <img src="/images/review/property-1.5.svg" alt="0점 리뷰" />;
    case 2:
      return <img src="/images/review/property-2.svg" alt="0점 리뷰" />;
    case 2.5:
      return <img src="/images/review/property-2.5.svg" alt="0점 리뷰" />;
    case 3:
      return <img src="/images/review/property-3.svg" alt="0점 리뷰" />;
    case 3.5:
      return <img src="/images/review/property-3.5.svg" alt="0점 리뷰" />;
    case 4:
      return <img src="/images/review/property-4.svg" alt="0점 리뷰" />;
    case 4.5:
      return <img src="/images/review/property-4.5.svg" alt="0점 리뷰" />;
    case 5:
      return <img src="/images/review/property-5.svg" alt="0점 리뷰" />;
  }
}

export default CoffeeScore;
