/**
 * Clerk Authentication Integration for TBH Rentals
 * Supports dual-mode authentication:
 * 1. Clerk Social & Magic Link Authentication (RS256 JWT)
 * 2. TBH Native OTP / Password Authentication (HMAC SHA-256 JWT)
 */
import { API_BASE } from './api';
import { User } from '../types';

export const CLERK_PUBLISHABLE_KEY = 
  ((import.meta as any).env?.VITE_CLERK_PUBLISHABLE_KEY as string) || 
  'pk_test_ZGVlcC16ZWJyYS02MTUxLmNsZXJrLmFjY291bnRzLmRldiQ';

function isOwnerAdminEmail(email?: string): boolean {
  if (!email) return false;
  return email.trim().toLowerCase() === 'tupakulahemanth828@gmail.com';
}

export async function syncClerkUserWithBackend(clerkToken: string): Promise<User | null> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(`${API_BASE}/auth/clerk/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${clerkToken}`,
        'Content-Type': 'application/json'
      },
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn('[CLERK AUTH] Backend synchronization returned status:', res.status);
      return null;
    }

    const data = await res.json();
    if (data && data.authenticated) {
      const isOwnerAdmin = isOwnerAdminEmail(data.email);
      const user: User = {
        id: data.id || 1,
        fullName: data.fullName || 'TBH Rider',
        email: data.email || '',
        phoneNumber: data.phoneNumber || '',
        role: isOwnerAdmin ? 'ROLE_ADMIN' : (data.role || 'ROLE_USER'),
        drivingLicenseVerified: data.kycVerified ?? (data.drivingLicenseVerified ?? false),
        mobileVerified: data.mobileVerified ?? false,
        clerkUserId: data.clerkUserId
      };

      sessionStorage.setItem('tbh_token', clerkToken);
      sessionStorage.setItem('tbh_user', JSON.stringify(user));
      localStorage.setItem('tbh_token', clerkToken);
      return user;
    }
    return null;
  } catch (err: any) {
    clearTimeout(timeoutId);
    console.error('[CLERK AUTH] Sync notice (using client state fallback):', err?.message || err);
    return null;
  }
}