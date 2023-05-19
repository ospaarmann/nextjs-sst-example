import Image from "next/image";
import Head from "next/head";
import TestImage from "../../public/images/test-image.png";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-wrap justify-around items-center h-screen">
        <Head>
          <title>Image Grid</title>
        </Head>
        <div className="w-1/2 p-4">
          <h2 className="mb-4 text-xl">Local - Next.js Image Component</h2>
          <div className="w-[300px] h-[300px] relative">
            <Image
              alt="Example Image"
              src={TestImage}
              // width={300}
              // height={300}
              fill={true}
              quality={80}
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-1/2 p-4">
          <h2 className="mb-4 text-xl">S3 - Next.js Image Component</h2>
          <div className="w-[300px] h-[300px] relative">
            <Image
              alt="Example Image"
              src="https://example-images-delude-prey-demerit.s3.eu-central-1.amazonaws.com/Ole_rave_1.5_garbicz_6e17beed-ad52-448b-b602-0da87a8beb5f.png"
              // width={300}
              // height={300}
              fill={true}
              quality={80}
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-1/2 p-4">
          <h2 className="mb-4 text-xl">Local - HTML img</h2>
          <div className="w-[300px] h-[300px] relative">
            <img
              className="object-cover w-full h-full"
              alt="Example Image"
              src="/images/test-image.png"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="w-1/2 p-4">
          <h2 className="mb-4 text-xl">S3 - HTML img</h2>
          <div className="w-[300px] h-[300px] relative">
            <img
              className="object-cover w-full h-full"
              alt="Example Image"
              src="https://example-images-delude-prey-demerit.s3.eu-central-1.amazonaws.com/Ole_rave_1.5_garbicz_6e17beed-ad52-448b-b602-0da87a8beb5f.png"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
