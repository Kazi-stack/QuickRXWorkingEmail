# QuickRX Email System Documentation

This document describes the email routing system for the QuickRX Pharmacy website, which routes all forms and mailto links to `info@quickrx134.com` using Microsoft 365/Outlook SMTP.

## 📧 Email Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Email Configuration
OUTLOOK_SMTP_HOST=smtp.office365.com
OUTLOOK_SMTP_PORT=587
OUTLOOK_USER=info@quickrx134.com
OUTLOOK_PASS=__SET_THIS__

# Email Recipients
EMAIL_TO=info@quickrx134.com

# Environment
NODE_ENV=development
```

### Microsoft 365 Setup

1. **Enable SMTP Authentication**:
   - Go to Microsoft 365 Admin Center
   - Navigate to Exchange > Mail Flow > Connectors
   - Ensure SMTP authentication is enabled for your domain

2. **App Password** (Recommended):
   - Go to account.office.com/security
   - Enable 2-factor authentication
   - Generate an app password for the email system
   - Use this app password in `OUTLOOK_PASS`

3. **Alternative: Account Password**:
   - If 2FA is not enabled, use the account password
   - **Note**: This is less secure and not recommended for production

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment

```bash
# Copy the example environment file
cp env.example .env

# Edit .env with your actual credentials
nano .env
```

### 3. Start the Development Environment

```bash
# Start both frontend and email server
npm run dev:full

# Or start them separately
npm run dev        # Frontend (Vite)
npm run server     # Email server (Express)
```

### 4. Test the Email System

```bash
# Run comprehensive email tests
npm run test:email
```

## 📋 Email Forms

### Contact Form (`/contact`)
- **Fields**: Name, Email, Phone, Message
- **Endpoint**: `POST /api/contact`
- **Email Subject**: `[QuickRX CONTACT] Contact Form from {name}`

### Refill Form (`/refill`)
- **Fields**: First Name, Last Name, DOB, Phone, Email, RX Number, Pickup Method, Pickup Date, Additional Notes
- **Endpoint**: `POST /api/refill`
- **Email Subject**: `[QuickRX REFILL] Refill Request for {firstName} {lastName}`

### Transfer Form (`/transfer`)
- **Fields**: First Name, Last Name, DOB, Phone, Email, Current Pharmacy, Pharmacy Phone, Prescription Names, Prescription Numbers, Additional Info
- **Endpoint**: `POST /api/transfer`
- **Email Subject**: `[QuickRX TRANSFER] Transfer Request for {firstName} {lastName}`

### Feedback Form (`/`)
- **Fields**: Rating (1-5), Feedback, Name (optional), Email (optional)
- **Endpoint**: `POST /api/feedback`
- **Email Subject**: `[QuickRX FEEDBACK] Customer Feedback - {rating}/5 stars`

## 🔗 Mailto Links

All mailto links throughout the website now point to `info@quickrx134.com`:

- Header navigation
- Footer contact information
- Contact page
- Service pages
- Legal pages (Privacy Policy, Terms of Service, etc.)
- Newsletter pages
- Blog pages

## 🌐 BASE_URL Configuration

The project now uses a smart BASE_URL resolver that automatically handles different environments:

### Environment Detection
- **Browser**: Uses same-origin (`''`) for relative URLs
- **Node.js**: Uses environment variables or sensible defaults
- **Production**: Defaults to `https://quickrx134.com` when `NODE_ENV=production`
- **Development**: Defaults to `http://localhost:5173`

### Configuration Options
```bash
# Override BASE_URL for any environment
export BASE_URL=https://custom-domain.com

# Set environment
export NODE_ENV=production
```

### Testing BASE_URL Logic
```bash
npm run test:base-url
```

## 🏥 Health Checks

### Basic Health Check
```bash
# Uses smart BASE_URL resolution
curl $(node -e "import('./src/lib/test-utils.js').then(m => console.log(m.getApiUrl('/api/health')))")
```

### Email Health Check
```bash
# Uses smart BASE_URL resolution
curl $(node -e "import('./src/lib/test-utils.js').then(m => console.log(m.getApiUrl('/api/health/email')))")
```

This sends a test email to verify the SMTP configuration is working.

## 🧪 Testing

### Automated Tests
```bash
npm run test:email
```

This runs comprehensive tests for:
- Health check endpoints
- All form submissions
- Email validation
- Error handling
- BASE_URL resolution across environments

