# Run before pushing, important for SEO
$baseUrl = "https://igralnica-zanimalnica.netlify.app"
$gitRepoPath = (Get-Location).Path  # Use the current path as the Git repository path

Set-Content -Path "sitemap.xml" -Value '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

Get-ChildItem -Recurse -Include "*.html" -Path $gitRepoPath | ForEach-Object {
    $url = $_.FullName.Replace($gitRepoPath, "").Replace("\", "/")
    $lastMod = (git log -1 --format="%ad" --date=format-local:"%Y-%m-%d" -- $_.FullName).Trim()
    Add-Content -Path "sitemap.xml" -Value "<url>"
    Add-Content -Path "sitemap.xml" -Value "    <loc>$baseUrl$url</loc>"
    Add-Content -Path "sitemap.xml" -Value "    <lastmod>$lastMod</lastmod>"
    Add-Content -Path "sitemap.xml" -Value "</url>"
}

Add-Content -Path "sitemap.xml" -Value '</urlset>'
Write-Host "Sitemap generated successfully!"