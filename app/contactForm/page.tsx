'use client'
import { useTranslations } from 'next-intl';
import { useRouter  } from 'next/navigation'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5';
import emailjs from '@emailjs/browser';

const emailServiceKey = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY ?? '';
const emailTemplateKey = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY ?? '';
const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''

const Page = () => {
  const router = useRouter();
  const t = useTranslations('ContactForm');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [cursor, setCursor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true)

    emailjs.sendForm(
      emailServiceKey, 
      emailTemplateKey,
      event.target as HTMLFormElement,
      emailPublicKey
    )
    .then(() => {
      setIsLoading(false);
      router.push('/');
    })
    .catch(error => {
      setIsLoading(false);
      console.error('Failed to send message', error);
    });
  };

  useEffect(() => {
    setCursor(!!name && !!email && !!message);
  },  [name, email, message])

  return (
    <section className='max-w-xl mx-auto p-6  h-screen flex flex-col justify-center dark:text-black'>
      <form 
        className='px-2 space-y-4 relative bg-white shadow-md rounded-lg border-2 border-amber-400'
        onSubmit={handleSubmit}
      >
      <h2 className='text-2xl font-semibold mb-4'>{t('title')}</h2>
        <Link href={'/'} className='absolute top-2 right-1.5'>
          <IoCloseOutline size={32}/>
        </Link>
        <label className='block' htmlFor='name'>
          <span className='text-gray-700'>{t('name')}</span>
          <input 
            id='name'
            type='text' 
            name='name' 
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className='block' htmlFor='email'>
          <span className='text-gray-700'>{t('email')}</span>
          <input
            id='email'
            type='email'
            name='email'
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className='block' htmlFor='message'>
          <span className='text-gray-700'>{t('message')}</span>
          <textarea
            id='message'
            name='message' 
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
            rows={4} 
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button 
          type='submit' 
          className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition ${cursor ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        >
          {isLoading ? t('sending') : t('submit')}
        </button>
      </form>
    </section>
  )
}

export default Page
