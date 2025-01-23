'use client';

import { useEffect } from 'react';
import { setDevelopmentFavicon } from '@/lib/utils';

export function DevelopmentFavicon() {
  useEffect(() => {
    setDevelopmentFavicon();
  }, []);

  return null;
} 