### BASE_URL Testing
```bash
npm run test:base-url
```

Tests the smart BASE_URL resolver in different environments:
- Development environment
- Production environment
- Custom BASE_URL override
- API URL generation

### Manual Testing
1. Submit each form on the website
2. Check that emails arrive in the Outlook inbox
3. Verify mailto links open with correct email address
4. Test error scenarios (invalid data, network issues)

## 📊 Email Features

### Enhanced Email Content
- **Professional HTML templates** with QuickRX branding
- **Correlation IDs** for tracking submissions
- **Metadata** including page URL, timestamp, form type
- **Both HTML and text versions** for compatibility

### Security Features
- **Input validation** on all forms
- **Rate limiting** (can be added to server)
- **CORS protection** for API endpoints
- **Environment-based configuration**

### Logging
- **Success logs** with correlation IDs and message IDs
- **Error logs** with detailed error messages
- **Console output** for development debugging

## 🔧 Troubleshooting

### Common Issues

#### 1. SMTP Authentication Failed
```
Error: Invalid login: 535 5.7.3 Authentication unsuccessful
```
**Solution**: 
- Verify username and password in `.env`
- Check if 2FA is enabled (use app password)
- Ensure SMTP authentication is enabled in Microsoft 365

#### 2. Connection Timeout
```
Error: connect ETIMEDOUT
```
**Solution**:
- Check internet connection
- Verify SMTP host and port
- Check firewall settings

#### 3. CORS Errors
```
Error: Access to fetch at 'http://localhost:3001/api/contact' from origin 'http://localhost:5173' has been blocked by CORS policy
```
**Solution**:
- Ensure email server is running on port 3001
- Check CORS configuration in `server.js`

#### 4. Form Not Submitting
**Solution**:
- Check browser console for errors
- Verify API endpoints are accessible
- Ensure all required fields are filled

### Debug Mode

Enable debug logging by setting:
```env
NODE_ENV=development
DEBUG=email:*
```

### Production Deployment

For production deployment:

1. **Update CORS origins** in `server.js`:
```javascript
origin: ['https://yourdomain.com']
```

2. **Use environment-specific configuration**:
```env
NODE_ENV=production
OUTLOOK_SMTP_HOST=smtp.office365.com
OUTLOOK_SMTP_PORT=587
OUTLOOK_USER=info@quickrx134.com
OUTLOOK_PASS=your-app-password
EMAIL_TO=info@quickrx134.com
```

3. **Set up proper logging**:
```javascript
// Add to server.js for production
const winston = require('winston')
```

## 📁 File Structure

```
├── src/
│   ├── lib/
│   │   └── email.js          # Email service functions
│   ├── pages/
│   │   ├── Contact.jsx       # Contact form (updated)
│   │   ├── Refill.jsx        # Refill form (updated)
│   │   ├── Transfer.jsx      # Transfer form (updated)
│   │   └── Home.jsx          # Feedback form (updated)
│   └── components/
│       └── Layout.jsx        # Footer with mailto links
├── server.js                 # Express email server
├── tests/
│   └── email-test.js         # Comprehensive test suite
├── env.example              # Environment template
├── .env                     # Environment variables (create this)
└── README_EMAIL.md          # This documentation
```

## 🔄 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Basic health check |
| `/api/health/email` | GET | Email system health check |
| `/api/contact` | POST | Contact form submission |
| `/api/refill` | POST | Refill form submission |
| `/api/transfer` | POST | Transfer form submission |
| `/api/feedback` | POST | Feedback form submission |

## 📞 Support

For issues with the email system:

1. **Check the logs** in the server console
2. **Run the test suite** with `npm run test:email`
3. **Verify environment variables** are set correctly
4. **Test SMTP connection** manually if needed

## 🔒 Security Notes

- **Never commit** `.env` files to version control
- **Use app passwords** instead of account passwords when possible
- **Enable 2FA** on the Microsoft 365 account
- **Regularly rotate** email passwords
- **Monitor** email logs for suspicious activity

## 📈 Monitoring

### Email Delivery Monitoring
- Check Outlook inbox for received emails
- Monitor server logs for failed deliveries
- Use correlation IDs to track specific submissions

### Performance Monitoring
- Monitor response times for API endpoints
- Track email sending success rates
- Monitor SMTP connection stability

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Maintainer**: QuickRX Development Team 