import { NextResponse } from "next/server";

export const revalidate = 3600; // Revalidate every hour

interface GitHubUserResponse {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface GitHubEvent {
  type: string;
  created_at: string;
}

export async function GET() {
  try {
    const username = "bevankeren";

    // Fetch user data and recent events in parallel
    const [userRes, eventsRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers: { Accept: "application/vnd.github.v3+json" },
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/events?per_page=100`, {
        headers: { Accept: "application/vnd.github.v3+json" },
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok) {
      throw new Error(`GitHub API error: ${userRes.status}`);
    }

    const userData: GitHubUserResponse = await userRes.json();

    // Count push events as a proxy for contributions (last 90 days from events API)
    let contributions = 0;
    if (eventsRes.ok) {
      const events: GitHubEvent[] = await eventsRes.json();
      contributions = events.filter(
        (e) => e.type === "PushEvent" || e.type === "CreateEvent"
      ).length;
    }

    return NextResponse.json({
      repos: userData.public_repos,
      contributions,
      followers: userData.followers,
    });
  } catch (error) {
    console.error("GitHub API fetch failed:", error);
    // Return fallback data
    return NextResponse.json(
      { repos: 0, contributions: 0, followers: 0, error: true },
      { status: 500 }
    );
  }
}
