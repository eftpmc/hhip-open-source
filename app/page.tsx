import Image from "next/image";
import { LuLock, LuTag, LuBird, LuSmile, LuWallet, LuVenetianMask, LuCog, LuPhone, LuGithub } from "react-icons/lu";

export default function Home() {
  return (
    <main className="container mx-auto">
      {/* Header */}
      <header className="flex justify-between items-center p-4 pt-0 bg-blue">
        {/* Logo */}
        <div>
          <Image src="/White.png" alt="Logo" width={50} height={50} />
        </div>

        {/* Navigation */}
        <nav className="flex-grow text-right">
          <ul className="flex justify-end space-x-8 p-8">
            <li><a href="#why" className="text-white font-bold">Why?</a></li>
            <li><a href="#how" className="text-white font-bold">How it works</a></li>
            <li><a href="#benefits" className="text-white font-bold">Benefits</a></li>
          </ul>
        </nav>

        {/* Get a Quote Button */}
        <button className="bg-yellow text-navy font-bold py-2 px-4 rounded">
          Get a Quote
        </button>
      </header>

      <section id="hero" className="p-8 bg-blue flex flex-col items-center">
        {/* Left Side: Header, Body, and Get a Quote Button */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 p-4 flex flex-col items-end">
            <Image src="/Hero.svg" alt="art" width={600} height={600} className="bg-blue rounded-md drop-shadow-md" />
          </div>
          <div className="md:w-1/2 p-4 flex flex-col items-start">
            <h1 className="text-5xl font-bold mb-4">Seamless Parking Management</h1>
            <p className="text-lg mb-4">Say goodbye to the hassle and inconveniences of traditional towing,<br></br> and welcome the future of parking enforcement with HHIP.<br></br> Discover why HHIP is the superior choice compared to towing.</p>
            <button className="bg-yellow text-navy font-bold py-2 px-4 rounded">
              Get a Quote
            </button>
          </div>
        </div>

        <h1 className="text-xl font-bold mt-16 p-4">We cater to:</h1>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-md font-bold p-4">Municipalities</p>
          <p className="text-md font-bold p-4">Homeowners<br></br>Associations</p>
          <p className="text-md font-bold p-4">Commercial<br></br>Parking Lots</p>
        </div>
      </section>

      {/* Content Sections */}
      <section id="why" className="p-8 bg-white">
        <div className="mx-auto w-full p-8">
          {/* Section Heading */}
          <div className="text-center mb-8 p-4">
            <h2 className="text-xl font-bold text-yellow py-4">WHY THIS PRODUCT</h2>
            <h3 className="text-3xl font-bold text-blue pb-8">Why Choose HHIP?</h3>
          </div>

          {/* Card Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Card 1 */}
            <div className="bg-gray-100 p-6 rounded-lg drop-shadow-lg max-w-sm">
              <Image src="/Map.svg" alt="service1" width={300} height={200} className="mb-4 rounded-lg" />
              <h4 className="text-xl font-bold mb-2 text-navy">Random, Unbiased Inspections</h4>
              <p className="text-navy font-light">Our inspections are conducted randomly, ensuring a fair assessment without focusing on specific individuals or areas.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 p-6 rounded-lg drop-shadow-lg max-w-sm">
              <Image src="/Anon.svg" alt="service2" width={300} height={200} className="mb-4 rounded-lg" />
              <h4 className="text-xl font-bold mb-2 text-navy">Neutral Third-Party Resolution</h4>
              <p className="text-navy font-light">HHIPE serves as a completely neutral third party, eliminating disputes between neighbors or management. Our goal is to create a harmonious parking environment for all.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 p-6 rounded-lg drop-shadow-lg max-w-sm">
              <Image src="/Pictures.svg" alt="service3" width={300} height={200} className="mb-4 rounded-lg" />
              <h4 className="text-xl font-bold mb-2 text-navy">Photographic Documentation</h4>
              <p className="text-navy font-light">Every violation is thoroughly documented with photos, providing clear evidence for effective resolution. This method reduces the potential for dispute.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="how" className="p-8 pb-16 bg-white">
        <div className="mx-auto w-full pt-8">
          {/* Section Heading */}
          <div className="text-center mb-8 p-4">
            <h2 className="text-xl font-bold text-yellow py-4">HOW IT WORKS</h2>
            <h3 className="text-3xl font-bold text-blue pb-4">Our Method</h3>
          </div>

          {/* Card Container */}
          <div className="grid grid-cols-1 gap-8 p-2 md:p-4 py-0 items-center justify-items-center">
            {/* Card 1 */}
            <div className="bg-blue p-6 rounded-lg drop-shadow-lg max-w-3xl grid grid-cols-1 md:grid-cols-2">
              <Image src="/TIRE.png" alt="service1" width={300} height={200} className="mb-4 rounded-lg" />
              <div className="flex flex-col justify-center">
                <h4 className="text-md font-bold text-yellow pb-4">STEP 1</h4>
                <h4 className="text-xl font-bold mb-2 text-white">Random, Unbiased Inspections</h4>
                <p className="text-white font-light">Our inspections are conducted randomly, ensuring a fair assessment without focusing on specific individuals or areas.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-blue p-6 rounded-lg drop-shadow-lg max-w-3xl grid grid-cols-1 md:grid-cols-2">
              <Image src="/TAG.png" alt="service2" width={300} height={200} className="mb-4 rounded-lg" />
              <div className="flex flex-col justify-center">
                <h4 className="text-md font-bold text-yellow pb-4">STEP 2</h4>
                <h4 className="text-xl font-bold mb-2 text-white">Neutral Third-Party Resolution</h4>
                <p className="text-white font-light">HHIPE serves as a completely neutral third party, eliminating disputes between neighbors or management. Our goal is to create a harmonious parking environment for all.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-blue p-6 rounded-lg drop-shadow-lg max-w-3xl grid grid-cols-1 md:grid-cols-2">
              <Image src="/DROPBOX.png" alt="service3" width={300} height={200} className="mb-4 rounded-lg" />
              <div className="flex flex-col justify-center">
                <h4 className="text-md font-bold text-yellow pb-4">STEP 3</h4>
                <h4 className="text-xl font-bold mb-2 text-white">Photographic Documentation</h4>
                <p className="text-white font-light">Every violation is thoroughly documented with photos, providing clear evidence for effective resolution. This method reduces the potential for dispute.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="benefits" className="p-8 px-16 bg-blue">
        <div className="mx-auto w-full">
          <div className="text-center mb-8 p-4">
            <h2 className="text-xl font-bold text-yellow py-4">BENEFITS</h2>
            <h3 className="text-3xl font-bold text-white pb-8">What we do Differently</h3>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="p-4 rounded-lg flex flex-col items-left">
              <LuLock className="text-yellow text-4xl mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Safety and Security First</h4>
              <p className="text-white font-light text-left">Towing can sometimes damage vehicles, leaving you with costly repairs. HHIPE ensures your vehicle remains in pristine condition, with zero risk of damage.</p>
            </div>

            <div className="p-4 rounded-lg flex flex-col items-left">
              <LuTag className="text-yellow text-4xl mb-4" />
              <h4 className="text-xl font-bold text-white mb-4">Minimal Disruption</h4>
              <p className="text-white font-light text-left">Towing can disrupt your day, forcing you to arrange for pickup and transportation. With HHIPE, you can remove the tag yourself within minutes, getting you back on the road quickly.</p>
            </div>

            <div className="p-4 rounded-lg flex flex-col items-left">
              <LuBird className="text-yellow text-4xl mb-4" />
              <h4 className="text-xl font-bold text-white mb-4">Peace of Mind</h4>
              <p className="text-white font-light text-left">When your car gets towed, it's easy to assume it's been stolen, leading to confusion, anxiety, and stress. With HHIPE, your car is exactly where you left it, and our clear instructions on your vehicle guide you through the simple tag removal process. In minutes, you're on your way, stress-free.</p>
            </div>

            <div className="p-4 rounded-lg flex flex-col items-left">
              <LuSmile className="text-yellow text-4xl mb-4" />
              <h4 className="text-xl font-bold text-white mb-4">Conflict Resolution</h4>
              <p className="text-white font-light text-left">Towing often leads to confrontations and unpleasant encounters. With HHIPE, we eliminate any potential confrontations, making the entire process stress-free for everyone involved.</p>
            </div>

            <div className="p-4 rounded-lg flex flex-col items-left">
              <LuWallet className="text-yellow text-4xl mb-4" />
              <h4 className="text-xl font-bold text-white mb-4">Payment Flexibility</h4>
              <p className="text-white font-light text-left">Towing companies often demand cash payments, limiting your options. HHIPE accepts all major credit cards, offering you a hassle-free payment experience.</p>
            </div>

            <div className="p-4 rounded-lg flex flex-col items-left">
              <LuVenetianMask className="text-yellow text-4xl mb-4" />
              <h4 className="text-xl font-bold text-white mb-4">Privacy and Discretion</h4>
              <p className="text-white font-light text-left">Towing can be a public embarrassment, but HHIPE operates discreetly. Your vehicle remains tagged, avoiding the embarrassment of public removal.</p>
            </div>

            <div className="p-4 rounded-lg flex flex-col items-left">
              <LuCog className="text-yellow text-4xl mb-4" />
              <h4 className="text-xl font-bold text-white mb-4">Efficiency Redefined</h4>
              <p className="text-white font-light text-left">Traditional towing requires one tow truck per vehicle, leading to significant inefficiency. With HHIPE, one person can efficiently manage up to 10 HHIPE tags, making our method highly cost-effective and quick.</p>
            </div>

            <div className="p-4 rounded-lg flex flex-col items-left">
              <LuPhone className="text-yellow text-4xl mb-4" />
              <h4 className="text-xl font-bold text-white mb-4">Convenience at Your Fingertips</h4>
              <p className="text-white font-light text-left">Towing services are often far away, causing inconvenience for car owners. With HHIPE, there's no need to wait – simply scan the QR code, pay your fine and use our on-site drop box.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-8 bg-white flex flex-col items-center relative">
        {/* SVG background */}
        <div className="absolute inset-0 z-0">
          <Image src="/SAND.svg" layout="fill" objectFit="cover" objectPosition="top" alt="Background" />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center z-10">

          <div className="relative mb-4">
            <Image src="/BEACH.svg" alt="beach" width={300} height={200} className="rounded-lg relative md:bottom-0 bottom-[150px]" />
          </div>
          <div className="grid grid-cols-3 items-center">
          <Image src="/White.png" alt="Logo" width={50} height={50} />
            <div className=" flex flex-col p-8">
              <h1 className="text-md text-navy font-bold p-2">NAVIGATION</h1>
              <a href="#why" className="text-white font-bold p-2 text-md">Why?</a>
              <a href="#how" className="text-white font-bold p-2 text-md">How it works</a>
              <a href="#benefits" className="text-white font-bold p-2 text-md">Benefits</a>
            </div>
            <div className="p-8">
              <button className="bg-yellow text-navy font-bold py-2 px-4 rounded">
                Get a Quote
              </button>
            </div>
          </div>


        </div>
        <a className="py-4" href="https://github.com/eftpmc"><LuGithub className="text-navy" /></a>
      </footer>
    </main>
  );
}
