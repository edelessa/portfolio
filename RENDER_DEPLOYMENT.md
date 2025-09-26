# 🚀 Deploy Your Portfolio to Render

## Step 1: Push to GitHub (if not already done)

1. **Create GitHub Repository:**
   - Go to https://github.com
   - Click "New repository"
   - Name: "Portfolio" (or your preferred name)
   - Make it Public
   - Click "Create repository"

2. **Push Your Code:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

## Step 2: Deploy Frontend to Render

1. **Go to Render:**
   - Visit https://render.com
   - Click "Get Started for Free"
   - Sign up with GitHub

2. **Create New Web Service:**
   - Click "New +" button
   - Select "Static Site"
   - Connect your GitHub repository
   - Choose your "Portfolio" repository

3. **Configure Settings:**
   - **Name:** `portfolio-ru` (or your preferred name)
   - **Branch:** `main`
   - **Root Directory:** Leave empty
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
   - **Node Version:** `18`

4. **Deploy:**
   - Click "Create Static Site"
   - Wait 2-3 minutes for deployment
   - Get your live URL: `https://portfolio-ru.onrender.com`

## Step 3: Deploy Backend (Optional - for Contact Form)

1. **Create New Web Service:**
   - Click "New +" button
   - Select "Web Service"
   - Connect your GitHub repository

2. **Configure Backend:**
   - **Name:** `portfolio-api-ru`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm run server`
   - **Node Version:** `18`

3. **Add Environment Variables:**
   - Click "Environment" tab
   - Add these variables:
     ```
     DB_HOST=your-postgres-host
     DB_NAME=portfolio_db
     DB_USER=your-username
     DB_PASSWORD=your-password
     DB_PORT=5432
     PORT=10000
     ```

4. **Deploy Backend:**
   - Click "Create Web Service"
   - Wait for deployment
   - Get backend URL: `https://portfolio-api-ru.onrender.com`

## Step 4: Connect Frontend to Backend

1. **Update Frontend Code:**
   - Change backend URL in Contact.jsx
   - Replace `localhost:3001` with your Render backend URL

2. **Redeploy Frontend:**
   - Push changes to GitHub
   - Render auto-deploys your updates

## 🎯 Your Live Portfolio

**Frontend URL:** `https://portfolio-ru.onrender.com`
**Backend URL:** `https://portfolio-api-ru.onrender.com`

## 📱 Share on LinkedIn

1. **Copy your portfolio URL**
2. **Go to LinkedIn**
3. **Update your profile:**
   - Add to "Featured" section
   - Or add to "About" section
   - Example: "Check out my portfolio: https://portfolio-ru.onrender.com"

## 🔄 Continuous Development

**To update your portfolio:**
1. Make changes to your code
2. Run `npm run build` (optional - Render does this automatically)
3. Push to GitHub: `git push origin main`
4. Render automatically deploys your changes!

## 💡 Pro Tips

- **Custom Domain:** You can add your own domain in Render settings
- **Free Tier:** Render free tier is perfect for portfolios
- **Auto-Deploy:** Every GitHub push = automatic deployment
- **SSL:** Your site gets HTTPS automatically

## 🎉 You're Live!

Your portfolio will be accessible worldwide at your Render URL!
