'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import type { FeatureItem } from '@/types';
import { aboutMotion } from '../motion';
import Image from 'next/image';

export const FeatureCard: React.FC<FeatureItem> = ({ title, description, icon }) => {
  return (
    <motion.div variants={aboutMotion.item} className="min-w-0 h-47.5">
      <motion.div
        initial={{ opacity: 0.0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="space-y-3"
        >
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={aboutMotion.iconHover}
            className="inline-flex items-center "
          >

            <Image
              src={icon}
              alt={title}
              className="w-10 h-10"
            />
          </motion.div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold tracking-tight text-neutral-25 md:text-base">
              {title}
            </h3>
            <p className="text-xs leading-relaxed text-neutral-300/70 md:text-sm">
              {description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};