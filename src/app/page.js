import { Carousel } from 'antd';
import Image from 'next/image';

export default function Home() {
  return (
    <Carousel autoplay>
      <div className="" >
        <div className="relative h-1/2">
          <Image
            src="https://aivolved.in/wp-content/uploads/2024/06/Aivolved-05-scaled.jpg"
            alt="Aivolved Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className=" " >
        <div className="relative h-1/2">
          <Image
            src="https://aivolved.in/wp-content/uploads/2024/06/Aivolved-05-scaled.jpg"
            alt="Aivolved Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className=" " >
      <div className="relative h-1/2">
          <Image
            src="https://aivolved.in/wp-content/uploads/2024/06/Aivolved-05-scaled.jpg"
            alt="Aivolved Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </Carousel>
  );
}
