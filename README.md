🚀 TixStore - Premium Digital Account Store
Welcome to TixStore, a modern and secure platform for premium digital accounts and gaming assets. Built with the speed of Next.js and the security of Server-side API Routes.

✨ Features
⚡ Blazing Fast Performance: Optimized with Next.js App Router and Geist font.

🛡️ Secure Webhook Integration: Sensitive Discord webhooks are hidden behind server-side API routes to prevent leaks.

📱 Fully Responsive: Seamless experience across mobileSimulator, tablets, and desktops.

🏷️ Real-time Stock Status: Visual "Sold Out" indicators and grayscale effects for out-of-stock items.

💳 Multi-channel Payment: Integrated notifications for WhatsApp and PayPal inquiries.

🛠️ Tech Stack
Framework: Next.js 15

Styling: Tailwind CSS

Notifications: Discord Webhooks via Serverless Functions

Deployment: Vercel

🚀 Getting Started
Clone the repository:
```
git clone https://github.com/rootkiddoo/TixStore.git
```

Install dependencies:
npm install
Configure Environment Variables: Create a .env.local file in the root directory and add:
```
DISCORD_WEBHOOK_URL=your_secret_webhook_url
NEXT_PUBLIC_WA_NUMBER=your_phone_number
NEXT_PUBLIC_PAYPAL_EMAIL=your_email
```
Run development server:
```
npm run dev
```

🔒 Security Architecture
Unlike standard client-side implementations, TixStore uses a private API Route architecture:

User initiates a "Buy Now" request.

The request is sent to /api/notify.

The server fetches the secret DISCORD_WEBHOOK_URL and sends the data.

Result: Your webhook URL is never exposed to the client's browser.

📈 Roadmap
[x] Basic Landing Page & Gallery

[x] Secure Discord Notifications

[ ] Supabase Database Integration (Coming Soon)

[ ] Automated Payment Gateway

[ ] User Dashboard

Built with ❤️ by rootkiddo - 2026
