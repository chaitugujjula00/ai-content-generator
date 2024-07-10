import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import HowItWorks from "./_components/HowItWorks";
import HomeImg from '../public/home.png'
import Link from "next/link";
export default function Home() {
  return (
    // <div className="bg-background text-foreground">
    //   <Header />
    //   <Hero />
    //   <Features />
    //   <HowItWorks />
    // </div>
<body class="bg-background text-foreground">
    <header class="bg-primary text-primary-foreground p-4">
        <nav class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold">smartContentAI</h1>
            <ul class="flex space-x-4 items-center">
                <li class="hover:text-secondary">Home</li>
                <Link href={'/dashboard'}><li class="hover:text-secondary-foreground hover:drop-shadow-2xl bg-secondary px-4 py-2 rounded-xl">Login</li></Link>
                
            </ul>
        </nav>
    </header>

    <main class="container mx-auto mt-8 p-4">
        <section class="text-center mb-16">
            <h1 class="text-5xl font-bold mb-4">AI-Powered Content Creation</h1>
            <p class="text-xl mb-8">Unleash creativity at scale with our advanced AI technology</p>
            <div class="flex justify-center space-x-4">
                <Link href={'/dashboard'} class="bg-primary text-primary-foreground py-2 px-6 rounded-full hover:bg-accent hover:text-accent-foreground transition duration-300">Start Free Trial</Link>
                <Link href={'/dashboard'} class="bg-secondary text-secondary-foreground py-2 px-6 rounded-full hover:bg-accent hover:text-accent-foreground transition duration-300">Watch Demo</Link>
            </div>
        </section>

        <section class="mb-16">
            <div class="flex flex-col md:flex-row items-center justify-between">
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <Image src={HomeImg} alt="AI Content Generation" class="rounded-lg shadow-lg"/>
                </div>
                <div class="md:w-1/2 md:pl-8">
                    <h2 class="text-3xl font-semibold mb-4">Transform Your Content Strategy</h2>
                    <p class="mb-4">Our AI-powered platform revolutionizes content creation, allowing you to:</p>
                    <ul class="list-disc list-inside space-y-2">
                        <li>Generate high-quality articles, blog posts, and social media content</li>
                        <li>Customize tone and style to match your brand voice</li>
                        <li>Scale your content production effortlessly</li>
                        <li>Optimize for SEO with AI-driven insights</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="mb-16">
            <h2 class="text-3xl font-semibold text-center mb-8">How It Works</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                    <h3 class="text-xl font-semibold mb-2">Input Your Topic</h3>
                    <p>Provide a brief description or keywords for your desired content.</p>
                </div>
                <div class="text-center">
                    <div class="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                    <h3 class="text-xl font-semibold mb-2">AI Generation</h3>
                    <p>Our advanced AI algorithms create high-quality content based on your input.</p>
                </div>
                <div class="text-center">
                    <div class="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                    <h3 class="text-xl font-semibold mb-2">Review and Publish</h3>
                    <p>Edit the generated content if needed, then publish with confidence.</p>
                </div>
            </div>
        </section>

        <section class="mb-16">
            <h2 class="text-3xl font-semibold text-center mb-8">Key Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-2">Multi-language Support</h3>
                    <p>Create content in over 50 languages with native-like fluency.</p>
                </div>
                <div class="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-2">Plagiarism-free Content</h3>
                    <p>Generate unique content that passes plagiarism checks every time.</p>
                </div>
                <div class="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-2">SEO Optimization</h3>
                    <p>Built-in SEO tools to ensure your content ranks well on search engines.</p>
                </div>
                <div class="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-2">Integration Ready</h3>
                    <p>Easily integrate with your existing content management systems.</p>
                </div>
            </div>
        </section>
    </main>
    <section class="mt-16 bg-card text-card-foreground py-12">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-background p-6 rounded-lg shadow-md">
                    <p class="mb-4">"smartContentAI has revolutionized our content strategy. We're producing twice the content in half the time!"</p>
                    <div class="flex items-center">
                        <img src="https://i.pravatar.cc/60?img=1" alt="Customer" class="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <p class="font-semibold">Sarah Johnson</p>
                            <p class="text-muted">Marketing Director, TechCorp</p>
                        </div>
                    </div>
                </div>
                <div class="bg-background p-6 rounded-lg shadow-md">
                    <p class="mb-4">"The quality of AI-generated content is impressive. It's hard to believe it's not written by humans!"</p>
                    <div class="flex items-center">
                        <img src="https://i.pravatar.cc/60?img=2" alt="Customer" class="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <p class="font-semibold">Michael Chen</p>
                            <p class="text-muted">Content Manager, BlogMaster</p>
                        </div>
                    </div>
                </div>
                <div class="bg-background p-6 rounded-lg shadow-md">
                    <p class="mb-4">"smartContentAI has saved us countless hours. Our SEO rankings have improved significantly!"</p>
                    <div class="flex items-center">
                        <img src="https://i.pravatar.cc/60?img=3" alt="Customer" class="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <p class="font-semibold">Emma Rodriguez</p>
                            <p class="text-muted">CEO, GrowFast Startups</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="bg-popover text-popover-foreground mt-16 py-8">
        <div class="container mx-auto text-center">
            <p>&copy; 2024 smartContentAI. All rights reserved.</p>
        </div>
    </footer>
    </body>
  );
}
