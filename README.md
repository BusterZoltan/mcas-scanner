# MCAS Food Scanner

A web app to search packaged foods and check ingredients against a custom MCAS trigger list.
Pulls live data from the Open Food Facts database (millions of products).

---

## Deploy in ~10 minutes (free, no coding required)

### Step 1 — Create a free GitHub account
Go to https://github.com and sign up if you don't have one.

### Step 2 — Create a new repository
1. Click the **+** button in the top right → **New repository**
2. Name it `mcas-scanner`
3. Make sure it's set to **Public**
4. Click **Create repository**

### Step 3 — Upload the files
1. On your new repo page, click **uploading an existing file**
2. Drag and drop these files/folders:
   - `index.html`
   - `vercel.json`
   - The entire `api/` folder (drag the whole folder)
3. Click **Commit changes**

### Step 4 — Deploy to Vercel
1. Go to https://vercel.com and sign up with your GitHub account
2. Click **Add New Project**
3. Find and select your `mcas-scanner` repository
4. Click **Deploy** (all settings can stay as default)
5. Wait ~1 minute — Vercel will give you a live URL like `mcas-scanner.vercel.app`

That's it! Open the URL on any phone or computer.

---

## Features
- Search millions of packaged foods from Open Food Facts
- Checks every ingredient against your personal MCAS trigger list
- Pre-loaded with common MCAS triggers (carrageenan, annatto, sulfites, etc.)
- Flags "opaque" ingredients like "natural flavors" that may hide triggers
- Add/remove triggers — saved in your browser automatically
- Works on mobile
- Dark mode support

## The trigger list
Your personal trigger list is saved in your browser. If you switch devices, go to
"My trigger list" and re-add your specific triggers.

## Adding new products to the database
If a product isn't found, you can add it at https://world.openfoodfacts.org —
it's a community database anyone can contribute to.
