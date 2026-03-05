'use client';

import { useState, useEffect } from 'react';

interface GithubStats {
  public_repos: number;
  followers: number;
  created_at: string;
}

interface UseGithubStatsReturn {
  stats: GithubStats | null;
  loading: boolean;
  error: string | null;
}

export function useGithubStats(username: string = 'Akhil-0911'): UseGithubStatsReturn {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchGithubStats = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`https://api.github.com/users/${username}`, {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (isMounted) {
          setStats({
            public_repos: data.public_repos || 0,
            followers: data.followers || 0,
            created_at: data.created_at || '',
          });
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error fetching GitHub stats:', err);
          setError('Failed to load GitHub stats');
          // Set fallback data
          setStats({
            public_repos: 0,
            followers: 0,
            created_at: '',
          });
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchGithubStats();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return { stats, loading, error };
}
