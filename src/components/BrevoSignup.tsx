'use client'
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';

interface BrevoSignupFormState {
  email: string;
  name: string;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string;
}

export function BrevoSignup() {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const scrollPosition = window.scrollY;
    setIsClient(true);
    
    window.scrollTo({
      top: scrollPosition,
      behavior: 'auto'
    });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    if (!email.trim()) {
      setError('Please enter your email address');
      setIsSubmitting(false);
      return;
    }
    
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/subscribe-brevo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email,
          name: name.trim() || undefined,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to subscribe');
      }
      
      setIsSuccess(true);
      setEmail('');
      setName('');
    } catch (err: any) {
      setError(err.message || 'Failed to subscribe. Please try again later.');
      console.error('Subscription error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  if (!isClient) {
    return <div className="mt-24 md:w-1/2 mx-auto p-6 border-2 border-red-600 bg-black rounded-lg shadow-md" aria-hidden="true">
    </div>;
  }

  return (
    <div className="mt-24 md:w-1/2 mx-auto p-6 border-2 border-red-600 bg-black rounded-lg shadow-md">
      <h2 className="text-2xl bg-gradient-to-r from-red-500 to-red-300 text-transparent bg-clip-text font-bold mb-4 text-gray-400">Join My Newsletter</h2>
      <p className="text-gray-300 mb-6">Stay updated with my latest development news.</p>
      
      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-4">
          <p className="font-medium">Thanks for subscribing!</p>
          <p className="text-sm mt-1">I've added you to my newsletter list.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md mb-4">
              {error}
            </div>
          )}
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-white-500"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 rounded-md text-black font-medium cursor-pointer
              ${isSubmitting 
                ? 'bg-purple-300 cursor-pointer' 
                : 'bg-purple-300 hover:bg-purple-100 focus:ring-2 focus:ring-white-500 focus:ring-offset-2'}`}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
          </button>
        </form>
      )}
      
      <p className="text-xs text-gray-500 mt-4">
        By subscribing, you consent to receiving updates from me.
      </p>
    </div>
  );
}
