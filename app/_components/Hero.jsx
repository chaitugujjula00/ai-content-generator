import React from 'react'

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-screen" 
      style={{ backgroundImage: 'url("https://cdn.leonardo.ai/users/51550c62-8ffc-4a2d-90ab-0ecc06ed5e31/generations/d7eee050-d6fa-46af-a0ba-fdaadcb926e2/variations/alchemyrefiner_alchemymagic_1_d7eee050-d6fa-46af-a0ba-fdaadcb926e2_0.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 py-20 h-full flex flex-col justify-center items-center relative z-10">
        <h1 className="text-5xl font-bold text-primary-foreground mb-4">
          Unleash the Power of AI Tools at Your Fingertips.
        </h1>
        <p className="text-2xl text-primary-foreground mb-8">
          Effortlessly generate content, titles, tags, and more.
        </p>
        <a 
          href="/register" 
          className="bg-primary text-primary-foreground py-3 px-6 rounded-lg text-lg font-semibold hover:bg-primary-dark transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}

export default Hero