import Link from 'next/link';

export default function MinimalTestPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h1 className="text-display-xl mb-6">
            Gradient Icon Animation Test
          </h1>
          <p className="text-body-lg text-secondary max-w-2xl mx-auto">
            Look for colorful gradient floating icons around the page edges.
            They now have beautiful gradient colors and glow effects!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-heading-lg mb-4">Gradient Colors</h3>
            <p className="text-body-md text-secondary">
              Each icon uses beautiful gradient colors: blue-purple, green-cyan, 
              orange-red, purple-pink, cyan-blue, and red-orange combinations.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-heading-lg mb-4">Glow Effects</h3>
            <p className="text-body-md text-secondary">
              Icons have subtle drop-shadow glow effects that make them more 
              visible and add a premium feel to the animations.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-heading-lg mb-4">Enhanced Movement</h3>
            <p className="text-body-md text-secondary">
              Improved animation with scaling effects and opacity changes. 
              Icons grow/shrink slightly and fade in/out during movement.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="card max-w-2xl mx-auto">
            <h2 className="text-heading-xl mb-4">Gradient Animation Details</h2>
            <div className="text-left space-y-3 text-body-md text-secondary">
              <p>• <strong>6 gradient icons</strong> - each with unique color combinations</p>
              <p>• <strong>10-second cycles</strong> - smooth, engaging movement</p>
              <p>• <strong>Higher visibility</strong> - 60-100% opacity with glow effects</p>
              <p>• <strong>Scale animation</strong> - icons grow/shrink during float</p>
              <p>• <strong>Drop shadows</strong> - blue glow effects for premium look</p>
              <p>• <strong>SVG gradients</strong> - crisp, scalable gradient definitions</p>
            </div>
            
            <div className="mt-6 space-x-4">
              <Link href="/" className="btn-primary">
                Back to Home
              </Link>
              <Link href="/icon-demo" className="btn-secondary">
                Icon Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}