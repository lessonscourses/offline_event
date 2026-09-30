'use client';
import { useEffect, useState } from 'react';

// Full name stored by the apply form (sessionStorage 'legends-apply').
export default function useApplicant() {
  const [name, setName] = useState('');
  useEffect(() => {
    try { setName((JSON.parse(sessionStorage.getItem('legends-apply') || '{}').name || '').trim()); } catch {}
  }, []);
  return { full: name, first: name.split(/\s+/)[0] || '' };
}
