import Link from 'next/link';

export default function IconDemoPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h1 className="text-display-xl mb-6">
            Gradient Icon Animation
          </h1>
          <p className="text-body-lg text-secondary max-w-2xl mx-auto">
            The website now features beautiful gradient floating icons that appear on all pages.
            These colorful animations enhance the visual appeal with premium gradient effects.
          </p>
        </div>
        
        <div className="mt-16 text-center">
          <div className="card max-w-4xl mx-auto">
            <h2 className="text-heading-xl mb-4">Gradient Animation System</h2>
            <div className="text-left space-y-4 text-body-md text-secondary">
              <p>
                <strong>Gradient Floating Icons:</strong> The website now has 6 beautiful gradient icons 
                that float elegantly at the edges of every page. Each icon uses unique gradient color 
                combinations: blue-purple, green-cyan, orange-red, purple-pink, cyan-blue, and red-orange.
              </p>
              <p>
                <strong>Enhanced Visibility:</strong> The icons now have 60-100% opacity with subtle 
                drop-shadow glow effects, making them clearly visible while maintaining elegance. 
                They include enhanced details like data points on charts and connection lines.
              </p>
              <p>
                <strong>Premium Animation:</strong> The system uses 10-second animation cycles with 
                scaling effects, opacity changes, and smooth floating movements. Icons grow/shrink 
                slightly and have beautiful glow effects for a premium feel.
              </p>
              <p>
                <strong>SVG Gradients:</strong> Uses crisp SVG gradient definitions for perfect 
                scalability and beautiful color transitions. The system remains performance-optimized 
                and respects accessibility preferences.
              </p>
            </div>
            
            <div className="mt-8 flex justify-center space-x-4">
              <Link href="/" className="btn-primary">Home Page</Link>
              <Link href="/minimal-test" className="btn-secondary">Test Page</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}