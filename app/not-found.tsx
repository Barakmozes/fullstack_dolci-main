import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-100">
      <div className="text-center px-4">
        <p className="text-8xl mb-6">🍪</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-chocolate-800 mb-4">
          This page got eaten!
        </h1>
        <p className="text-chocolate-500 text-lg mb-8 max-w-md mx-auto">
          Looks like someone couldn&apos;t resist. The page you&apos;re looking for
          doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary px-8 py-3">
            Go Home
          </Link>
          <Link href="/menu" className="btn-secondary px-8 py-3">
            Browse Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
