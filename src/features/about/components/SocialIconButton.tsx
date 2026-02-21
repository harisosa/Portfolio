'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import type { SocialItem } from '@/types';

export const SocialIconButton: React.FC<SocialItem> = ({ label, href, icon: Icon }) => {
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="h-9 w-9 rounded-full border-neutral-800 bg-transparent text-neutral-200/80 hover:bg-neutral-900 hover:text-neutral-25"
    >
      <a href={href} aria-label={label}>
        <Icon className="h-4 w-4" />
      </a>
    </Button>
  );
};
