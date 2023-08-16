"""
Run this before PR to update sitemap. Improves SEO.
"""
import re
import subprocess
from datetime import datetime

base_url = "https://igralnica-zanimalnica.netlify.app"

date_pattern = r'\d{4}-\d{2}-\d{2}'
last_date = datetime.strptime("2023-07-25", "%Y-%m-%d")

# Execute git blame and get the output
cmd = ["git", "blame", "script.js"]
result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8', errors='ignore')
blame = result.stdout
blame = blame.replace('`\n', '`endofconst\n')

# Get "mainContent" variable
pattern = r"const mainContent = {[\s\S]*?};"
match = re.search(pattern, blame)
if match:
    dictionary_str = match.group(0)
    dictionary_pattern = r"'(.*?)': (.*?HTML),"
    extracted_dict = re.findall(dictionary_pattern, dictionary_str)
    urls = {}
    for key, value in extracted_dict:
        urls[value] = key

# Sitemap header
sitemap = """<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n"""

for line in blame.split('\n'):
    # Get the url for the <loc> tag
    if 'const' in line and 'HTML' in line:
        loc = line.split('const ')[1].replace(' ', '').replace('=', '')
        sitemap += f"""<url>\n\t<loc>{base_url}{urls[loc]}</loc>\n"""
    # Get the date from git blame
    date = re.findall(date_pattern, line)
    if not date:
        continue
    date = datetime.strptime(date[0], "%Y-%m-%d")
    # Compare date in current line with latest change we have
    if date > last_date:
        # We set this as our <lastmod> until more recent date pops up for the <loc>
        last_date = date
    if "`endofconst" in line:
        sitemap += f"""\t<lastmod>{last_date.strftime("%Y-%m-%d")}</lastmod>\n</url>\n"""
        last_date = datetime.strptime("2023-07-25", "%Y-%m-%d")
    if '// End of HTML' in line:
        break

# Save string into file
with open("sitemap.xml", "w") as file:
    file.write(sitemap)
