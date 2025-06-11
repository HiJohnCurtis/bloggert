/**
 * Generates the current date in the format used by blog posts
 * @returns {string} The current date in ISO format (e.g., "2024-03-21T15:30:00.000Z")
 */
export function getPostDate(): string {
    return new Date().toISOString();
}

// You can run this file directly to get the current date
if (require.main === module) {
    console.log('\nCurrent date for blog post:');
    console.log(getPostDate());
    console.log('\nCopy and paste this into your post\'s frontmatter date field.');
}
