import Image from "next/image";
import heroImage from "../../public/hero-image.png";

export default function HeroSection() {
  return (
    <>
      <section className="flex h-screen items-center justify-center bg-transparent text-black">
        {/* All Component need have z-index greater than 10 */}
        {/* Background Image */}
        <Image
          className="absolute z-10"
          alt="Mountains"
          src={heroImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "66%" }} // Adjust position
        />
      </section>
    </>
  );
}
