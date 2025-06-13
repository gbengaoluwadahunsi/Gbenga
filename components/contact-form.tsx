"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Send } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import emailjs from '@emailjs/browser'
import { useForm } from "react-hook-form"

const fadeInUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { handleSubmit, reset } = useForm<FormData>()
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = async () => {
    if (!formRef.current) return;
    setIsSubmitting(true);
    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      if (result.status === 200) {
        console.log("EmailJS Success - showing toast");
        toast({
          title: "Message sent! ✉️",
          description: "Thank you for reaching us, Message sent successfully!",
          variant: "default",
          className: "border-green-500 bg-green-50 dark:bg-green-900",
        });
        reset();
      } else {
        throw new Error("EmailJS did not return status 200");
      }
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      console.log("EmailJS Error - showing error toast");
      toast({
        title: "Error",
        description: error?.text || error?.message || "Error sending message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit(sendEmail)}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8 space-y-6"
      variants={staggerContainerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
        {/* Name Field */}
        <motion.div className="relative" variants={fadeInUpVariants}>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="peer block w-full appearance-none border-0 border-b-2 border-slate-300 dark:border-slate-600 bg-transparent py-3 px-0.5 text-sm text-slate-800 dark:text-slate-200 placeholder-transparent focus:border-primary dark:focus:border-primary-dark focus:outline-none focus:ring-0 transition-colors duration-200"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="absolute top-3 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-800 dark:text-slate-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:peer-focus:text-primary-dark"
          >
            Name
          </label>
        </motion.div>

        {/* Email Field */}
        <motion.div className="relative" variants={fadeInUpVariants}>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="peer block w-full appearance-none border-0 border-b-2 border-slate-300 dark:border-slate-600 bg-transparent py-3 px-0.5 text-sm text-slate-800 dark:text-slate-200 placeholder-transparent focus:border-primary dark:focus:border-primary-dark focus:outline-none focus:ring-0 transition-colors duration-200"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute top-3 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-800 dark:text-slate-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:peer-focus:text-primary-dark"
          >
            Email
          </label>
        </motion.div>
      </div>

      {/* Subject Field */}
      <motion.div className="relative" variants={fadeInUpVariants}>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="peer block w-full appearance-none border-0 border-b-2 border-slate-300 dark:border-slate-600 bg-transparent py-3 px-0.5 text-sm text-slate-800 dark:text-slate-200 placeholder-transparent focus:border-primary dark:focus:border-primary-dark focus:outline-none focus:ring-0 transition-colors duration-200"
          placeholder=" "
        />
        <label
          htmlFor="subject"
          className="absolute top-3 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-800 dark:text-slate-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:peer-focus:text-primary-dark"
        >
          Subject
        </label>
      </motion.div>

      {/* Message Field */}
      <motion.div className="relative" variants={fadeInUpVariants}>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          className="peer block w-full appearance-none border-0 border-b-2 border-slate-300 dark:border-slate-600 bg-transparent py-3 px-0.5 text-sm text-slate-800 dark:text-slate-200 placeholder-transparent focus:border-primary dark:focus:border-primary-dark focus:outline-none focus:ring-0 resize-none transition-colors duration-200"
          placeholder=" "
        />
        <label
          htmlFor="message"
          className="absolute top-3 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-800 dark:text-slate-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:peer-focus:text-primary-dark"
        >
          Message
        </label>
      </motion.div>

      <motion.div variants={fadeInUpVariants}>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 dark:from-primary-dark dark:to-accent-dark dark:hover:from-primary-dark/90 dark:hover:to-accent-dark/90 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>Processing...</>
          ) : (
            <>
              Send Message <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </motion.div>
    </motion.form>
  )
}