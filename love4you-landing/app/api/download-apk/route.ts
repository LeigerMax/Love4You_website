import { NextResponse } from 'next/server';

export async function GET() {
    const token = process.env.GITHUB_TOKEN;
    
    if (!token) {
        return NextResponse.json({ error: "Missing GITHUB_TOKEN in environment variables." }, { status: 500 });
    }

    const repo = "LeigerMax/Love4You-Flutter";
    
    try {
        // 1. Fetch latest release metadata
        const releaseRes = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/vnd.github.v3+json",
            },
            // Do not cache this request, to always serve the latest APK.
            cache: 'no-store'
        });

        if (!releaseRes.ok) {
            return NextResponse.json({ error: "Latest release not found or unauthorized." }, { status: releaseRes.status });
        }

        const release = await releaseRes.json();
        
        // 2. Find the .apk asset
        const apkAsset = release.assets.find((asset: any) => asset.name.endsWith('.apk'));

        if (!apkAsset) {
            return NextResponse.json({ error: "No APK file found in the latest release." }, { status: 404 });
        }

        // 3. Request the asset download URL
        // With 'Accept: application/octet-stream', GitHub API responds with a 302 redirect to an AWS S3 URL.
        const assetRes = await fetch(apkAsset.url, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/octet-stream",
            },
            redirect: "manual" // Catch the redirect instead of downloading it to the Vercel server
        });

        if (assetRes.status === 302 || assetRes.status === 301) {
            const location = assetRes.headers.get("location");
            if (location) {
                // Redirect the user's browser directly to the S3 bucket URL, which starts the auto-download
                return NextResponse.redirect(location);
            }
        }
        
        // Fallback (e.g., if Node/fetch auto-followed despite redirect: manual)
        return new NextResponse(assetRes.body, {
            headers: {
                "Content-Type": "application/vnd.android.package-archive",
                "Content-Disposition": `attachment; filename="${apkAsset.name}"`,
            }
        });

    } catch (error) {
        console.error("Error fetching APK from GitHub:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
