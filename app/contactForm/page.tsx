'use client'
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'

const Page = () => {
  const t = useTranslations("ContactForm");
  const [contactMethod, setContactMethod] = useState("phone");
  return (
    <section className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">{t('title')}</h2>
      <form className="space-y-4">
        <label className="block">
          <span className="text-gray-700">{t('name')}</span>
          <input type="text" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </label>

        <label className="block">
          <span className="text-gray-700">{t('email')}</span>
          <input type="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </label>

        <label className="block">
          <span className="text-gray-700">{t('message')}</span>
          <textarea name="message" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" rows={4} required></textarea>
        </label>

        <fieldset className="block">
          <legend className="text-gray-700">{t('contactMethod')}</legend>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="contactMethod" 
                value="phone" 
                checked={contactMethod === "phone"} 
                onChange={() => setContactMethod("phone")} 
                className="mr-2"
              />
              {t('phone')}
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="contactMethod" 
                value="telegram" 
                checked={contactMethod === "telegram"} 
                onChange={() => setContactMethod("telegram")} 
                className="mr-2"
              />
              {t('telegram')}
            </label>
          </div>
        </fieldset>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          {t('submit')}
        </button>
      </form>
    </section>
  )
}

export default Page
