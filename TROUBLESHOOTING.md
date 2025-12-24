# Troubleshooting Guide

## Common Issues and Solutions

### Issue 1: EPERM Error on .next/trace

**Symptoms:**

```
Error: EPERM: operation not permitted, open '.next\trace'
```

**Cause:**

- Multiple Node.js processes running
- Corrupted `.next` build cache
- File locks from previous builds

**Solution:**

```powershell
# Stop all Node.js processes
Get-Process node | Stop-Process -Force

# Wait a moment
Start-Sleep -Seconds 2

# Remove .next directory
Remove-Item -Path ".next" -Recurse -Force

# Start fresh
npm run dev
```

### Issue 2: Missing Manifest Files

**Symptoms:**

```
Cannot find module '.next\server\middleware-manifest.json'
ENOENT: no such file or directory, open '.next\routes-manifest.json'
```

**Cause:**

- Incomplete or interrupted build
- Corrupted `.next` directory

**Solution:** Same as Issue 1 - clean rebuild required.

### Issue 3: Port Already in Use

**Symptoms:**

```
⚠ Port 3000 is in use by process XXXX, using available port 3001 instead.
```

**Solution:** Either use the alternative port (3001), or free up port 3000:

```powershell
# Find process using port 3000
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess

# Kill the process
taskkill /F /PID <PID>
```

### Issue 4: React Context Errors

**Symptoms:**

```
TypeError: (0 , react__WEBPACK_IMPORTED_MODULE_0__.createContext) is not a function
```

**Cause:**

- Components using Swiper or other context-based libraries not marked as client components

**Solution:** Add `"use client"` directive at the top of the component file:

```typescript
"use client";

import React from "react";
// ... rest of imports
```

## Build Commands

### Development

```bash
npm run dev
```

Starts development server on http://localhost:3000

### Production Build

```bash
npm run build
```

Creates optimized production build

### Start Production Server

```bash
npm start
```

Runs the production build

### Type Check

```bash
npx tsc --noEmit
```

Checks TypeScript types without building

### Clean Build

```bash
# PowerShell
Remove-Item -Path ".next" -Recurse -Force
npm run dev
```

## Development Environment

### Requirements

- Node.js 18.x or 20.x
- npm 9.x or higher
- Windows, macOS, or Linux

### Recommended VS Code Extensions

- ESLint
- Prettier
- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense (if using Tailwind)

## Quick Fixes Checklist

If something isn't working:

1. ✅ **Stop all Node processes**

   ```powershell
   Get-Process node | Stop-Process -Force
   ```

2. ✅ **Clear the build cache**

   ```powershell
   Remove-Item -Path ".next" -Recurse -Force
   ```

3. ✅ **Check for TypeScript errors**

   ```bash
   npx tsc --noEmit
   ```

4. ✅ **Restart the dev server**

   ```bash
   npm run dev
   ```

5. ✅ **Check browser console** for runtime errors

6. ✅ **Verify port availability**
   ```powershell
   Get-NetTCPConnection -LocalPort 3000
   ```

## Getting Help

If issues persist:

1. Check the terminal output for specific error messages
2. Review the migration documentation in `MIGRATION-NOTES.md`
3. Check the build status in `BUILD-STATUS.md`
4. Look for TypeScript errors in your IDE
5. Check the browser console for client-side errors

## Known Working Configuration

This project is confirmed working with:

- Next.js 15.5.4
- React 19.0.0
- TypeScript 5.x
- Node.js 20.11.0
- npm 10.x

## File Structure

```
Webtec-next/
├── app/                    # Next.js 15 App Router
├── components/             # React components
├── public/                 # Static assets
├── types/                  # TypeScript type declarations
├── .next/                  # Build output (auto-generated)
├── node_modules/           # Dependencies (auto-generated)
└── package.json            # Project configuration
```

## Important Notes

- The `.next` directory is auto-generated and can be safely deleted
- Never commit `.next` or `node_modules` to Git
- Always stop the dev server before making major changes
- TypeScript strict mode is enabled - all types must be defined
- Use `"use client"` for any component using hooks or browser APIs

---

**Last Updated:** October 31, 2025 **Next.js Version:** 15.5.4 **Status:** Production Ready ✅
