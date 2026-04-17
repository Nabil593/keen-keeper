import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
            {/* Minimalist Illustration/Icon */}
            <div className="mb-8">
                <h1 className="text-9xl font-bold text-gray-100">404</h1>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Lost in the shelf?
            </h2>
            <p className="text-gray-500 mb-8 max-w-md">
                The page you are looking for does not exist or has been moved to a different shelf.
            </p>

            {/* Back to Home Button */}
            <Link 
                href="/" 
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all font-medium"
            >
                <FiArrowLeft />
                <span>Return Home</span>
            </Link>
        </div>
    );
}