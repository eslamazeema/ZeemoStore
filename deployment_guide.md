# ZeemoStore Production Deployment Guide

This guide explains how to deploy your full-stack ZeemoStore application (Node.js + Express + MongoDB) to production and link it to your domain **zeemostore.com** (currently parked).

---

## 📦 Step 1: Set Up MongoDB in the Cloud (MongoDB Atlas)

Since local storage is replaced by MongoDB, you need a database running in the cloud. MongoDB Atlas provides a free-tier cluster.

1. **Sign Up**: Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free account.
2. **Create Database**: Create a new shared cluster (Free Tier) and select your preferred region (e.g., AWS / Frankfurt).
3. **Database User**: Under **Database Access**, create a user with a secure password. Remember these credentials.
4. **Network Access**: Under **Network Access**, click **Add IP Address** and choose **Allow Access From Anywhere** (`0.0.0.0/0`) so that your host server can connect.
5. **Get Connection String**:
   - Go to the database dashboard.
   - Click **Connect** -> **Drivers**.
   - Copy the connection string. It will look like:
     `mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority`
   - Replace `<username>` and `<password>` with your database user credentials.

---

## 🚀 Step 2: Host the Node.js Server (on Render)

Render is a premium, developer-friendly cloud hosting platform with a generous free tier for Node.js apps.

1. **Push to GitHub**: Push your codebase (excluding `.env` and `node_modules`) to a private or public repository on GitHub.
2. **Create Account**: Go to [Render](https://render.com/) and sign up with your GitHub account.
3. **Create Web Service**:
   - In Render, click **New** -> **Web Service**.
   - Connect your GitHub repository containing the store codebase.
4. **Configure Settings**:
   - **Name**: `zeemostore`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Select **Free**.
5. **Add Environment Variables**:
   - Click **Advanced** -> **Add Environment Variable**.
   - Add `MONGODB_URI` and paste your MongoDB Atlas connection string from Step 1.
   - Add `PORT` with value `10000` (Render will map this automatically, and our `server.js` listens to it via `process.env.PORT || 8085`).
6. **Deploy**: Click **Create Web Service**. Wait for the logs to say `ZeemoStore Server running` and `Successfully connected to MongoDB Database`. Copy your Render URL (e.g., `zeemostore.onrender.com`).

---

## 🌐 Step 3: Configure Your Domain (zeemostore.com)

Your domain registrar currently points `zeemostore.com` to parking nameservers (`ns1.dns-parking.com` & `ns2.dns-parking.com`). To point it to your deployed Render app, you have two methods:

### Option A: Use Cloudflare (Recommended for Nameservers, SSL & Security)
1. **Sign Up**: Go to [Cloudflare](https://www.cloudflare.com/) and create a free account.
2. **Add Domain**: Click **Add Site**, enter `zeemostore.com`, and select the free plan.
3. **Get Cloudflare Nameservers**: Cloudflare will scan your records and provide two unique nameservers (e.g. `dara.ns.cloudflare.com` and `jeff.ns.cloudflare.com`).
4. **Update Nameservers at Registrar**:
   - Go to the domain registrar where you purchased `zeemostore.com`.
   - Find the **DNS Settings** or **Custom Nameservers** section.
   - Change your current nameservers (`ns1.dns-parking.com` / `ns2.dns-parking.com`) to the **Cloudflare Nameservers** provided.
5. **Configure DNS Records in Cloudflare**:
   - Go to your domain dashboard in Cloudflare -> **DNS** -> **Records**.
   - Add a **CNAME** record:
     - **Type**: `CNAME`
     - **Name**: `@` (root)
     - **Target**: `zeemostore.onrender.com` (your Render URL)
     - **Proxy status**: Proxied (orange cloud)
   - Add another **CNAME** record for `www`:
     - **Type**: `CNAME`
     - **Name**: `www`
     - **Target**: `zeemostore.onrender.com`
     - **Proxy status**: Proxied

### Option B: Point directly in your Domain Registrar Panel
If you do not want to use Cloudflare, you must change the nameservers from "Parked" to the "Registrar Default DNS" at your registrar, allowing you to edit the DNS records directly:
1. **CNAME Configuration**:
   - In your registrar's DNS record manager, add a **CNAME Record** with host `www` pointing to `zeemostore.onrender.com`.
2. **Redirect Configuration (Root to www)**:
   - Add a redirection/forwarding rule: Redirect the root domain `zeemostore.com` to `https://www.zeemostore.com`.
   - (Or add an **A Record** pointing `@` to Render's public IP address, which is `216.24.57.1`).
