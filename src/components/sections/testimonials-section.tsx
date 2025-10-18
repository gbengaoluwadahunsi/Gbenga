"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import DataLoader from "@/lib/data-loader"
import { Card, CardContent } from "@/components/ui/card"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function TestimonialsSection() {
  const testimonials = DataLoader.getTestimonials()
  
  return (
    <motion.section 
      className="bg-muted/40 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container space-y-10">
        <motion.h2 
          className="text-3xl font-bold tracking-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Others Say
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={fadeInUp} className="h-full">
              <Card className="h-full flex flex-col bg-primary/10 dark:bg-primary-dark/10 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden border border-primary/20 dark:border-primary-dark/20">
                <CardContent className="p-6 flex flex-col flex-grow space-y-4">
                  <div className="flex items-center gap-3">
                    <Image 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40} 
                      height={40}
                      className="rounded-full object-cover object-top h-40 w-40"
                    />
                    <div>
                      <div className="font-semibold text-sm text-slate-800 dark:text-slate-100">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
