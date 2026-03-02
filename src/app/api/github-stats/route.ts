import { NextResponse } from 'next/server';

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  const username = process.env.GITHUB_USERNAME || 'Akhil-0911';
  
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json({
      public_repos: data.public_repos || 0,
      followers: data.followers || 0,
      created_at: data.created_at || '',
    });
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch GitHub stats',
        public_repos: 0,
        followers: 0,
        created_at: '',
      },
      { status: 500 }
    );
  }
}
