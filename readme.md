# Travel-Mind

Travel-Mind is a web application designed for booking and discovering accommodations.

## Project Goals
- Easy listing exploration
- User booking & reviews

## API Endpoints
- `/listings` - Browse all listings
- `/listings/:id` - Show listing

## Authentication
User auth is powered by Passport.js with session cookies.

## Database Architecture
- User (1) -> Listings (N)
- Listing (1) -> Reviews (N)

## Prerequisites
- Node.js >= 16
- MongoDB

### Listing Schema
Includes title, description, image, price, location, country, reviews, owner, geometry.

### Mapbox Integration
Set `MAP_TOKEN` in your `.env` file.

### Cloudinary Configuration
Requires `CLOUD_NAME`, `CLOUD_API_KEY`, and `CLOUD_API_SECRET`.

## Troubleshooting
- MongoDB connection issues
- Missing environment variables

### Razorpay Setup
Provide `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`.

| Component | Technology |
|---|---|
| Backend | Node / Express |
| Database | MongoDB |

## Code Style
Follow standard Express.js MVC architectural patterns.

```bash
npm run dev
```
