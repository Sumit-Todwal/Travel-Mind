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
