'use client';

import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { aboutFeatures } from '@/features/about/constants/about';
import { Section } from '@/components/layout';
import { aboutMotion } from '@/features/about/motion';
import { FeatureCard } from '@/features/about/components';
import { SocialMedia } from '@/features/social-media/components';
import { SOCIAL_MEDIA } from '@/features/social-media/constants';

export type AboutSectionProps = {
  imageSrc: StaticImageData;
  imageAlt?: string;
};

export const About: React.FC<AboutSectionProps> = ({ imageSrc, imageAlt = 'About portrait' }) => {
  return (
    <Section id="about" className="w-full">
      <div className="custom-container py-14 md:py-24 lg:py-0">
        <motion.div
          variants={aboutMotion.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="space-y-10 md:space-y-12"
        >
          {/* Header row */}
          <div className="flex items-start justify-between gap-8 lg:h-47">
            {/* Headline kiri */}
            <motion.h2
              variants={aboutMotion.item}
              className="max-w-184 text-display-xl font-semibold leading-tight tracking-tight text-neutral-25 md:text-4xl"
            >
              I turn ideas and designs into functional, accessible, and performant websites{' '}
              <p className="text-[#149BB0]">using modern frontend technologies.</p>
            </motion.h2>

            {/* About Me + socials kanan */}
            <motion.div variants={aboutMotion.item} className="hidden items-start gap-20 md:flex md:flex-col">
              <Button
                variant="ghost"
                className="h-auto px-0 text-sm font-medium text-neutral-200/70 hover:bg-transparent hover:text-neutral-25"
                asChild
              >
                <a href="#about" className="inline-flex items-center gap-2">
                  About Me
                </a>
              </Button>

              <div className="flex items-center gap-2.5">
                  <SocialMedia socials={SOCIAL_MEDIA} />
              </div>
            </motion.div>
          </div>

          <motion.div variants={aboutMotion.item}>
            <Separator className="bg-neutral-900/70" />
          </motion.div>

          {/* Body */}
          <div className="flex flex-col flex-wrap gap-10.25 lg:h-128.25">
            <motion.div variants={aboutMotion.item} className="lg:w-113.25">
              <div className="relative overflow-hidden rounded-md">
                <div className="relative aspect-4/3 w-full lg:w-113.25">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    sizes=" w-full"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between md:hidden">
                <Button
                  variant="ghost"
                  className="h-auto px-0 text-sm font-medium text-neutral-200/70 hover:bg-transparent hover:text-neutral-25"
                  asChild
                >
                  <a href="#about" className="inline-flex items-center gap-2">
                    About Me
                  </a>
                </Button>

                <div className="flex items-center gap-2">
                  <SocialMedia socials={SOCIAL_MEDIA} />
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={aboutMotion.container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:max-w-176.5"
            >
              {aboutFeatures.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};