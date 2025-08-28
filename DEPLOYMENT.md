# QuickRX Email Deployment Guide

This guide explains how to deploy the QuickRX pharmacy website with email functionality to Vercel.

## Prerequisites

- Vercel account
- Microsoft 365/Outlook account (info@quickrx134.com)
- Domain with proper DNS configuration

## Step 1: Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Deploy the project
3. The API routes in `/api/` will be automatically deployed as serverless functions

## Step 2: Configure Environment Variables

In your Vercel project dashboard, go to **Settings → Environment Variables** and add:

```
SMTP_HOST = smtp.office365.com
SMTP_PORT = 587
SMTP_USER = info@quickrx134.com
SMTP_PASS = <Your Outlook password or App Password>
TO_EMAIL = info@quickrx134.com
```

### Important Notes:
- If your Microsoft 365 account has MFA enabled, you'll need to create an **App Password**
- Go to Microsoft 365 Admin → Security → Advanced Security → App Passwords
- Generate a new app password and use that instead of your regular password

## Step 3: Enable SMTP Authentication

In Microsoft 365 Admin Center:
1. Go to **Exchange → Mail Flow → Connectors**
2. Ensure SMTP AUTH is enabled for your domain
3. If not, create a new connector for SMTP AUTH

## Step 4: Configure DNS Records

### SPF Record
Add this TXT record to your domain's DNS:
```
v=spf1 include:spf.protection.outlook.com -all
```

### DKIM Record
1. In Microsoft 365 Admin → Exchange → DKIM
2. Enable DKIM for your domain
3. Add the provided CNAME record to your DNS

## Step 5: Test the Email System

1. Visit your deployed site
2. Go to the Refill page
3. Fill out and submit the form
4. Check info@quickrx134.com for the email

## Troubleshooting

### Email Not Sending
- Check Vercel function logs in the dashboard
- Verify environment variables are set correctly
- Ensure SMTP credentials are valid
- Check if App Password is required for MFA

### Emails Going to Spam
- Verify SPF and DKIM records are properly configured
- Use a consistent "from" address
- Avoid spam trigger words in subject lines

### API Errors
- Check that the API routes are properly deployed
- Verify the fetch URL in the frontend is relative (`/api/refill`)
- Check CORS settings if needed

## Security Considerations

- Never commit environment variables to version control
- Use App Passwords instead of regular passwords when possible
- Regularly rotate SMTP credentials
- Monitor email sending logs for unusual activity

## Support

For issues with:
- **Vercel deployment**: Check Vercel documentation
- **Microsoft 365**: Contact your Microsoft 365 admin
- **DNS configuration**: Contact your domain registrar
- **Email deliverability**: Check Microsoft 365 message center
