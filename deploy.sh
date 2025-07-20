#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🚀 Ready to deploy!"
    echo ""
    echo "Next steps:"
    echo "1. Deploy the .output directory to your hosting provider"
    echo "2. Ensure your domain points to the correct server"
    echo "3. Test the website at https://razzaghnoori.com/"
    echo "4. Submit the sitemap to Google Search Console: https://razzaghnoori.com/sitemap.xml"
    echo "5. Request re-indexing in Google Search Console"
else
    echo "❌ Build failed!"
    exit 1
fi 