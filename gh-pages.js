var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/marcodiazz/Enigma.git', // Update to point to your repository  
        user: {
            name: 'Marco', // update to use your name
            email: 'marcopadel21@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)