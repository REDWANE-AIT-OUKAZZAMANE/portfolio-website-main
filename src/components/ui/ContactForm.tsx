'use client';
import { useState } from 'react';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Reset form on success
      setFullName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-10 backdrop-blur-sm bg-secondary/10 dark:bg-secondary/5 rounded-lg border border-accent/20 shadow-lg p-8 w-full max-w-xl mx-auto">
      <h3 className="text-xl font-bold mb-6 text-center font-mono">Send me a message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="group">
          <label htmlFor="fullName" className="block text-sm font-medium mb-2 font-mono text-accent/80 text-left">
            Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md bg-secondary/20 dark:bg-gray-800 focus:ring-2 focus:ring-accent focus:outline-none border border-transparent focus:border-accent/30 transition-all duration-300 text-primary dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder="Your name"
            />
          </div>
        </div>
        
        <div className="group">
          <label htmlFor="email" className="block text-sm font-medium mb-2 font-mono text-accent/80 text-left">
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md bg-secondary/20 dark:bg-gray-800 focus:ring-2 focus:ring-accent focus:outline-none border border-transparent focus:border-accent/30 transition-all duration-300 text-primary dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        
        <div className="group">
          <label htmlFor="subject" className="block text-sm font-medium mb-2 font-mono text-accent/80 text-left">
            Subject
          </label>
          <div className="relative">
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md bg-secondary/20 dark:bg-gray-800 focus:ring-2 focus:ring-accent focus:outline-none border border-transparent focus:border-accent/30 transition-all duration-300 text-primary dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder="Message subject"
            />
          </div>
        </div>
        
        <div className="group">
          <label htmlFor="message" className="block text-sm font-medium mb-2 font-mono text-accent/80 text-left">
            Message
          </label>
          <div className="relative">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-md bg-secondary/20 dark:bg-gray-800 focus:ring-2 focus:ring-accent focus:outline-none border border-transparent focus:border-accent/30 transition-all duration-300 text-primary dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder="Your message here..."
            />
          </div>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-3 font-mono text-sm uppercase tracking-wider border-2 rounded-md border-accent text-accent hover:bg-accent-light hover:text-accent-dark focus:outline-none focus:bg-accent-light focus:text-accent-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99]"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : 'Send Message'}
          </button>
        </div>
        
        {submitStatus && (
          <div
            className={`mt-4 p-4 rounded-md border ${
              submitStatus.success 
                ? 'bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400' 
                : 'bg-red-500/10 border-red-500/30 text-red-500'
            } transition-all duration-500 animate-fadeIn`}
          >
            {submitStatus.success ? (
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-center font-medium">{submitStatus.message}</p>
              </div>
            ) : (
              <p className="text-center">{submitStatus.message}</p>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm; 