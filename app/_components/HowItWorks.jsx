import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6 border border-muted rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Sign Up/Login</h3>
            <p>Access your personalized dashboard.</p>
          </div>
          <div className="p-6 border border-muted rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Choose a Template</h3>
            <p>Select from our variety of AI tools.</p>
          </div>
          <div className="p-6 border border-muted rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Fill in the Details</h3>
            <p>Provide necessary input for the AI.</p>
          </div>
          <div className="p-6 border border-muted rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Generate Output</h3>
            <p>Get your AI-generated content instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
