"""Generate a Facebook post image for the free complete intelligence case study offer."""
from PIL import Image, ImageDraw, ImageFont
import os

# Brand colours
NAVY = (15, 23, 42)
ORANGE = (249, 115, 22)
WHITE = (255, 255, 255)
SLATE = (30, 41, 59)
MUTED = (148, 163, 184)

WIDTH, HEIGHT = 1200, 630
OUTPUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "fb-post-free-report.png")

img = Image.new("RGB", (WIDTH, HEIGHT), NAVY)
draw = ImageDraw.Draw(img)

# Accent bar at top
draw.rectangle([0, 0, WIDTH, 6], fill=ORANGE)

# Subtle glow right side
for i in range(120):
    alpha_factor = 1 - (i / 120)
    r = int(NAVY[0] + (ORANGE[0] - NAVY[0]) * alpha_factor * 0.12)
    g = int(NAVY[1] + (ORANGE[1] - NAVY[1]) * alpha_factor * 0.12)
    b = int(NAVY[2] + (ORANGE[2] - NAVY[2]) * alpha_factor * 0.12)
    draw.rectangle([WIDTH - 350 + i, 0, WIDTH - 350 + i + 1, HEIGHT], fill=(r, g, b))

try:
    font_hero = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 46)
    font_large = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 36)
    font_medium = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 26)
    font_small = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 20)
    font_tag = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 14)
    font_cta = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 22)
    font_value = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 18)
except:
    font_hero = ImageFont.load_default()
    font_large = font_hero
    font_medium = font_hero
    font_small = font_hero
    font_tag = font_hero
    font_cta = font_hero
    font_value = font_hero

# Top left - brand tag
draw.text((50, 30), "PF & CO SITE INTELLIGENCE", fill=ORANGE, font=font_tag)

# FREE badge
badge_x, badge_y = 50, 68
draw.rounded_rectangle([badge_x, badge_y, badge_x + 100, badge_y + 36], radius=8, fill=ORANGE)
draw.text((badge_x + 18, badge_y + 6), "FREE", fill=NAVY, font=font_cta)

# Main headline
y = 118
draw.text((50, y), "Complete Site", fill=WHITE, font=font_hero)
draw.text((50, y + 52), "Intelligence Package", fill=WHITE, font=font_hero)

# Subline
draw.text((50, y + 118), "We need 2-3 live projects to run our", fill=MUTED, font=font_small)
draw.text((50, y + 143), "full platform through. Yours free.", fill=MUTED, font=font_small)

# Report list
report_y = y + 185
reports = [
    "Site Feasibility Report",
    "Geotechnical Desk Study",
    "Flood Risk Assessment",
    "Planning Statement",
    "Design & Access Statement",
    "Heritage, BNG, Energy & Transport",
    "Construction Management Plan",
]
for report in reports:
    draw.ellipse([50, report_y + 5, 60, report_y + 15], fill=ORANGE)
    draw.text((70, report_y), report, fill=WHITE, font=font_small)
    report_y += 27

# Right side stats
stats_x = WIDTH - 300
stat_bg = (25, 35, 55)

# RRP value callout - £15,625
draw.rounded_rectangle([stats_x, 80, stats_x + 240, 195], radius=20, fill=stat_bg)
draw.text((stats_x + 20, 88), "\u00a315,625", fill=ORANGE, font=font_hero)
draw.text((stats_x + 20, 143), "RRP VALUE", fill=MUTED, font=font_tag)
draw.text((stats_x + 20, 162), "Yours free", fill=WHITE, font=font_value)

draw.rounded_rectangle([stats_x, 215, stats_x + 240, 300], radius=16, fill=stat_bg)
draw.text((stats_x + 25, 228), "44", fill=ORANGE, font=font_large)
draw.text((stats_x + 25, 272), "DATA SOURCES", fill=MUTED, font=font_tag)

draw.rounded_rectangle([stats_x, 320, stats_x + 240, 405], radius=16, fill=stat_bg)
draw.text((stats_x + 25, 333), "17", fill=ORANGE, font=font_large)
draw.text((stats_x + 25, 377), "REPORT TYPES", fill=MUTED, font=font_tag)

draw.rounded_rectangle([stats_x, 425, stats_x + 240, 510], radius=16, fill=stat_bg)
draw.text((stats_x + 25, 438), "48hr", fill=ORANGE, font=font_large)
draw.text((stats_x + 25, 482), "TURNAROUND", fill=MUTED, font=font_tag)

# CTA bar at bottom
draw.rectangle([0, HEIGHT - 70, WIDTH, HEIGHT], fill=ORANGE)
draw.text((50, HEIGHT - 52), "First come, first served \u2014 email info@pfandco.co.uk", fill=NAVY, font=font_cta)

img.save(OUTPUT, "PNG", quality=95)
print(f"Image saved to: {OUTPUT}")
