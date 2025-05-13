# Next.js Blog Demo with Prisma and NextAuth

This is a simple blog demo built with Next.js, Prisma, and NextAuth for authentication. It demonstrates a minimal blog setup with Google authentication and a database connection.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x)
- A Google OAuth 2.0 account for authentication setup

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

```
 **Install dependencies:**
```npm install```

**Configure environment variables:**
```
GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret
AUTH_SECRET=your-random-secret-key
DATABASE_URL=your-database-connection-string

```

**Set up the database:**

*If you haven't already, you'll need to run Prisma migrations to set up your database schema:*
```npx prisma migrate dev
```

**Running the Application**

```npm run dev
```