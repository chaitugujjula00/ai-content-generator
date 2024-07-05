import React from 'react'

const Features = () => {
  return (
    <section class="py-20">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-8">Explore Our Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div class="bg-card shadow-lg rounded-lg p-6">
          <h3 class="text-2xl font-bold mb-2">Blog Writer</h3>
          <p class="text-muted-foreground">Create engaging blog posts with a click.</p>
        </div>

        <div class="bg-card shadow-lg rounded-lg p-6">
          <h3 class="text-2xl font-bold mb-2">YouTube Title Generator</h3>
          <p class="text-muted-foreground">Generate catchy titles for your videos.</p>
        </div>

        <div class="bg-card shadow-lg rounded-lg p-6">
          <h3 class="text-2xl font-bold mb-2">Instagram Tag Finder</h3>
          <p class="text-muted-foreground">Find the best tags to boost your posts.</p>
        </div>
        
        <div class="bg-card shadow-lg rounded-lg p-6">
          <h3 class="text-2xl font-bold mb-2">And More</h3>
          <p class="text-muted-foreground">Explore a variety of other powerful features designed to enhance your content creation process.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features