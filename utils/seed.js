const connection = require('../connection/config');
const {User, Thoughts } = require('../models');
// Seed data

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected');
    
    await Thoughts.deleteMany({});
    await User.deleteMany({});

    const Users = [];
    
    for (let i = 0; i < 20; i++) {
        const fullName = getRandomName();
        const first = fullName.split(' ')[0];
        const last = fullName.split(' ')[1];
        const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;
    
        students.push({
          first,
          last,
          github,
          assignments,
        });

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
}